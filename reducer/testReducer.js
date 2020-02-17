import * as types from '../action/types'

export const initialSate = {
    data: null,
    err: null
}

export default function userReducer(state = initialSate, action) {
    switch (action.type) {
        case types.GET_USER_SUCCESS:
            return {
                ...state,
                data: action.data
            }
        case types.GET_USER_ERR:
            return {
                ...state,
                err: action.err
            }
        default:
            return state
    }
}