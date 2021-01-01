import * as React from '../../node_modules/w3ts-jsx/dist/src/index'
import { Timer } from 'w3ts/index'
import { Interface } from './Interface'

export const renderInterface = () => {
    // TODO; probably dont need the timer wrapper
    new Timer().start(0.5, false, () => {
        React.render(<Interface />, BlzGetOriginFrame(ORIGIN_FRAME_GAME_UI, 0))
    })
}
