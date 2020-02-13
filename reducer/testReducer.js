import * as types from '../action/types'

export const initialSate = {
    data: null,
    err: null
}

export default function userReducer(state = initialSate, action) {
    switch (action.type) {
        case types.TEST_GET_SUCCESS:
            return {
                ...state,
                data: action.data
            }
        case types.TEST_GET_METHOD_ERR:
            return {
                ...state,
                err: action.err
            }
        default:
            return state
    }
}