// See rf__Make_GetActions for all right click function definitions

let monsterId = 0

export const spawnMonster = ({
    level,
    monsterLabel,
    x1,
    y1,
    x2,
    y2,
}: {
    level: number
    monsterLabel: string
    x1: number
    y1: number
    x2: number
    y2: number
}) => {
    // const monster = sc__MonsterSimplePatrolArray_new(
    //     s__Level_monstersSimplePatrol[level],
    //     s__MonsterTypeArray_get(udg_monsterTypes, monsterLabel),
    //     x1,
    //     y1,
    //     x2,
    //     y2,
    //     true
    // )

    s__MonsterSimplePatrol_setId(
        s__MonsterSimplePatrolArray_new(
            s__Level_monstersSimplePatrol[level],
            s__MonsterTypeArray_get(udg_monsterTypes, monsterLabel),
            x1,
            y1,
            x2,
            y2,
            true
        ),
        monsterId++
    )
}

export const spawnRock = ({
    level,
    monsterLabel,
    x,
    y,
}: {
    level: number
    monsterLabel: string
    x: number
    y: number
}) => {
    s__MonsterNoMoveArray_new(
        s__Level_monstersNoMove[level],
        s__MonsterTypeArray_get(udg_monsterTypes, monsterLabel),
        x,
        y,
        -1,
        true
    )
}

export const killEscapers = () => {
    // Code from s__Escaper_kill which doesn't work because it thinks the hero is already dead for some reason.
    s___EscaperArray_escapers.map((_, i) => {
        s__Escaper_resetItem(i)
        KillUnit(s__Escaper_hero[i])
        s__Escaper_lastTerrainType[i] = 0
        ShowUnit(s__Escaper_invisUnit[i], false)
        s__Escaper_enableCheckTerrain(i, false)
        StopAfk(GetPlayerId(s__Escaper_p[i]))
        s__Escaper_isHeroSelectedB[i] = false
    })
}

export const enableAutoRevive = () => {
    udg_autoreviveDelay = 0.3

    s___EscaperArray_escapers.map((_, i) => {
        s__Escaper_hasAutoreviveB[i] = true
    })
}
