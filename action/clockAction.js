import * as types from './types'

export const tickClock = (isServer) => {
    return {
        type: types.TICK_CLOCK,
        light: !isServer,
        ts: Date.now()
    }
}
export const startClock = () => {
    return {
        type: types.START_CLOCK
    }
}
export const loadDataSaga = () => {
    return {
        type: types.LOAD_DATASAGA
    }
}
export const loadDataSagaSuccess = data => ({
    type: types.LOAD_DATASAGA_SUCCESS,
    data
})
export const loadDataSagaErr = err => ({
    type: types.LOAD_DATASAGA_ERR,
    err
})