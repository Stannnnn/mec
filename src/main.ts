import { hamiltonianPathGenerator } from 'hamiltonianPathGenerator'
import { createEvent } from 'utils'
import { Timer } from 'w3ts'
import { addScriptHook, W3TS_HOOK } from 'w3ts/hooks'

const BUILD_DATE = compiletime(() => new Date().toUTCString())
const TS_VERSION = compiletime(() => require('typescript').version)
const TSTL_VERSION = compiletime(() => require('typescript-to-lua').version)

const tsMain = () => {
    print(`Build: ${BUILD_DATE}`)
    print(`Typescript: v${TS_VERSION}`)
    print(`Transpiler: v${TSTL_VERSION}`)
    print(' ')
    print('Welcome to TypeScript!')

    // const unit = new Unit(Players[0], FourCC('hfoo'), 0, 0, 270)
    // unit.name = 'TypeScript'

    // new Timer().start(1.0, true, () => {
    //     unit.color = Players[math.random(0, bj_MAX_PLAYERS)].color
    // })

    const walkTerrain = sc__TerrainTypeArray_newWalk(
        udg_terrainTypes,
        'w',
        TerrainTypeString2TerrainTypeId("'Ngrs'"),
        522
    )

    const slideTerrain = sc__TerrainTypeArray_newSlide(
        udg_terrainTypes,
        's',
        TerrainTypeString2TerrainTypeId("'Nice'"),
        550,
        true
    )

    const deathTerrain = sc__TerrainTypeArray_newDeath(
        udg_terrainTypes,
        'd',
        TerrainTypeString2TerrainTypeId("'Nsnw'"),
        '',
        0.2,
        20
    )

    const monsterIds = [
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
    ]

    const monsterTypes = monsterIds.map(id =>
        s__MonsterTypeArray_new(udg_monsterTypes, id, String2Ascii(id), 1, 50, 400, false)
    )

    const getPatrolRandom = () => GetRandomInt(-4, 4)

    createEvent({
        events: [
            t => {
                for (let i = 0; i <= bj_MAX_PLAYER_SLOTS; i++) {
                    TriggerRegisterPlayerChatEvent(t, Player(i), '-magic', true)
                }
            },
        ],
        actions: [
            () => {
                generateSlide(true)
            },
        ],
    })

    createEvent({
        events: [
            t => {
                for (let i = 0; i <= bj_MAX_PLAYER_SLOTS; i++) {
                    TriggerRegisterPlayerChatEvent(t, Player(i), '-difficulty', false)
                    TriggerRegisterPlayerChatEvent(t, Player(i), '-diff', false)
                }
            },
        ],
        actions: [
            () => {
                const lvl = GetEventPlayerChatString().split(' ')[1]

                if (!!difficultyLevels[lvl as keyof typeof difficultyLevels]) {
                    difficultyLevel = difficultyLevels[lvl as keyof typeof difficultyLevels]

                    print(`Difficulty changed to: ${lvl}`)
                    generateSlide(true)
                } else {
                    print(`Unknown difficulty, options: newbie, easy, normal, hard, insane`)
                }
            },
        ],
    })

    const difficultyLevels = {
        newbie: {
            gridWidth: 5,
            slideWidth: 4,
        },
        easy: {
            gridWidth: 5,
            slideWidth: 3,
        },
        normal: {
            gridWidth: 5,
            slideWidth: 2,
        },
        hard: {
            gridWidth: 4,
            slideWidth: 2,
        },
        insane: {
            gridWidth: 3,
            slideWidth: 2,
        },
    }

    const worldRect = GetWorldBounds()

    let difficultyLevel = difficultyLevels['newbie']

    const generatedEvents: trigger[] = []

    const generateSlide = (regenerate?: boolean) => {
        const tileSize = 128
        const mapTileOffset = 4

        // Tiles around the corner of the map are only rendered for half
        const mapOffsetX = GetRectMinX(worldRect) + mapTileOffset * tileSize + tileSize / 2
        const mapOffsetY = GetRectMinY(worldRect) + mapTileOffset * tileSize + tileSize / 2

        const getTile = ({ tile, tileTo }: { tile: { x: number; y: number }; tileTo?: { x: number; y: number } }) => {
            const x = mapOffsetX + tile.x * tileSize * gridWidth
            const y = mapOffsetY + tile.y * tileSize * gridWidth

            const xTo =
                mapOffsetX + (tileTo ? tileTo.x : tile.x) * tileSize * gridWidth + tileSize * slideWidth - tileSize
            const yTo =
                mapOffsetY + (tileTo ? tileTo.y : tile.y) * tileSize * gridWidth + tileSize * slideWidth - tileSize

            return { x, y, xTo, yTo }
        }

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

        const createTile = ({
            terrain,
            tile,
            tileTo,
        }: {
            terrain: number
            tile: { x: number; y: number }
            tileTo?: { x: number; y: number }
        }) => {
            const { x, y, xTo, yTo } = getTile({ tile, tileTo })

            s__MakeTerrainCreateAction_create(terrain, x, y, xTo, yTo)

            if (tileTo) {
                const { x, y, xTo, yTo } = getTile({ tileTo: tile, tile: tileTo })

                s__MakeTerrainCreateAction_create(terrain, x, y, xTo, yTo)
            }
        }

        const { gridWidth, slideWidth } = difficultyLevel

        const tilesX = Math.floor((GetRectWidthBJ(worldRect) / tileSize - mapTileOffset * 2) / gridWidth)
        const tilesY = Math.floor((GetRectHeightBJ(worldRect) / tileSize - mapTileOffset * 2) / gridWidth)

        generatedEvents.forEach(t => DestroyTrigger(t))

        const level = ForceGetLevel(0)

        if (regenerate) {
            monsterTypes.map(m => {
                s__Level_removeMonstersOfType(s__Level_monstersNoMove[level], m)
            })

            // Code from s__Escaper_kill which doesn't work because it thinks the hero is already dead for some reason.
            s___EscaperArray_escapers.map((_, i) => {
                s__Escaper_resetItem(i)
                KillUnit(s__Escaper_hero[i])
                s__Escaper_lastTerrainType[i] = 0
                ShowUnit(s__Escaper_invisUnit[i], false)
                s__Escaper_enableCheckTerrain(i, false)
                StopAfk(GetPlayerId(s__Escaper_p[i]))
                s__Escaper_isHeroSelectedB[i] = false
            })

            //sc__LevelArray_restartTheGame(udg_levels)
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

        print(`Debug:
    gridWidth: ${gridWidth}
    slideWidth: ${slideWidth}
    tilesX: ${tilesX}
    tilesY: ${tilesY}
    `)

        let path = hamiltonianPathGenerator({ width: tilesX, height: tilesY })

        // Create terrain
        {
            let prev: { x: number; y: number }

            path.data.forEach(d => {
                if (!prev) {
                    prev = d
                    return
                }

                createTile({ terrain: slideTerrain, tile: prev, tileTo: d })

                prev = d
            })
        }

        createTile({ terrain: walkTerrain, tile: path.start })
        createTile({ terrain: walkTerrain, tile: path.end })

        // Setup level

        // Region

        s__Level_setNbLivesEarned(level, 100000)

        const startTile = getTile({ tile: path.start })
        s__Level_newStart(level, startTile.x, startTile.y, startTile.xTo, startTile.yTo)

        // Force start position
        SetRect(gg_rct_departLvl_0, startTile.x, startTile.y, startTile.xTo, startTile.yTo)
        Init_Heroes()

        const endTile = getTile({ tile: path.end })
        // s__Level_newEnd(level, endTile.x, endTile.y, endTile.xTo, endTile.yTo)

        generatedEvents.push(
            createEvent({
                events: [
                    t =>
                        TriggerRegisterEnterRectSimple(
                            t,
                            Rect(endTile.x + 32, endTile.y + 32, endTile.xTo - 32, endTile.yTo - 32)
                        ),
                ],
                conditions: [() => GetUnitName(GetTriggerUnit()) === 'Slider'],
                actions: [
                    () => {
                        print('Congrats kiddo')
                        generateSlide(true)
                    },
                ],
            })
        )

        // Spawns a rock
        // s__MonsterNoMoveArray_new(
        //     s__Level_monstersNoMove[level],
        //     s__MonsterTypeArray_get(udg_monsterTypes, 'rock'),
        //     1425,
        //     6012,
        //     -1,
        //     true
        // )

        // Create monsters
        {
            let prev: { x: number; y: number }
            let current: { x: number; y: number }

            path.data.slice(1, path.data.length).forEach(next => {
                if (!current) {
                    current = next
                    return
                }

                if (!prev) {
                    prev = current
                    current = next
                    return
                }

                let direction: 'NN' | 'NE' | 'NW' | 'EN' | 'EE' | 'ES' | 'SE' | 'SS' | 'SW' | 'WN' | 'WS' | 'WW'
                let directionFrom: 'N' | 'E' | 'S' | 'W'
                let directionTo: 'N' | 'E' | 'S' | 'W'

                if (prev.x < current.x) {
                    directionFrom = 'E'
                } else if (prev.x > current.x) {
                    directionFrom = 'W'
                } else if (prev.y < current.y) {
                    directionFrom = 'N'
                } else {
                    directionFrom = 'S'
                }

                if (current.x < next.x) {
                    directionTo = 'E'
                } else if (current.x > next.x) {
                    directionTo = 'W'
                } else if (current.y < next.y) {
                    directionTo = 'N'
                } else {
                    directionTo = 'S'
                }

                // This is safe since direction type only excluded NS/SN/EW/WE (You can't go back to a tile you came from)
                direction = (directionFrom + directionTo) as any

                const currentTile = getTile({ tile: current })
                const prevTile = getTile({ tile: prev })

                const currentTileRadius = (slideWidth * tileSize) / 2
                const prevTileRadius = (slideWidth * tileSize) / 2

                const currentTileCenter = {
                    x: currentTile.x + currentTileRadius,
                    y: currentTile.y + currentTileRadius,
                }

                const prevTileCenter = {
                    x: prevTile.x + prevTileRadius,
                    y: prevTile.y + prevTileRadius,
                }

                // Rocks in center random?
                // s__MonsterNoMoveArray_new(
                //     s__Level_monstersNoMove[level],
                //     monsterTypes[GetRandomInt(0, monsterTypes.length - 1)],
                //     tileCenter.x,
                //     tileCenter.y,
                //     -1,
                //     true
                // )

                const patrolOffset = 32

                let patrol: { x: number; y: number; x2: number; y2: number }

                if (direction === 'EE' || direction === 'WW') {
                    patrol = {
                        x: currentTileCenter.x,
                        y: currentTileCenter.y - currentTileRadius - patrolOffset,
                        x2: currentTileCenter.x,
                        y2: currentTileCenter.y + currentTileRadius + patrolOffset,
                    }
                } else if (direction === 'NN' || direction === 'SS') {
                    patrol = {
                        x: currentTileCenter.x - currentTileRadius - patrolOffset,
                        y: currentTileCenter.y,
                        x2: currentTileCenter.x + currentTileRadius + patrolOffset,
                        y2: currentTileCenter.y,
                    }
                } else if (direction === 'NE' || direction === 'EN' || direction === 'SW' || direction === 'WS') {
                    patrol = {
                        x: currentTileCenter.x - currentTileRadius - patrolOffset,
                        y: currentTileCenter.y + currentTileRadius + patrolOffset,
                        x2: currentTileCenter.x + currentTileRadius + patrolOffset,
                        y2: currentTileCenter.y - currentTileRadius - patrolOffset,
                    }
                } else {
                    patrol = {
                        x: currentTileCenter.x + currentTileRadius + patrolOffset,
                        y: currentTileCenter.y + currentTileRadius + patrolOffset,
                        x2: currentTileCenter.x - currentTileRadius - patrolOffset,
                        y2: currentTileCenter.y - currentTileRadius - patrolOffset,
                    }
                }

                s__MonsterSimplePatrolArray_new(
                    s__Level_monstersSimplePatrol[level],
                    monsterTypes[GetRandomInt(0, monsterTypes.length - 1)],
                    patrol.x + getPatrolRandom(),
                    patrol.y + getPatrolRandom(),
                    patrol.x2 + getPatrolRandom(),
                    patrol.y2 + getPatrolRandom(),
                    true
                )

                let patrolDiff: { x: number; y: number; x2: number; y2: number }

                const diffTile = getCenterTile({ tile: prevTileCenter, tileTo: currentTileCenter })

                if (directionFrom === 'N' || directionFrom === 'S') {
                    patrolDiff = {
                        x: diffTile.x - currentTileRadius - patrolOffset,
                        y: diffTile.y,
                        x2: diffTile.x + currentTileRadius + patrolOffset,
                        y2: diffTile.y,
                    }
                } else {
                    patrolDiff = {
                        x: diffTile.x,
                        y: diffTile.y - currentTileRadius - patrolOffset,
                        x2: diffTile.x,
                        y2: diffTile.y + currentTileRadius + patrolOffset,
                    }
                }

                s__MonsterSimplePatrolArray_new(
                    s__Level_monstersSimplePatrol[level],
                    monsterTypes[GetRandomInt(0, monsterTypes.length - 1)],
                    patrolDiff.x + getPatrolRandom(),
                    patrolDiff.y + getPatrolRandom(),
                    patrolDiff.x2 + getPatrolRandom(),
                    patrolDiff.y2 + getPatrolRandom(),
                    true
                )

                prev = current
                current = next
            })
        }

        print('OK')
    }

    // new Timer().start(0.5, false, () => {
    generateSlide()
    // })

    FogModifierStart(udg_viewAll)

    // Autorevive
    udg_autoreviveDelay = 0.3

    s___EscaperArray_escapers.map((_, i) => {
        s__Escaper_hasAutoreviveB[s___EscaperArray_escapers[s__EscaperArray_escapers[udg_escapers] + i]] = true
    })

    TIME_BEFORE_HERO_SPAWN = 1
    TIME_BETWEEN_EACH_HERO_SPAWN = 0.1
}

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain)
