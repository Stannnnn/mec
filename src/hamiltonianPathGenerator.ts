type GenerateOpts = { width: number; height: number; quality?: number }
type GeneratePath = {
    start: { x: number; y: number }
    end: { x: number; y: number }
    data: { x: number; y: number }[][]
}

type GeneratePathOut = {
    start: { x: number; y: number }
    end: { x: number; y: number }
    data: { x: number; y: number }[]
}

export const hamiltonianPathGenerator = (opts: GenerateOpts) => {
    function generateSimplePath(width: number, height: number) {
        let path: {
            start: { x: number; y: number }
            end: { x: number; y: number }
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

        let data: { x: number; y: number }[][] = []
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

    function step(hampath: GeneratePath) {
        let s = hampath.start
        let d = hampath.data
        let w = d[0].length
        let h = d.length
        let dirs = [
            { x: 0, y: -1 },
            { x: 1, y: 0 },
            { x: 0, y: 1 },
            { x: -1, y: 0 },
        ] // Possible direction vectors on the grid
        let dir: { x: number; y: number }
        let validDir = false

        // Pick a random direction
        while (!validDir) {
            validDir = true
            dir = dirs[Math.floor(Math.random() * 4)]
            // Not valid to move off the ends of the grid, or in the direction the start is already connected to.
            if (s.x + dir.x < 0 || s.x + dir.x > w - 1 || s.y + dir.y < 0 || s.y + dir.y > h - 1) {
                validDir = false
            } else if (d[s.y][s.x].x === s.x + dir.x && d[s.y][s.x].y === s.y) {
                validDir = false
            }
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

    function reverse(path: GeneratePath) {
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

    function convertToSequence(path: GeneratePath) {
        let d = path.data
        let sequence: { x: number; y: number }[] = []
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
    }

    /* Returns a random looking Hamiltonian path.
     * Notes: First generates a basic Hamiltonian path then performs a series of randomizing steps.
     * The number of steps has been set to width"2 * height^2 * 0.1 which is generally large enough
     * to create a random looking path. The path is periodically reversed since the step function
     * only moves the start point, allowing both start and end points to be somewhat randomized */
    function generate(opts: GenerateOpts) {
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

        // These change the type
        convertToSequence(path)

        return (path as any) as GeneratePathOut
    }

    return generate(opts)
}
