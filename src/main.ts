import { hamiltonianPathGenerator } from 'hamiltonianPathGenerator'
import { Timer, Unit } from 'w3ts'
import { Players } from 'w3ts/globals'
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

    const unit = new Unit(Players[0], FourCC('hfoo'), 0, 0, 270)
    unit.name = 'TypeScript'

    new Timer().start(1.0, true, () => {
        unit.color = Players[math.random(0, bj_MAX_PLAYERS)].color
    })

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
        80
    )

    new Timer().start(1, false, () => {
        const level = 1

        // // Spawns a rock
        // s__MonsterNoMove_setId(
        //     s__MonsterNoMoveArray_new(
        //         s__Level_monstersNoMove[level],
        //         s__MonsterTypeArray_get(udg_monsterTypes, 'rock'),
        //         1425,
        //         6012,
        //         -1,
        //         false
        //     ),
        //     44
        // )

        // // Spawns a patrol
        // s__MonsterSimplePatrol_setId(
        //     s__MonsterSimplePatrolArray_new(
        //         s__Level_monstersSimplePatrol[level],
        //         s__MonsterTypeArray_get(udg_monsterTypes, 'troll'),
        //         -163,
        //         6514,
        //         -163,
        //         5773,
        //         false
        //     ),
        //     62
        // )

        const worldRect = GetWorldBounds()

        const tileSize = 128
        const tileOffset = 4
        const slideWidth = 3

        const tilesX = (GetRectWidthBJ(worldRect) / tileSize - tileOffset * 2) / slideWidth
        const tilesY = (GetRectHeightBJ(worldRect) / tileSize - tileOffset * 2) / slideWidth

        const mapOffsetX = GetRectMinX(worldRect) + tileOffset * tileSize
        const mapOffsetY = GetRectMinY(worldRect) + tileOffset * tileSize

        print(tilesX)
        print(tilesY)

        // let path: {
        //     start: [number, number]
        //     end: [number, number]
        //     data: [number, number][]
        // } = hamPath.generate({
        //     width: 4,
        //     height: 4,
        // })

        NB_MAX_TILES_MODIFIED = 1000000

        s__MakeTerrainCreateAction_create(
            deathTerrain,
            GetRectMinX(worldRect),
            GetRectMinY(worldRect),
            GetRectMaxX(worldRect),
            GetRectMaxY(worldRect)
        )

        NB_MAX_TILES_MODIFIED = 1000

        let path = hamiltonianPathGenerator({ width: tilesX, height: tilesY, quality: 2 })

        const createTile = ({
            terrain,
            tile,
            tileTo,
        }: {
            terrain: number
            tile: { x: number; y: number }
            tileTo?: { x: number; y: number }
        }) => {
            const x = mapOffsetX + tile.x * tileSize * slideWidth
            const y = mapOffsetY + tile.y * tileSize * slideWidth

            const xTo = mapOffsetX + (tileTo ? tileTo.x : tile.x) * tileSize * slideWidth
            const yTo = mapOffsetY + (tileTo ? tileTo.y : tile.y) * tileSize * slideWidth

            s__MakeTerrainCreateAction_create(terrain, x, y, xTo + tileSize, yTo + tileSize)
        }

        let prev: { x: number; y: number }

        path.data.forEach(d => {
            if (!prev) {
                prev = d
                return
            }

            print(`Dumpin terrain from: x:${prev.x} y:${prev.y} to x:${d.x} y:${d.y}`)

            createTile({ terrain: slideTerrain, tile: prev, tileTo: d })

            prev = d
        })

        createTile({ terrain: walkTerrain, tile: path.start })
        createTile({ terrain: walkTerrain, tile: path.end })

        FogModifierStart(udg_viewAll)

        // spawn terrain?
        // s__MakeTerrainCreateAction_create(
        //     slideTerrain,
        //     (mapSize - mapSize / 2) * tileSize,
        //     (mapSize - mapSize / 2) * tileSize,
        //     (mapSize / 2) * tileSize,
        //     (mapSize / 2) * tileSize
        // )

        print('OK')
    })
}

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain)
