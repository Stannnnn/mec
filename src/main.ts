import { Commands } from 'commands'
import { hamiltonianPathGenerator } from 'hamiltonianPathGenerator'
import { enableAutoRevive, killEscapers, spawnMonster, spawnRock } from 'mec'
import { DifficultyLevels } from 'Settings/Difficulty'
import { Themes } from 'Settings/themes'
import { createEvent, forRange } from 'utils'
import { Timer } from 'w3ts'
import { addScriptHook, W3TS_HOOK } from 'w3ts/hooks'
import { IBlock, IRegion, World } from 'World/World'
import { IPoint } from './World/World'

/*
    [ ] = TODO
    [O] = WIP
    [?] = Possibly fixed
    [X] = Done
*
    [X] BUG: Autorevive not working from start
    [X] Terrain order for themes is wrong
    [X] Specific commands to override difficulty levels
    [X] Help command
    [X] Use diff command trigger so that mec doesn't trigger
    [ ] BUG: Init_heroes breaks heroes, they won't die by killEscapers on new level
    [X] yarn transpile - to transpile the basemap again so that we can actually edit it (Should also regenerate the war3map.lua)
    [ ] Patrols in corner should have a tiny offset so that they match terrain and that it doesn't look like that they walk out too far
    [O] Implement https://github.com/voces/w3ts-jsx
    [X] Decide first which blocks on the size of a grid can have patrols, then use thatto spawn em based on config amount
    [X] Random rocks on the map
    [ ] Multiple diagonal patrols on the same tile
    [ ] Tiles per patrol should support 0.5
    [X] Fix start loc on 1x1 slide
    [X] Add seed for fixed levels
    [X] Diagonal terrain support
    [X] Start/end regions are based on block, should be based on center of grid
*/

const BUILD_DATE = compiletime(() => new Date().toUTCString())
const TS_VERSION = compiletime(() => require('typescript').version)
const TSTL_VERSION = compiletime(() => require('typescript-to-lua').version)

const tsMain = () => {
    print(`Build: ${BUILD_DATE}`)
    print(`Typescript: v${TS_VERSION}`)
    print(`Transpiler: v${TSTL_VERSION}`)
    print(' ')
    print('Welcome to TypeScript!')

    const tileSize = 128
    const mapTileOffset = 4
    const patrolOffset = 32

    // const unit = new Unit(Players[0], FourCC('hfoo'), 0, 0, 270)
    // unit.name = 'TypeScript'

    // new Timer().start(1.0, true, () => {
    //     unit.color = Players[math.random(0, bj_MAX_PLAYERS)].color
    // })

    const allMonsterIds = [
        'hfoo',
        'hpea',
        'hmpr',
        'hsor',
        'hrif',
        'opeo',
        'ogru',
        'ohun',
        'uaco',
        'ugho',
        'ewsp',
        'earc',
        'esen',
        'edry',
        'nmrl',
        'nmrr',
        'nmpg',
        'nmfs',
        'nmrm',
        'nmmu',
    ]

    const allMonsterTypes = allMonsterIds.map(id =>
        s__MonsterTypeArray_new(udg_monsterTypes, id, String2Ascii(id), 1, 40, 380, false)
    )

    const themes = Themes()
    const difficulty = DifficultyLevels()

    let theme = themes.magic
    let difficultyLevel = { ...difficulty.newbie }

    const diagonalPaths = true

    const getPatrolRandom = () => GetRandomInt(-4, 4)

    const { registerCommand } = Commands()

    registerCommand({
        cmd: 'magic',
        exactMatchOnly: false,
        cb: () => {
            // renderInterface()

            const seed = GetEventPlayerChatString().split(' ')[1]

            if (seed && S2I(seed)) {
                generateSlide(true, seed)
            } else {
                generateSlide(true)
            }
        },
    })

    registerCommand({
        cmd: 'diff',
        exactMatchOnly: false,
        cb: () => {
            const lvl = GetEventPlayerChatString().split(' ')[1]

            if (!!difficulty[lvl as keyof typeof difficulty]) {
                difficultyLevel = { ...difficulty[lvl as keyof typeof difficulty] }

                print(`Difficulty changed to: ${lvl}`)
                generateSlide(true)
            } else {
                print(`Unknown difficulty, options: newbie, easy, normal, hard, insane`)
            }
        },
    })

    registerCommand({
        cmd: 'theme',
        exactMatchOnly: false,
        cb: () => {
            const t = GetEventPlayerChatString().split(' ')[1]

            if (!!themes[t as keyof typeof themes]) {
                theme = themes[t as keyof typeof themes]

                print(`Theme changed to: ${t}`)
                generateSlide(true)
            } else {
                print(`Unknown theme, options: magic, fullskill, murloc`)
            }
        },
    })
    ;['gridWidth', 'slideWidth', 'tilesPerPatrol', 'rockChance', 'tilesX', 'tilesY'].forEach(s =>
        registerCommand({
            cmd: s,
            exactMatchOnly: false,
            cb: () => {
                const n = Number(GetEventPlayerChatString().split(' ')[1])

                if (!n) {
                    print('Invalid value')
                    return
                }

                print(`${s} changed to: ${n}`)
                difficultyLevel[s as keyof typeof difficultyLevel] = n
                generateSlide(true)
            },
        })
    )

    registerCommand({
        cmd: 'info',
        exactMatchOnly: false,
        cb: () => {
            print(lastLevelInfo)
        },
    })

    const worldRect = GetWorldBounds()

    let generatedEvents: trigger[] = []
    let activeTimers: Timer[] = []

    let lastLevelInfo: string = ''

    const generateSlide = (regenerate?: boolean, inSeed?: string) => {
        const { monsterIds, walkTerrain, slideTerrain, deathTerrain } = theme
        const { slideWidth, tilesPerPatrol, rockChance } = difficultyLevel

        let { gridWidth } = difficultyLevel

        if (diagonalPaths) {
            gridWidth = Math.max(slideWidth + 1, gridWidth)
        }

        let seed = Math.floor(Math.random() * 10000000)

        if (inSeed) {
            seed = S2I(inSeed)
        }

        SetRandomSeed(seed)

        const mapOffsetX =
            // ??
            GetRectMinX(worldRect) +
            // tileOffset
            mapTileOffset * tileSize +
            // Tiles around the corner of the map are only rendered for half
            tileSize / 2 +
            // Match world grid to wc3
            GetRectWidthBJ(worldRect) / 4

        const mapOffsetY =
            GetRectMinY(worldRect) + mapTileOffset * tileSize + tileSize / 2 + GetRectHeightBJ(worldRect) / 4

        const tilesX = Math.max(
            2,
            Math.min(
                8,
                Math.floor((GetRectWidthBJ(worldRect) / tileSize - mapTileOffset * 2) / (gridWidth * slideWidth)),
                difficultyLevel.tilesX
            )
        )

        const tilesY = Math.max(
            2,
            Math.min(
                8,
                Math.floor((GetRectHeightBJ(worldRect) / tileSize - mapTileOffset * 2) / (gridWidth * slideWidth)),
                difficultyLevel.tilesY
            )
        )

        // const getTile = ({ tile, tileTo }: { tile: { x: number; y: number }; tileTo?: { x: number; y: number } }) => {
        //     const x = mapOffsetX + tile.x * tileSize * gridWidth
        //     const y = mapOffsetY + tile.y * tileSize * gridWidth

        //     const xTo =
        //         mapOffsetX + (tileTo ? tileTo.x : tile.x) * tileSize * gridWidth + tileSize * slideWidth - tileSize
        //     const yTo =
        //         mapOffsetY + (tileTo ? tileTo.y : tile.y) * tileSize * gridWidth + tileSize * slideWidth - tileSize

        //     return { x, y, xTo, yTo }
        // }

        const getCenterTile = ({
            tile,
            tileTo,
        }: {
            tile: { x: number; y: number }
            tileTo: { x: number; y: number }
        }) => {
            return {
                x: Math.min(tile.x, tileTo.x) + Math.abs((tile.x - tileTo.x) / 2),
                y: Math.min(tile.y, tileTo.y) + Math.abs((tile.y - tileTo.y) / 2),
            }
        }

        const createTile = ({ terrain, region }: { terrain: number; region: IRegion }) => {
            region.chunks.forEach(chunk => {
                chunk.blocks.forEach(block => {
                    s__MakeTerrainCreateAction_create(
                        terrain,
                        block.topLeft.x,
                        block.topLeft.y,
                        block.topLeft.x,
                        block.topLeft.y
                    )
                })
            })
        }

        // const createTile = ({
        //     terrain,
        //     tile,
        //     tileTo,
        // }: {
        //     terrain: number
        //     tile: { x: number; y: number }
        //     tileTo?: { x: number; y: number }
        // }) => {
        //     const { x, y, xTo, yTo } = getTile({ tile, tileTo })

        //     // s__MakeTerrainCreateAction_create(terrain, x, y, xTo, yTo)

        //     // if (tileTo) {
        //     //     const { x, y, xTo, yTo } = getTile({ tileTo: tile, tile: tileTo })

        //     //     s__MakeTerrainCreateAction_create(terrain, x, y, xTo, yTo)
        //     // }
        // }

        generatedEvents.forEach(t => DestroyTrigger(t))
        generatedEvents = []
        activeTimers.forEach(t => t.destroy())
        activeTimers = []

        const level = ForceGetLevel(0)

        if (regenerate) {
            allMonsterTypes.map(m => {
                s__Level_removeMonstersOfType(s__Level_monstersNoMove[level], m)
            })

            // Reset monster arrays
            sg__MonsterSimplePatrolArray_set_lastInstance(0, 0)

            killEscapers()
        }

        // Setup terrain

        NB_MAX_TILES_MODIFIED = 1000000

        s__MakeTerrainCreateAction_create(
            deathTerrain,
            GetRectMinX(worldRect),
            GetRectMinY(worldRect),
            GetRectMaxX(worldRect),
            GetRectMaxY(worldRect)
        )

        NB_MAX_TILES_MODIFIED = 1000

        lastLevelInfo = `Level info:
        seed: ${I2S(seed)}
        gridWidth: ${gridWidth}
        slideWidth: ${slideWidth}
        tilesPerPatrol: ${tilesPerPatrol}
        rockChance: ${rockChance}
        tilesX: ${tilesX}
        tilesY: ${tilesY}
        `

        print(lastLevelInfo)

        let path = hamiltonianPathGenerator({ width: tilesX, height: tilesY, diagonalPaths })

        const world = World({
            tileSize,
            gridWidth,
            slideWidth,
            mapOffsetX,
            mapOffsetY,
            gridTilesX: tilesX,
            gridTilesY: tilesY,
        })

        let prev: IPoint

        const regions = path.data
            .map(d => {
                if (!prev) {
                    prev = d
                    return
                }

                const region = world.getRegion({ x1: prev.x, y1: prev.y, x2: d.x, y2: d.y })

                prev = d
                return region
            })
            .filter((v): v is IRegion => !!v)

        world.render({
            startRegion: world.getRegionFromPoint(path.start),
            endRegion: world.getRegionFromPoint(path.end),
            regions,
            renderer: ({ startRegion, endRegion, regions }) => {
                regions.map(region => {
                    createTile({
                        terrain: slideTerrain,
                        region,
                    })
                })

                createTile({ terrain: walkTerrain, region: startRegion })
                createTile({ terrain: walkTerrain, region: endRegion })
            },
        })

        // Region

        s__Level_setNbLivesEarned(level, 100000)

        const startTile = world.getRegionFromPoint(path.start)

        s__Level_newStart(
            level,
            startTile.center.x + slideWidth / 4,
            startTile.center.y + slideWidth / 4,
            startTile.center.x - slideWidth / 4,
            startTile.center.y - slideWidth / 4
        )

        // Force start position
        SetRect(
            gg_rct_departLvl_0,
            startTile.center.x + slideWidth / 4,
            startTile.center.y + slideWidth / 4,
            startTile.center.x - slideWidth / 4,
            startTile.center.y - slideWidth / 4
        )
        Init_Heroes()

        // const endTile = world.getBlock(path.end)

        // generatedEvents.push(
        //     createEvent({
        //         events: [
        //             t =>
        //                 TriggerRegisterEnterRectSimple(
        //                     t,
        //                     Rect(
        //                         endTile.topLeft.x +  (slideWidth/4),
        //                         endTile.topLeft.y +  (slideWidth/4),
        //                         endTile.botRight.x - (slideWidth/4),
        //                         endTile.botRight.y - (slideWidth/4),
        //                     )
        //                 ),
        //         ],
        //         conditions: [() => GetUnitName(GetTriggerUnit()) === 'Slider'],
        //         actions: [
        //             () => {
        //                 print('Congrats kiddo')
        //                 generateSlide(true)
        //             },
        //         ],
        //     })
        // )

        // // Create monsters
        // {
        //     let prev: { x: number; y: number }
        //     let current: { x: number; y: number }

        //     const patrolsToSpawnGrid = slideWidth
        //     const patrolsToSpawnConnector = gridWidth - slideWidth

        //     let i = 1

        //     const shouldSpawn = () => {
        //         if (i === tilesPerPatrol) {
        //             i = 1
        //             return true
        //         }

        //         i += 1
        //         return false
        //     }

        //     path.data.slice(1, path.data.length).forEach(next => {
        //         if (!current) {
        //             current = next
        //             return
        //         }

        //         if (!prev) {
        //             prev = current
        //             current = next
        //             return
        //         }

        //         let direction: 'NN' | 'NE' | 'NW' | 'EN' | 'EE' | 'ES' | 'SE' | 'SS' | 'SW' | 'WN' | 'WS' | 'WW'
        //         let directionFrom: 'N' | 'E' | 'S' | 'W'
        //         let directionTo: 'N' | 'E' | 'S' | 'W'

        //         if (prev.x < current.x) {
        //             directionFrom = 'E'
        //         } else if (prev.x > current.x) {
        //             directionFrom = 'W'
        //         } else if (prev.y < current.y) {
        //             directionFrom = 'N'
        //         } else {
        //             directionFrom = 'S'
        //         }

        //         if (current.x < next.x) {
        //             directionTo = 'E'
        //         } else if (current.x > next.x) {
        //             directionTo = 'W'
        //         } else if (current.y < next.y) {
        //             directionTo = 'N'
        //         } else {
        //             directionTo = 'S'
        //         }

        //         // This is safe since direction type only excluded NS/SN/EW/WE (You can't go back to a tile you came from)
        //         direction = (directionFrom + directionTo) as any

        //         const currentTile = world.getBlock(current)
        //         const prevTile = world.getBlock(prev)

        //         const currentTileRadius = (slideWidth * tileSize) / 2
        //         const prevTileRadius = (slideWidth * tileSize) / 2

        //         const currentTileCenter = {
        //             x: currentTile.center.x + currentTileRadius,
        //             y: currentTile.center.y + currentTileRadius,
        //         }

        //         const prevTileCenter = {
        //             x: prevTile.center.x + prevTileRadius,
        //             y: prevTile.center.y + prevTileRadius,
        //         }

        //         let patrols: { x: number; y: number; x2: number; y2: number }[] = []

        //         // Grid patrols
        //         {
        //             // Rocks
        //             if (GetRandomInt(0, 100) > 100 - rockChance) {
        //                 spawnRock({
        //                     level,
        //                     monsterLabel: monsterIds[GetRandomInt(0, monsterIds.length - 1)],
        //                     x: currentTileCenter.x,
        //                     y: currentTileCenter.y,
        //                 })
        //             }

        //             forRange(patrolsToSpawnGrid, i => {
        //                 const patrolWidth = slideWidth * tileSize
        //                 const iOffset =
        //                     // Offset based on i
        //                     (patrolWidth / patrolsToSpawnGrid) * (i + 1) -
        //                     // Initial offset
        //                     patrolWidth / patrolsToSpawnGrid / 2

        //                 if (direction === 'EE' || direction === 'WW') {
        //                     if (!shouldSpawn()) {
        //                         return
        //                     }

        //                     patrols.push({
        //                         x: currentTile.topLeft.x + iOffset,
        //                         y: currentTileCenter.y - currentTileRadius - patrolOffset,
        //                         x2: currentTile.topLeft.x + iOffset,
        //                         y2: currentTileCenter.y + currentTileRadius + patrolOffset,
        //                     })
        //                 } else if (direction === 'NN' || direction === 'SS') {
        //                     if (!shouldSpawn()) {
        //                         return
        //                     }

        //                     patrols.push({
        //                         x: currentTileCenter.x - currentTileRadius - patrolOffset,
        //                         y: currentTile.topLeft.y + iOffset,
        //                         x2: currentTileCenter.x + currentTileRadius + patrolOffset,
        //                         y2: currentTile.topLeft.y + iOffset,
        //                     })
        //                     // TODO; Was working on adding multiple patrols on diagonal..
        //                 } else if (direction === 'NE' || direction === 'WS') {
        //                     // 90 / patrolsToSpawnGrid * i
        //                     if (i > 0) {
        //                         return
        //                     }

        //                     if (!shouldSpawn()) {
        //                         return
        //                     }

        //                     patrols.push({
        //                         x: currentTileCenter.x - currentTileRadius - patrolOffset,
        //                         y: currentTileCenter.y + currentTileRadius + patrolOffset,
        //                         x2: currentTileCenter.x + currentTileRadius + patrolOffset,
        //                         y2: currentTileCenter.y - currentTileRadius - patrolOffset,
        //                     })
        //                 } else if (direction === 'EN' || direction === 'SW') {
        //                     if (i > 0) {
        //                         return
        //                     }

        //                     if (!shouldSpawn()) {
        //                         return
        //                     }

        //                     patrols.push({
        //                         x: currentTileCenter.x - currentTileRadius - patrolOffset,
        //                         y: currentTileCenter.y + currentTileRadius + patrolOffset,
        //                         x2: currentTileCenter.x + currentTileRadius + patrolOffset,
        //                         y2: currentTileCenter.y - currentTileRadius - patrolOffset,
        //                     })
        //                 } else {
        //                     if (i > 0) {
        //                         return
        //                     }

        //                     if (!shouldSpawn()) {
        //                         return
        //                     }

        //                     patrols.push({
        //                         x: currentTileCenter.x + currentTileRadius + patrolOffset,
        //                         y: currentTileCenter.y + currentTileRadius + patrolOffset,
        //                         x2: currentTileCenter.x - currentTileRadius - patrolOffset,
        //                         y2: currentTileCenter.y - currentTileRadius - patrolOffset,
        //                     })
        //                 }
        //             })
        //         }

        //         // Connector patrols
        //         {
        //             const diffTile = getCenterTile({ tile: prevTileCenter, tileTo: currentTileCenter })

        //             if (GetRandomInt(0, 100) > 100 - rockChance) {
        //                 spawnRock({
        //                     level,
        //                     monsterLabel: monsterIds[GetRandomInt(0, monsterIds.length - 1)],
        //                     x: diffTile.x,
        //                     y: diffTile.y,
        //                 })
        //             }

        //             forRange(patrolsToSpawnConnector, i => {
        //                 if (!shouldSpawn()) {
        //                     return
        //                 }

        //                 const iOffset = tileSize * i - (patrolsToSpawnConnector / 2) * tileSize + tileSize / 2

        //                 if (directionFrom === 'N' || directionFrom === 'S') {
        //                     patrols.push({
        //                         x: diffTile.x - currentTileRadius - patrolOffset,
        //                         y: diffTile.y + iOffset,
        //                         x2: diffTile.x + currentTileRadius + patrolOffset,
        //                         y2: diffTile.y + iOffset,
        //                     })
        //                 } else {
        //                     patrols.push({
        //                         x: diffTile.x + iOffset,
        //                         y: diffTile.y - currentTileRadius - patrolOffset,
        //                         x2: diffTile.x + iOffset,
        //                         y2: diffTile.y + currentTileRadius + patrolOffset,
        //                     })
        //                 }
        //             })
        //         }

        //         patrols.forEach(patrol => {
        //             activeTimers.push(
        //                 new Timer().start(GetRandomReal(0, Math.min(5, slideWidth + 1)), false, () => {
        //                     spawnMonster({
        //                         level,
        //                         monsterLabel: monsterIds[GetRandomInt(0, monsterIds.length - 1)],
        //                         x1: patrol.x + getPatrolRandom(),
        //                         y1: patrol.y + getPatrolRandom(),
        //                         x2: patrol.x2 + getPatrolRandom(),
        //                         y2: patrol.y2 + getPatrolRandom(),
        //                     })
        //                 })
        //             )
        //         })

        //         prev = current
        //         current = next
        //     })
        // }

        print('OK')
    }

    // Need timer while debugging so that prints appear on F12; remove in production for other timed issues!
    new Timer().start(0.5, false, () => {
        generateSlide()
    })

    FogModifierStart(udg_viewAll)

    enableAutoRevive()

    TIME_BEFORE_HERO_SPAWN = 1
    TIME_BETWEEN_EACH_HERO_SPAWN = 0.1
}

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain)
