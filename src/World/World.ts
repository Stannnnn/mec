import * as fs from 'fs-extra'
import { Direction, directions } from '../hamiltonianPathGenerator'

// Orthogonal => Horizontal and vertical but not diagonal

export type IPoint = { x: number; y: number }
type IPoints = { x1: number; y1: number; x2: number; y2: number }

export type IWorld = ReturnType<typeof World>
export type IRegion = ReturnType<IWorld['getRegion']>
export type IChunk = IRegion['chunks'][0]
export type IBlock = IChunk['blocks'][0]

export const World = ({
    tileSize,
    gridWidth,
    slideWidth,
    mapOffsetX,
    mapOffsetY,
    gridTilesX,
    gridTilesY,
}: {
    tileSize: number
    gridWidth: number
    slideWidth: number
    mapOffsetX: number
    mapOffsetY: number
    gridTilesX: number
    gridTilesY: number
}) => {
    type IRegion = ReturnType<typeof getRegion>
    type IChunk = ReturnType<typeof getChunk>
    type IBlock = ReturnType<typeof _getBlock>

    const _getBlock = ({
        point,
        mapOffsetX,
        mapOffsetY,
        tileSize,
        flags,
    }: {
        point: IPoint
        mapOffsetX: number
        mapOffsetY: number
        tileSize: number
        flags?: { fill?: string }
    }) => {
        const x = point.x + mapOffsetX
        const y = point.y + mapOffsetY

        return {
            type: 'block' as 'block',
            center: { x: x + tileSize / 2, y: y + tileSize / 2 },
            topLeft: { x, y },
            botRight: { x: x + tileSize, y: y + tileSize },
            flags,
        }
    }

    const getBlock = (point: IPoint) => _getBlock({ point, mapOffsetX, mapOffsetY, tileSize })

    const getBlockFromPoint = (point: IPoint) => {
        const x = point.x * gridWidth * slideWidth * tileSize
        const y = point.y * gridWidth * slideWidth * tileSize

        return getBlock({ x, y })
    }

    const getChunk = ({ blocks, worldPosition }: { blocks: IBlock[]; worldPosition: IPoint }) => {
        return {
            type: 'chunk' as 'chunk',
            worldPosition,
            blocks,
            coords: {
                leftX: Math.min(...blocks.map(b => b.topLeft.x)),
                rightX: Math.max(...blocks.map(b => b.botRight.x))!,
                topY: Math.min(...blocks.map(b => b.topLeft.y))!,
                botY: Math.max(...blocks.map(b => b.botRight.y))!,
            },
        }
    }

    const _getRegion = ({
        totalX,
        totalY,
        blockX,
        blockY,
        xPositive,
        yPositive,
    }: // worldPosition,
    {
        totalX: number
        totalY: number
        blockX: number
        blockY: number
        xPositive: number
        yPositive: number
        // worldPosition: IPoint
    }) => {
        const chunks: IChunk[] = []

        if (totalX > 0 && totalY > 0) {
            for (let i = 0, j = 0; i < totalX && j < totalY; i++, j++) {
                const blocks: IBlock[] = []
                const chunkX = blockX + xPositive * i * tileSize * slideWidth
                const chunkY = blockY + yPositive * j * tileSize * slideWidth

                for (let x = 0; x < slideWidth; x++) {
                    for (let y = 0; y < slideWidth; y++) {
                        blocks.push(
                            getBlock({
                                x: chunkX + x * tileSize,
                                y: chunkY + y * tileSize,
                            })
                        )
                    }
                }

                chunks.push(getChunk({ blocks, worldPosition: { x: chunkX, y: chunkY } }))
            }
        } else if (totalX > 0) {
            for (let i = 0; i < totalX; i++) {
                const blocks: IBlock[] = []
                const chunkX = blockX + xPositive * i * tileSize * slideWidth
                const chunkY = blockY

                for (let x = 0; x < slideWidth; x++) {
                    for (let y = 0; y < slideWidth; y++) {
                        blocks.push(
                            getBlock({
                                x: chunkX + x * tileSize,
                                y: chunkY + y * tileSize,
                            })
                        )
                    }
                }

                chunks.push(getChunk({ blocks, worldPosition: { x: chunkX, y: chunkY } }))
            }
        } else if (totalY > 0) {
            for (let j = 0; j < totalY; j++) {
                const blocks: IBlock[] = []
                const chunkX = blockX
                const chunkY = blockY + yPositive * j * tileSize * slideWidth

                for (let x = 0; x < slideWidth; x++) {
                    for (let y = 0; y < slideWidth; y++) {
                        blocks.push(
                            getBlock({
                                x: chunkX + x * tileSize,
                                y: chunkY + y * tileSize,
                            })
                        )
                    }
                }

                chunks.push(getChunk({ blocks, worldPosition: { x: chunkX, y: chunkY } }))
            }
        }

        return {
            // worldPosition,
            chunks,
            center: {
                x: chunks[0].blocks[0].topLeft.x + (tileSize * slideWidth) / 2 - tileSize / 2,
                y: chunks[0].blocks[0].topLeft.y + (tileSize * slideWidth) / 2 - tileSize / 2,
            },
        }
    }

    const getRegion = ({ x1, y1, x2, y2 }: IPoints) => {
        const b1 = getBlockFromPoint({ x: x1, y: y1 })
        const b2 = getBlockFromPoint({ x: x2, y: y2 })

        const totalX = Math.abs(b2.topLeft.x - b1.topLeft.x) / (tileSize * slideWidth)
        const totalY = Math.abs(b2.topLeft.y - b1.topLeft.y) / (tileSize * slideWidth)

        const xPositive = x2 > x1 ? 1 : -1
        const yPositive = y2 > y1 ? 1 : -1

        return _getRegion({
            totalX,
            totalY,
            blockX: b1.topLeft.x,
            blockY: b1.topLeft.y,
            xPositive,
            yPositive,
            // worldPosition: { x: x1, y: y1 },
        })
    }

    const getRegionFromPoint = (point: IPoint) => {
        const b1 = getBlockFromPoint(point)

        const totalX = 1
        const totalY = 1

        const xPositive = 1
        const yPositive = 1

        return _getRegion({
            totalX,
            totalY,
            blockX: b1.topLeft.x,
            blockY: b1.topLeft.y,
            xPositive,
            yPositive,
            // worldPosition: point,
        })
    }

    return {
        getRegion,
        getRegionFromPoint,
        render: <T>({
            startRegion,
            endRegion,
            regions,
            renderer,
        }: {
            startRegion: IRegion
            endRegion: IRegion
            regions: IRegion[]
            renderer: ({
                startRegion,
                endRegion,
                regions,
            }: {
                startRegion: IRegion
                endRegion: IRegion
                regions: IRegion[]
            }) => T
        }): T => {
            const chunkMap: { [x: number]: { [y: number]: IChunk } } = {}

            regions.forEach(region => {
                region.chunks.forEach(chunk => {
                    if (!chunkMap[chunk.worldPosition.x]) {
                        chunkMap[chunk.worldPosition.x] = {}
                    }

                    chunkMap[chunk.worldPosition.x][chunk.worldPosition.y] = chunk
                })
            })

            const getChunk = ({ chunk, d }: { chunk: IPoint; d: IPoint }) => {
                let dx = chunk.x
                let dy = chunk.y

                if (d.x === -1) dx -= tileSize * slideWidth
                if (d.x === 1) dx += tileSize * slideWidth
                if (d.y === -1) dy -= tileSize * slideWidth
                if (d.y === 1) dy += tileSize * slideWidth

                // TODO; NOT SURE IF LUA GETS THIS
                return !!chunkMap[dx] && chunkMap[dx][dy]
            }

            const isSamePoint = (a: IPoint, b: IPoint) => a.x === b.x && a.y === b.y
            const isSameChunk = (a: IChunk, b: IChunk) => isSamePoint(a.worldPosition, b.worldPosition)

            const getDirection = (a: IChunk, b: IChunk) => {
                const dx = a.worldPosition.x === b.worldPosition.x ? 0 : b.worldPosition.x > a.worldPosition.x ? 1 : -1
                const dy = a.worldPosition.y === b.worldPosition.y ? 0 : b.worldPosition.y > a.worldPosition.y ? 1 : -1

                if (dx === 0 && dy === 1) return Direction.N
                if (dx === 1 && dy === 1) return Direction.NE
                if (dx === 1 && dy === 0) return Direction.E
                if (dx === 1 && dy === -1) return Direction.SE
                if (dx === 0 && dy === -1) return Direction.S
                if (dx === -1 && dy === -1) return Direction.SW
                if (dx === -1 && dy === 0) return Direction.W
                if (dx === -1 && dy === 1) return Direction.NW

                // TODO; LUA MIGHT NOT KNOW ERROR?
                // Unreachable
                throw new Error()
            }

            const reverseDirection = (d: IPoint) => ({ x: -1 * d.x, y: -1 * d.y })

            const getNeighbourDirections = (d: IPoint) => {
                if (isSamePoint(d, Direction.N)) return [Direction.NW, Direction.NE]
                if (isSamePoint(d, Direction.NE)) return [Direction.N, Direction.E]
                if (isSamePoint(d, Direction.E)) return [Direction.NE, Direction.SE]
                if (isSamePoint(d, Direction.SE)) return [Direction.E, Direction.S]
                if (isSamePoint(d, Direction.S)) return [Direction.SE, Direction.SW]
                if (isSamePoint(d, Direction.SW)) return [Direction.S, Direction.W]
                if (isSamePoint(d, Direction.W)) return [Direction.SW, Direction.NW]
                if (isSamePoint(d, Direction.NW)) return [Direction.W, Direction.N]

                // TODO; LUA MIGHT NOT KNOW ERROR?
                // Unreachable
                throw new Error()
            }

            const isDiagonal = (d: IPoint) => d.x !== 0 && d.y !== 0

            const areNeighbours = (a: IChunk, b: IChunk) => {
                return (
                    (Math.abs(a.worldPosition.x - b.worldPosition.x) === tileSize * slideWidth &&
                        Math.abs(a.worldPosition.y - b.worldPosition.y) === 0) ||
                    (Math.abs(a.worldPosition.x - b.worldPosition.x) === 0 &&
                        Math.abs(a.worldPosition.y - b.worldPosition.y) === tileSize * slideWidth)
                )
            }

            const amountOfNeighbours = (chunk: IChunk) => {
                return directions.filter(d => !!getChunk({ chunk: chunk.worldPosition, d })).length
            }

            // Strip of dead ends
            regions = regions.map(region => {
                region.chunks = region.chunks.filter(chunk => {
                    // TODO; TUPLE DIDNT WORK IN LUA?
                    const illegalNeighbours = [
                        [Direction.N, Direction.NE],
                        [Direction.NE, Direction.E],
                        [Direction.E, Direction.SE],
                        [Direction.SE, Direction.S],
                        [Direction.S, Direction.SW],
                        [Direction.SW, Direction.W],
                        [Direction.W, Direction.NW],
                        [Direction.NW, Direction.N],
                    ]

                    return (
                        illegalNeighbours.filter(i => {
                            return (
                                getChunk({ chunk: chunk.worldPosition, d: i[0] }) &&
                                getChunk({ chunk: chunk.worldPosition, d: i[1] }) &&
                                amountOfNeighbours(chunk) === 2
                            )
                        }).length === 0
                    )
                })

                return region
            })

            let prev: IChunk

            // Smooth diagonal lines
            regions = regions.map(region => {
                region.chunks.forEach(chunk => {
                    if (!prev) {
                        prev = chunk
                        return
                    }

                    const d = getDirection(prev, chunk)

                    if (isDiagonal(d)) {
                        let bonusX = 0
                        let bonusY = 0

                        if (d === Direction.NW) {
                            bonusX = slideWidth * tileSize - tileSize
                        }

                        if (d === Direction.SW) {
                            bonusX = slideWidth * tileSize - tileSize
                            bonusY = slideWidth * tileSize - tileSize
                        }

                        if (d === Direction.SE) {
                            bonusY = slideWidth * tileSize - tileSize
                        }

                        getNeighbourDirections(reverseDirection(d)).forEach(dd => {
                            const connectorX = chunk.worldPosition.x + dd.x * tileSize + bonusX
                            const connectorY = chunk.worldPosition.y + dd.y * tileSize + bonusY

                            const xPositive =
                                (d.x > 0 ? chunk.coords.leftX : chunk.coords.rightX) === connectorX ? 1 : -1
                            const yPositive = (d.y > 0 ? chunk.coords.topY : chunk.coords.botY) === connectorY ? 1 : -1

                            for (let x = 0; x < slideWidth - 1; x++) {
                                for (let y = 0; y < slideWidth - 1 - x; y++) {
                                    chunk.blocks.push({
                                        ...getBlock({
                                            x: connectorX + xPositive * x * tileSize,
                                            y: connectorY + yPositive * y * tileSize,
                                        }),
                                        flags: { fill: 'purple' },
                                    })
                                }
                            }
                        })
                    }

                    prev = chunk
                })

                return region
            })

            return renderer({ startRegion, endRegion, regions })
        },
    }
}
