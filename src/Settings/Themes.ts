export const Themes = () => {
    const w1 = sc__TerrainTypeArray_newWalk(udg_terrainTypes, 'w1', TerrainTypeString2TerrainTypeId("'Ngrs'"), 522)
    const w2 = sc__TerrainTypeArray_newWalk(udg_terrainTypes, 'w2', TerrainTypeString2TerrainTypeId("'Lgrd'"), 522)
    const w3 = sc__TerrainTypeArray_newWalk(udg_terrainTypes, 'w3', TerrainTypeString2TerrainTypeId("'Yblm'"), 522)

    const s1 = sc__TerrainTypeArray_newSlide(
        udg_terrainTypes,
        's1',
        TerrainTypeString2TerrainTypeId("'Nice'"),
        550,
        true
    )
    const s2 = sc__TerrainTypeArray_newSlide(
        udg_terrainTypes,
        's2',
        TerrainTypeString2TerrainTypeId("'Nsnw'"),
        550,
        true
    )

    const d1 = sc__TerrainTypeArray_newDeath(
        udg_terrainTypes,
        'd1',
        TerrainTypeString2TerrainTypeId("'cNc1'"),
        '',
        0.2,
        20
    )
    const d2 = sc__TerrainTypeArray_newDeath(
        udg_terrainTypes,
        'd2',
        TerrainTypeString2TerrainTypeId("'Ywmb'"),
        '',
        0.2,
        20
    )
    const d3 = sc__TerrainTypeArray_newDeath(
        udg_terrainTypes,
        'd3',
        TerrainTypeString2TerrainTypeId("'Avin'"),
        '',
        0.2,
        20
    )

    return {
        magic: {
            walkTerrain: w1,
            slideTerrain: s1,
            deathTerrain: d1,
            monsterIds: [
                'hfoo',
                'hpea',
                'hmpr',
                'hsor',
                'hrif',
                'opeo',
                'ogru',
                'ohun',
                'uaco',
                'ugho',
                'ewsp',
                'earc',
                'esen',
                'edry',
            ],
        },
        fullskill: {
            walkTerrain: w2,
            slideTerrain: s1,
            deathTerrain: d2,
            monsterIds: ['hfoo'],
        },
        murloc: {
            walkTerrain: w3,
            slideTerrain: s2,
            deathTerrain: d3,
            monsterIds: ['nmrl', 'nmrr', 'nmfs', 'nmrm', 'nmmu'],
        },
    }
}

// -setto d3 w3 s1 w1 d1 s2 w2 d2
// -setto s1 s2 w1 w2 w3 d1 d2 d3
