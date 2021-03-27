export const Direction = {
    N: { x: 0, y: 1 },
    NE: { x: 1, y: 1 },
    E: { x: 1, y: 0 },
    SE: { x: 1, y: -1 },
    S: { x: 0, y: -1 },
    SW: { x: -1, y: -1 },
    W: { x: -1, y: 0 },
    NW: { x: -1, y: 1 },
}

export const directions = [
    Direction.N,
    Direction.NE,
    Direction.E,
    Direction.SE,
    Direction.S,
    Direction.SW,
    Direction.W,
    Direction.NW,
]

type Point = { x: number; y: number }

type GenerateOpts = { width: number; height: number; quality?: number; diagonalPaths: boolean }
type GeneratePath = {
    start: Point
    end: Point
    data: { x: number; y: number }[][]
}

type GeneratePathOut = {
    start: Point
    end: Point
    data: Point[]
}

export const hamiltonianPathGenerator = (opts: GenerateOpts) => {
    const isSame = (a: Point, b: Point) => a.x === b.x && a.y === b.y

    const generateSimplePath = (width: number, height: number) => {
        let path: {
            start: Point
            end: Point
            data: { x: number; y: number }[][]
            width: number
            height: number
        } = {
            start: { x: 0, y: 0 },
            end: { x: 0, y: 0 },
            data: [],
            width,
            height,
        }

        let data: Point[][] = []
        let y = 0
        for (; y < height; y++) {
            data.push([])
            for (let x = 0; x < width; x++) {
                if (y % 2 === 0) {
                    if (x === width - 1) {
                        data[y].push({ x: x, y: y + 1 })
                    } else {
                        data[y].push({ x: x + 1, y: y })
                    }
                } else {
                    if (x === 0) {
                        data[y].push({ x: x, y: y + 1 })
                    } else {
                        data[y].push({ x: x - 1, y: y })
                    }
                }
            }
        }

        if (y % 2 === 0) {
            path.end = { x: 0, y: height - 1 }
        } else {
            path.end = { x: width - 1, y: height - 1 }
        }

        data[path.end.y][path.end.x] = { x: -1, y: -1 }
        path.data = data

        return path
    }

    const step = (hampath: GeneratePath) => {
        let s = hampath.start
        let d = hampath.data
        let w = d[0].length
        let h = d.length
        let dirs = [
            Direction.N,
            Direction.E,
            Direction.S,
            Direction.W,
            ...(opts.diagonalPaths ? [Direction.NE, Direction.SE, Direction.SW, Direction.NW] : []),
        ] // Possible direction vectors on the grid
        let dir: Point
        let validDir = false

        // Pick a random direction
        while (!validDir) {
            validDir = true
            dir = dirs[Math.floor(Math.random() * dirs.length)]

            // Not valid to move off the ends of the grid, or in the direction the start is already connected to.
            if (s.x + dir.x < 0 || s.x + dir.x > w - 1 || s.y + dir.y < 0 || s.y + dir.y > h - 1) {
                validDir = false
            } else if (isSame(s, d[s.y][s.x])) {
                validDir = false
            }

            // // Prevent diagonal crossover
            // if (validDir && dir.x !== 0 && dir.y !== 0) {
            //     const c1 = { x: s.x + dir.x, y: s.y }
            //     const c2 = { x: s.x, y: s.y + dir.y }

            //     const a1 = d[c1.y][c1.x]
            //     const a2 = d[c2.y][c2.x]

            //     const b1 = a2.dir ? { x: a1.x + a2.dir.x, y: a1.y + a2.dir.y } : false
            //     const b2 = a1.dir ? { x: a2.x + a1.dir.x, y: a2.y + a1.dir.y } : false

            //     if ((b1 && isSame(b1, a2)) || (b2 && isSame(b2, a1))) {
            //         console.log(`Crossover at: ${c1.x} ${c1.y} to ${c2.x} ${c2.y}`)
            //         validDir = false
            //     }
            // }
        }

        // Make a note of the old start connection
        let osd = { x: d[s.y][s.x].x, y: d[s.y][s.x].y }

        // Connect the old start point in the new direction
        d[s.y][s.x].x = s.x + dir!.x
        d[s.y][s.x].y = s.y + dir!.y

        // From the old start, follow the path and reverse the connections until the new start is reached
        let last = { x: s.x, y: s.y }
        let curr = { x: s.x, y: s.y }
        let next = { x: osd.x, y: osd.y }

        while (next.x !== s.x + dir!.x || next.y !== s.y + dir!.y) {
            last.x = curr.x
            last.y = curr.y
            curr.x = next.x
            curr.y = next.y
            next.x = d[curr.y][curr.x].x
            next.y = d[curr.y][curr.x].y
            d[curr.y][curr.x].x = last.x
            d[curr.y][curr.x].y = last.y
        }

        s.x = curr.x
        s.y = curr.y
    }

    const reverse = (path: GeneratePath) => {
        let s = path.start
        let d = path.data

        let last = { x: s.x, y: s.y }
        let curr = { x: s.x, y: s.y }
        let next = { x: d[s.y][s.x].x, y: d[s.y][s.x].y }

        d[s.y][s.x].x = -1
        d[s.y][s.x].y = -1

        do {
            last.x = curr.x
            last.y = curr.y
            curr.x = next.x
            curr.y = next.y
            next.x = d[curr.y][curr.x].x
            next.y = d[curr.y][curr.x].y
            d[curr.y][curr.x].x = last.x
            d[curr.y][curr.x].y = last.y
        } while (next.x !== -1 || next.y !== -1)

        path.end.x = path.start.x
        path.end.y = path.start.y
        path.start.x = curr.x
        path.start.y = curr.y
    }

    const convertToSequence = (path: GeneratePath): GeneratePathOut => {
        let d = path.data
        let sequence: Point[] = []
        let curr = { x: path.start.x, y: path.start.y }
        let next = { x: path.start.x, y: path.start.y }

        do {
            curr.x = next.x
            curr.y = next.y
            sequence.push({ x: curr.x, y: curr.y })
            next.x = d[curr.y][curr.x].x
            next.y = d[curr.y][curr.x].y
        } while (next.x !== -1 || next.y !== -1)

        path.data = sequence as any

        return path as any
    }

    /* Returns a random looking Hamiltonian path.
     * Notes: First generates a basic Hamiltonian path then performs a series of randomizing steps.
     * The number of steps has been set to width"2 * height^2 * 0.1 which is generally large enough
     * to create a random looking path. The path is periodically reversed since the step function
     * only moves the start point, allowing both start and end points to be somewhat randomized */
    const _generate = (opts: GenerateOpts) => {
        let w = opts.width || 8
        let h = opts.height || 8

        let path = generateSimplePath(w, h)

        let nSuccessful = 0
        for (let i = 0; i < w * w * h * h * (opts.quality || 0.1); i++) {
            if ((i + 1) % Math.max(w, h) === 0) {
                reverse(path)
            }
            step(path)
            nSuccessful++
        }

        return { path, newPath: convertToSequence({ ...path }) }
    }

    const generate = (opts: GenerateOpts): GeneratePathOut => {
        const { path, newPath } = _generate(opts)

        // Prevent diagonal crossover
        const dataMap: { [x: string]: true } = {}

        let prev: Point | undefined

        newPath.data.forEach(d => {
            if (!prev) {
                prev = d
                return
            }

            dataMap[`${prev.x}_${prev.y}_${d.x}_${d.y}`] = true

            prev = d
        })

        let failed = false
        prev = undefined

        newPath.data.forEach(d => {
            if (!prev) {
                prev = d
                return
            }

            let dir = { x: d.x - prev.x, y: d.y - prev.y }

            if (dir.x !== 0 && dir.y !== 0) {
                const c1 = { x: prev.x + dir.x, y: prev.y }
                const c2 = { x: prev.x, y: prev.y + dir.y }

                if (dataMap[`${c1.x}_${c1.y}_${c2.x}_${c2.y}`] || dataMap[`${c2.x}_${c2.y}_${c1.x}_${c1.y}`]) {
                    // console.log(`Crossover at: ${c1.x} ${c1.y} to ${c2.x} ${c2.y}`)
                    failed = true
                }
            }

            prev = d
        })

        if (failed) {
            return generate(opts)
        }

        return newPath
    }

    return generate(opts)
}

// https://github.com/dfusilier/hampath3/blob/master/src/hampath3.js
