import * as fs from 'fs-extra'
import { IBlock, IPoint, IRegion, World } from '../src/World/World'
import { hamiltonianPathGenerator } from '../src/hamiltonianPathGenerator'

const gridTiles = 8

const tileSize = 128

const slideWidth = 3

// DON'T CHANGE THIS
const gridWidth = 3

const generateSvg = () => {
    const path = hamiltonianPathGenerator({ height: gridTiles, width: gridTiles, diagonalPaths: true })

    const world = World({
        tileSize,
        slideWidth,
        gridWidth,
        mapOffsetX: 0,
        mapOffsetY: 0,
        gridTilesX: gridTiles,
        gridTilesY: gridTiles,
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

    const svg = world.render({
        startRegion: world.getRegionFromPoint(path.start),
        endRegion: world.getRegionFromPoint(path.end),
        regions,
        renderer: ({ startRegion, endRegion, regions }) => {
            const renderTile = ({ block }: { block: IBlock }) => {
                const rectProps = `width="${tileSize}" height="${tileSize}" fill="${
                    (block.flags && block.flags.fill) || 'green'
                }"`

                return `<rect x="${block.topLeft.x}" y="${block.topLeft.y}" ${rectProps} />`
            }

            const debugLines = () => {
                let s = ''

                const width = tileSize * gridWidth * slideWidth * gridTiles
                const height = tileSize * gridWidth * slideWidth * gridTiles

                for (let i = 0; i <= height / tileSize; i++) {
                    s += `<line x1="${0}" y1="${i * tileSize}" x2="${width}" y2="${i * tileSize}" stroke="purple" />`
                }

                for (let j = 0; j <= height / tileSize; j++) {
                    s += `<line x1="${j * tileSize}" y1="${0}" x2="${j * tileSize}" y2="${height}" stroke="purple" />`
                }

                return s
            }

            return [
                `<svg viewBox="0 0 ${tileSize * gridWidth * slideWidth * gridTiles} ${
                    tileSize * gridWidth * slideWidth * gridTiles
                }">`,
                regions
                    .map(region =>
                        region.chunks.map(chunk => chunk.blocks.map(block => renderTile({ block })).join('')).join('')
                    )
                    .join(''),
                startRegion.chunks.map(chunk =>
                    chunk.blocks.map(block => renderTile({ block: { ...block, flags: { fill: 'blue' } } })).join('')
                ),
                debugLines(),
                `</svg>`,
            ].join('')
        },
    })

    fs.writeFileSync(`${__dirname}/out.json`, JSON.stringify(path.data, null, 4))
    fs.writeFileSync(`${__dirname}/out.svg`, svg)
}

generateSvg()
