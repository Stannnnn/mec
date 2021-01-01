import { createEvent, forRange } from 'utils'

const commandTrigger = '.'

const commands: { cmd: string; desc?: string }[] = []

export const Commands = () => {
    const registerCommand = ({
        cmd,
        desc,
        cb,
        exactMatchOnly,
    }: {
        cmd: string
        desc?: string
        cb: () => void
        exactMatchOnly: boolean
    }) => {
        const c = `${commandTrigger}${cmd}`
        commands.push({ cmd, desc })

        createEvent({
            events: [
                t => {
                    forRange(bj_MAX_PLAYER_SLOTS, i => TriggerRegisterPlayerChatEvent(t, Player(i), c, exactMatchOnly))
                },
            ],
            actions: [() => cb()],
        })
    }

    registerCommand({
        cmd: 'help',
        exactMatchOnly: true,
        cb: () => {
            let s = 'Commands:\n'

            commands.forEach(c => {
                s += c.cmd

                if (c.desc) {
                    s += ' - ' + c.desc
                }

                s += '\n'
            })

            print(s)
        },
    })

    return { registerCommand }
}
