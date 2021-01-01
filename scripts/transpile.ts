import { DrakeMPQ } from 'utility-node/dist/MPQ/DrakeMPQ'
import { simpleExec } from 'utility-node/dist/SimpleExec'
import { existsSync, readFileSync, unlinkSync, writeFileSync } from 'fs-extra'

const main = async () => {
    const src = 'C:/Users/Stan/Node/mec/source/mec.w3x'
    const outDir = 'C:/Users/Stan/Node/mec/maps/map.w3x'

    const mapJ = './tmp.j'

    await DrakeMPQ().extract({ mpq: src, file: 'war3map.j', outputFile: mapJ })

    let contents = readFileSync(mapJ).toString('utf-8')
    contents = contents.replace(new RegExp('!=-', 'g'), '!= -')
    contents = contents.replace(new RegExp('=-', 'g'), '= -')
    contents = contents.replace(new RegExp('"\\\\\\\\\\\\\\\\"', 'g'), '"@BACKSLASH@@BACKSLASH@@BACKSLASH@@BACKSLASH@"')
    contents = contents.replace(new RegExp('"\\\\\\\\"', 'g'), '"@BACKSLASH@@BACKSLASH@"')
    writeFileSync(mapJ, contents)

    // war3map.j
    // TODO; We use drake's Jass to Lua transpiler, GUI only no API..
    if (false) {
        await simpleExec({
            cmd: [
                'C:/Users/Stan/Node/JassToTs/JassToTs/bin/Release/netcoreapp2.1/publish/JassToTs.exe',
                '-i',
                mapJ,
                '-lua',
                '-o',
                `${outDir}/war3map.lua`,
            ].join(' '),
            verbose: true,
        })

        let contents2 = readFileSync(mapJ).toString('utf-8')
        contents2 = contents2.replace(new RegExp('"@BACKSLASH@"', 'g'), '"\\\\"')
        writeFileSync(mapJ, contents2)
    }

    // .d.ts
    if (true) {
        const dts = 'C:/Users/Stan/Node/mec/src/war3map.d.ts'

        await simpleExec({
            cmd: [
                'C:/Users/Stan/Node/JassToTs/JassToTs/bin/Release/netcoreapp2.1/publish/JassToTs.exe',
                '-i',
                mapJ,
                '-dts',
                '-o',
                dts,
            ].join(' '),
            verbose: true,
        })

        let contents = readFileSync(dts).toString('utf-8')
        contents = contents.replace(new RegExp('//.*\n', 'g'), '')
        contents = contents.replace(new RegExp(' = .*', 'g'), '')
        contents = contents.replace(new RegExp('declare ', 'g'), '')
        contents = contents.replace(new RegExp(';$', 'gm'), '')
        contents = contents.replace(new RegExp('const ', 'g'), 'var ')
        contents = contents.replace(new RegExp(' \\(', 'g'), '(')
        contents = contents.replace(new RegExp('this:', 'g'), 'thisv:')
        contents = contents.replace(new RegExp('new: string', 'g'), 'newv: string')
        contents =
            'export {}\n\ndeclare global {\n' +
            contents
                .split('\n')
                .map(c => `\t${c}`)
                .join('\n') +
            '\n}\n'

        writeFileSync(dts, contents)
    }

    unlinkSync(mapJ)

    await DrakeMPQ().extractAll({ mpq: src, outputDir: outDir })

    const cleanup = [`${outDir}/(attributes)`, `${outDir}/(listfile)`, `${outDir}/war3map.j`]

    cleanup.forEach(c => {
        if (existsSync(c)) {
            unlinkSync(c)
        }
    })
}

main()
