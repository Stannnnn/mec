export const createEvent = ({
    events,
    conditions,
    actions,
}: {
    events: ((t: trigger) => void)[]
    conditions?: (() => boolean)[]
    actions: ((this: void) => void)[]
}) => {
    const t = CreateTrigger()

    events.forEach(event => event(t))

    if (conditions) {
        conditions.forEach(condition => TriggerAddCondition(t, Condition(condition)))
    }

    actions.forEach(action => TriggerAddAction(t, action))

    return t
}

export const forRange = (j: number, cb: (i: number) => void) => {
    for (let i = 0; i < j; i++) {
        cb(i)
    }
}
