import { hamiltonianPathGenerator } from 'hamiltonianPathGenerator'
import { Timer } from 'w3ts'
import { addScriptHook, W3TS_HOOK } from 'w3ts/hooks'

const BUILD_DATE = compiletime(() => new Date().toUTCString())
const TS_VERSION = compiletime(() => require('typescript').version)
const TSTL_VERSION = compiletime(() => require('typescript-to-lua').version)

function tsMain() {
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
        525
    )

    const slideTerrain = sc__TerrainTypeArray_newSlide(
        udg_terrainTypes,
        's',
        TerrainTypeString2TerrainTypeId("'Nice'"),
        525,
        true
    )

    const deathTerrain = sc__TerrainTypeArray_newDeath(
        udg_terrainTypes,
        'd',
        TerrainTypeString2TerrainTypeId("'Nsnw'"),
        '',
        0.2,
        40
    )

    new Timer().start(0.5, false, () => {
        // Setup terrain

        const worldRect = GetWorldBounds()

        const tileSize = 128
        const tileOffset = 4
        const slideWidth = 3

        const tilesX = (GetRectWidthBJ(worldRect) / tileSize - tileOffset * 2) / slideWidth
        const tilesY = (GetRectHeightBJ(worldRect) / tileSize - tileOffset * 2) / slideWidth

        const mapOffsetX = GetRectMinX(worldRect) + tileOffset * tileSize
        const mapOffsetY = GetRectMinY(worldRect) + tileOffset * tileSize

        NB_MAX_TILES_MODIFIED = 1000000

        s__MakeTerrainCreateAction_create(
            deathTerrain,
            GetRectMinX(worldRect),
            GetRectMinY(worldRect),
            GetRectMaxX(worldRect),
            GetRectMaxY(worldRect)
        )

        NB_MAX_TILES_MODIFIED = 1000

        let path = hamiltonianPathGenerator({ width: tilesX, height: tilesY })

        const getTile = ({ tile, tileTo }: { tile: { x: number; y: number }; tileTo?: { x: number; y: number } }) => {
            const x = mapOffsetX + tile.x * tileSize * slideWidth
            const y = mapOffsetY + tile.y * tileSize * slideWidth

            const xTo = mapOffsetX + (tileTo ? tileTo.x : tile.x) * tileSize * slideWidth + tileSize
            const yTo = mapOffsetY + (tileTo ? tileTo.y : tile.y) * tileSize * slideWidth + tileSize

            return { x, y, xTo, yTo }
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
        }

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

        const level = ForceGetLevel(0)

        // Region

        const startTile = getTile({ tile: path.start })
        s__Level_newStart(level, startTile.x, startTile.y, startTile.xTo, startTile.yTo)

        // Force start position
        SetRect(gg_rct_departLvl_0, startTile.x, startTile.y, startTile.xTo, startTile.yTo)
        Init_Heroes()

        const endTile = getTile({ tile: path.end })
        s__Level_newEnd(level, endTile.x, endTile.y, endTile.xTo, endTile.yTo)

        // Spawns a rock
        // s__MonsterNoMoveArray_new(
        //     s__Level_monstersNoMove[level],
        //     s__MonsterTypeArray_get(udg_monsterTypes, 'rock'),
        //     1425,
        //     6012,
        //     -1,
        //     true
        // )

        const monsterIds = ['hfoo', 'hpea', 'hmpr', 'hsor', 'hrif']

        const monsterTypes = monsterIds.map(id =>
            s__MonsterTypeArray_new(udg_monsterTypes, id, String2Ascii(id), 1, 50, 400, false)
        )

        // monsterTypes.map(id => s__MonsterType_setImmolation(id, 60))

        const getPatrolRandom = () => GetRandomInt(-4, 4)

        // Create monsters
        {
            let prev: { x: number; y: number }
            let current: { x: number; y: number }

            path.data.slice(1, path.data.length - 1).forEach(next => {
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

                const tile = getTile({ tile: current })

                const tileCenter = { x: tile.x + tileSize / 2, y: tile.y + tileSize / 2 }
                const patrolOffset = 32

                let patrol: { x: number; y: number; x2: number; y2: number }

                if (direction === 'EE' || direction === 'WW') {
                    patrol = {
                        x: tileCenter.x,
                        y: tileCenter.y - tileSize - patrolOffset,
                        x2: tileCenter.x,
                        y2: tileCenter.y + tileSize + patrolOffset,
                    }
                } else if (direction === 'NN' || direction === 'SS') {
                    patrol = {
                        x: tileCenter.x - tileSize - patrolOffset,
                        y: tileCenter.y,
                        x2: tileCenter.x + tileSize + patrolOffset,
                        y2: tileCenter.y,
                    }
                } else if (direction === 'NE' || direction === 'EN' || direction === 'SW' || direction === 'WS') {
                    patrol = {
                        x: tileCenter.x - tileSize - patrolOffset,
                        y: tileCenter.y + tileSize + patrolOffset,
                        x2: tileCenter.x + tileSize + patrolOffset,
                        y2: tileCenter.y - tileSize - patrolOffset,
                    }
                } else {
                    patrol = {
                        x: tileCenter.x + tileSize + patrolOffset,
                        y: tileCenter.y + tileSize + patrolOffset,
                        x2: tileCenter.x - tileSize - patrolOffset,
                        y2: tileCenter.y - tileSize - patrolOffset,
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

                prev = current
                current = next
            })
        }

        FogModifierStart(udg_viewAll)

        // Autorevive
        udg_autoreviveDelay = 0.3

        s___EscaperArray_escapers.map((_, i) => {
            s__Escaper_hasAutoreviveB[s___EscaperArray_escapers[s__EscaperArray_escapers[udg_escapers] + i]] = true
        })

        TIME_BEFORE_HERO_SPAWN = 1
        TIME_BETWEEN_EACH_HERO_SPAWN = 0.1

        print('OK')
    })
}

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain)
