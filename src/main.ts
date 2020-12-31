import { hamiltonianPathGenerator } from 'hamiltonianPathGenerator'
import { enableAutoRevive, killEscapers, spawnMonster } from 'mec'
import { createEvent, forRange } from 'utils'
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

    const w1 = sc__TerrainTypeArray_newWalk(udg_terrainTypes, 'w1', TerrainTypeString2TerrainTypeId("'Ngrs'"), 522)

    const w2 = sc__TerrainTypeArray_newWalk(udg_terrainTypes, 'w2', TerrainTypeString2TerrainTypeId("'Lgrd'"), 522)

    const w3 = sc__TerrainTypeArray_newWalk(udg_terrainTypes, 'w3', TerrainTypeString2TerrainTypeId("'Yblm'"), 522)

    const s1 = sc__TerrainTypeArray_newSlide(
        udg_terrainTypes,
        's1',
        TerrainTypeString2TerrainTypeId("'Nice'"),
        550,
        true
    )

    const s2 = sc__TerrainTypeArray_newSlide(
        udg_terrainTypes,
        's2',
        TerrainTypeString2TerrainTypeId("'Nsnw'"),
        550,
        true
    )

    const d1 = sc__TerrainTypeArray_newDeath(
        udg_terrainTypes,
        'd1',
        TerrainTypeString2TerrainTypeId("'cNc1'"),
        '',
        0.2,
        20
    )

    const d2 = sc__TerrainTypeArray_newDeath(
        udg_terrainTypes,
        'd2',
        TerrainTypeString2TerrainTypeId("'Ywmb'"),
        '',
        0.2,
        20
    )

    const d3 = sc__TerrainTypeArray_newDeath(
        udg_terrainTypes,
        'd3',
        TerrainTypeString2TerrainTypeId("'Avin'"),
        '',
        0.2,
        20
    )

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
        s__MonsterTypeArray_new(udg_monsterTypes, id, String2Ascii(id), 1, 50, 400, false)
    )

    const themes = {
        magic: {
            walkTerrain: w1,
            slideTerrain: s1,
            deathTerrain: d1,
            monsterIds: [
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
            ],
        },
        fullskill: {
            walkTerrain: w2,
            slideTerrain: s1,
            deathTerrain: d2,
            monsterIds: ['hfoo'],
        },
        murloc: {
            walkTerrain: w3,
            slideTerrain: s2,
            deathTerrain: d3,
            monsterIds: ['nmrl', 'nmrr', 'nmfs', 'nmrm', 'nmmu'],
        },
    }

    // -setto d3 w3 s1 w1 d1 s2 w2 d2
    // -setto s1 s2 w1 w2 w3 d1 d2 d3

    let theme = themes['magic']

    // TODO; Replace this with diff starting angle on patrol
    const getPatrolRandom = () => GetRandomInt(-4, 4)

    createEvent({
        events: [
            t => {
                forRange(bj_MAX_PLAYER_SLOTS, i => TriggerRegisterPlayerChatEvent(t, Player(i), '-magic', true))
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
                forRange(bj_MAX_PLAYER_SLOTS, i => {
                    TriggerRegisterPlayerChatEvent(t, Player(i), '-difficulty', false)
                    TriggerRegisterPlayerChatEvent(t, Player(i), '-diff', false)
                })
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

    createEvent({
        events: [
            t => {
                forRange(bj_MAX_PLAYER_SLOTS, i => {
                    TriggerRegisterPlayerChatEvent(t, Player(i), '-theme', false)
                })
            },
        ],
        actions: [
            () => {
                const t = GetEventPlayerChatString().split(' ')[1]

                if (!!themes[t as keyof typeof themes]) {
                    theme = themes[t as keyof typeof themes]

                    print(`Theme changed to: ${t}`)
                    generateSlide(true)
                } else {
                    print(`Unknown theme, options: magic, fullskill, murloc`)
                }
            },
        ],
    })

    // TODO; gridPatrols: 1-5

    const difficultyLevels = {
        newbie: {
            gridWidth: 5,
            slideWidth: 4,
            gridPatrols: 1,
        },
        easy: {
            gridWidth: 5,
            slideWidth: 3,
            gridPatrols: 1,
        },
        normal: {
            gridWidth: 5,
            slideWidth: 2,
            gridPatrols: 1,
        },
        hard: {
            gridWidth: 4,
            slideWidth: 2,
            gridPatrols: 1,
        },
        insane: {
            gridWidth: 3,
            slideWidth: 2,
            gridPatrols: 1,
        },
    }

    const worldRect = GetWorldBounds()

    let difficultyLevel = difficultyLevels['newbie']

    let generatedEvents: trigger[] = []
    let activeTimers: Timer[] = []

    const generateSlide = (regenerate?: boolean) => {
        const { monsterIds, walkTerrain, slideTerrain, deathTerrain } = theme
        const { gridWidth, slideWidth } = difficultyLevel

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

        const tilesX = Math.floor((GetRectWidthBJ(worldRect) / tileSize - mapTileOffset * 2) / gridWidth)
        const tilesY = Math.floor((GetRectHeightBJ(worldRect) / tileSize - mapTileOffset * 2) / gridWidth)

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

                const patrolOffset = 32

                // Patrols to spawn is a bit buggy (Mostly because connectors and grid aren't connected so it looks really off)
                const patrolsToSpawnGrid = 1
                const patrolsToSpawnConnector = 1

                let patrols: { x: number; y: number; x2: number; y2: number }[] = []

                // Grid patrols
                {
                    // Rocks
                    // {
                    //     s__MonsterNoMoveArray_new(
                    //         s__Level_monstersNoMove[level],
                    //         monsterTypes[GetRandomInt(0, monsterTypes.length - 1)],
                    //         currentTileCenter.x,
                    //         currentTileCenter.y,
                    //         -1,
                    //         true
                    //     )
                    // }

                    forRange(patrolsToSpawnGrid, i => {
                        const patrolWidth = slideWidth * tileSize
                        const iOffset =
                            // Offset based on i
                            (patrolWidth / patrolsToSpawnGrid) * (i + 1) -
                            // Initial offset
                            patrolWidth / patrolsToSpawnGrid / 2

                        if (direction === 'EE' || direction === 'WW') {
                            patrols.push({
                                x: currentTile.x + iOffset,
                                y: currentTileCenter.y - currentTileRadius - patrolOffset,
                                x2: currentTile.x + iOffset,
                                y2: currentTileCenter.y + currentTileRadius + patrolOffset,
                            })
                        } else if (direction === 'NN' || direction === 'SS') {
                            patrols.push({
                                x: currentTileCenter.x - currentTileRadius - patrolOffset,
                                y: currentTile.y + iOffset,
                                x2: currentTileCenter.x + currentTileRadius + patrolOffset,
                                y2: currentTile.y + iOffset,
                            })
                        } else if (
                            direction === 'NE' ||
                            direction === 'EN' ||
                            direction === 'SW' ||
                            direction === 'WS'
                        ) {
                            patrols.push({
                                x: currentTileCenter.x - currentTileRadius - patrolOffset,
                                y: currentTileCenter.y + currentTileRadius + patrolOffset,
                                x2: currentTileCenter.x + currentTileRadius + patrolOffset,
                                y2: currentTileCenter.y - currentTileRadius - patrolOffset,
                            })
                        } else {
                            patrols.push({
                                x: currentTileCenter.x + currentTileRadius + patrolOffset,
                                y: currentTileCenter.y + currentTileRadius + patrolOffset,
                                x2: currentTileCenter.x - currentTileRadius - patrolOffset,
                                y2: currentTileCenter.y - currentTileRadius - patrolOffset,
                            })
                        }
                    })
                }

                // Connector patrols
                {
                    const diffTile = getCenterTile({ tile: prevTileCenter, tileTo: currentTileCenter })

                    // Rocks
                    // {
                    //     s__MonsterNoMoveArray_new(
                    //         s__Level_monstersNoMove[level],
                    //         monsterTypes[GetRandomInt(0, monsterTypes.length - 1)],
                    //         diffTile.x,
                    //         diffTile.y,
                    //         -1,
                    //         true
                    //     )
                    // }

                    forRange(patrolsToSpawnConnector, i => {
                        if (directionFrom === 'N' || directionFrom === 'S') {
                            const patrolWidth = Math.abs(prevTileCenter.y - currentTileCenter.y) / 2
                            const iOffset =
                                // Offset based on i
                                (patrolWidth / patrolsToSpawnConnector) * (i + 1) -
                                // Move patrols to the left of grid
                                patrolWidth / 2 -
                                // Initial offset
                                patrolWidth / patrolsToSpawnConnector / 2

                            patrols.push({
                                x: diffTile.x - currentTileRadius - patrolOffset,
                                y: diffTile.y + iOffset,
                                x2: diffTile.x + currentTileRadius + patrolOffset,
                                y2: diffTile.y + iOffset,
                            })
                        } else {
                            const patrolWidth = Math.abs(prevTileCenter.x - currentTileCenter.x) / 2
                            const iOffset =
                                // Offset based on i
                                (patrolWidth / patrolsToSpawnConnector) * (i + 1) -
                                // Move patrols to the left of grid
                                patrolWidth / 2 -
                                // Initial offset
                                patrolWidth / patrolsToSpawnConnector / 2

                            patrols.push({
                                x: diffTile.x + iOffset,
                                y: diffTile.y - currentTileRadius - patrolOffset,
                                x2: diffTile.x + iOffset,
                                y2: diffTile.y + currentTileRadius + patrolOffset,
                            })
                        }
                    })
                }

                patrols.forEach(patrol => {
                    activeTimers.push(
                        new Timer().start(GetRandomReal(0, 2), false, () => {
                            spawnMonster({
                                level,
                                monsterLabel: monsterIds[GetRandomInt(0, monsterIds.length - 1)],
                                x1: patrol.x + getPatrolRandom(),
                                y1: patrol.y + getPatrolRandom(),
                                x2: patrol.x2 + getPatrolRandom(),
                                y2: patrol.y2 + getPatrolRandom(),
                            })
                        })
                    )
                })

                prev = current
                current = next
            })
        }

        print('OK')
    }

    // Need timer while debugging so that prints appear on f12
    // new Timer().start(0.5, false, () => {
    generateSlide()
    // })

    FogModifierStart(udg_viewAll)

    enableAutoRevive()

    TIME_BEFORE_HERO_SPAWN = 1
    TIME_BETWEEN_EACH_HERO_SPAWN = 0.1
}

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain)
