import * as types from '../action/types'

const initialState = {
    lastUpdate: 0,
    light: false,
    dataSaga: null
}

export default function clockReducer(state = initialState, action) {
    // console.log('action :', action);

    switch (action.type) {
        case types.TICK_CLOCK:
            return {
                ...state,
                ...{ lastUpdate: action.ts, light: action.light }
            }
        case types.LOAD_DATASAGA_SUCCESS: 
        return {
            ...state,
            dataSaga: action.data
        }
        default:
            return state
    }
}