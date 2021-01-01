import { DrakeMPQ } from 'utility-node/dist/MPQ/DrakeMPQ'
import { simpleExec } from 'utility-node/dist/SimpleExec'
import { existsSync, readFileSync, unlinkSync, writeFileSync } from 'fs-extra'
import { getEnv } from 'utility-node/dist/Env'

const transpilerFix = `-- TRANSPILER FIX
local oldSubString = SubString
SubString = function(source, start, _end)
    if start > StringLength(source) then
        return nil
    end
    local result = oldSubString(source, start, _end)
    return result
end
function`

const main = async () => {
    const src = 'C:/Users/Stan/Node/mec/source/mec.w3x'
    const outDir = 'C:/Users/Stan/Node/mec/maps/map.w3x'

    const tmpFile = 'C:/Users/Stan/Node/mec/maps/tmp.w3x'
    const mapJ = './tmp.j'

    await DrakeMPQ().extract({ mpq: src, file: 'war3map.j', outputFile: mapJ })

    let contents = readFileSync(mapJ).toString('utf-8')
    contents = contents.replace(new RegExp('!=-', 'g'), '!= -')
    contents = contents.replace(new RegExp('=-', 'g'), '= -')
    contents = contents.replace(new RegExp('"\\\\\\\\\\\\\\\\"', 'g'), '"@BACKSLASH@@BACKSLASH@@BACKSLASH@@BACKSLASH@"')
    contents = contents.replace(new RegExp('"\\\\\\\\"', 'g'), '"@BACKSLASH@@BACKSLASH@"')
    writeFileSync(mapJ, contents)

    // .d.ts
    {
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

    // .w3x
    {
        await simpleExec({
            cmd: `${getEnv('War3NetMPQApi')} "transpile>${src}>${tmpFile}"`,
            verbose: true,
        })

        if (existsSync(`${outDir}/war3map.lua`)) {
            unlinkSync(`${outDir}/war3map.lua`)
        }

        await DrakeMPQ().extractAll({ mpq: tmpFile, outputDir: outDir })

        unlinkSync(tmpFile)

        let contents = readFileSync(`${outDir}/war3map.lua`).toString('utf-8')
        contents = contents.replace(new RegExp('^function', 'm'), transpilerFix)
        contents = contents.replace(
            new RegExp('outputStr = outputStr \\.\\. char', 'g'),
            'outputStr = (outputStr or "") .. char'
        )

        writeFileSync(`${outDir}/war3map.lua`, contents)
    }

    const cleanup = [`${outDir}/(attributes)`, `${outDir}/(listfile)`, `${outDir}/war3map.j`]

    cleanup.forEach(c => {
        if (existsSync(c)) {
            unlinkSync(c)
        }
    })
}

main()
