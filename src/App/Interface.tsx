import * as React from '../../node_modules/w3ts-jsx/dist/src/index'

export const Interface = () => (
    <button
        inherits="ScoreScreenTabButtonTemplate"
        absPosition={{ point: FRAMEPOINT_CENTER, x: 0.4, y: 0.3 }}
        size={{ width: 0.05, height: 0.05 }}
        onClick={() => print('Button Clicked')}
    >
        <backdrop position="parent" texture="ReplaceableTextures\\CommandButtons\\BTNSelectHeroOn" />
    </button>
)
