import * as types from '../action/types'

export const initialSate = {
  data: null,
  type:null,
  err: null
}

export default function userReducer(state = initialSate, action) {
  switch (action.type) {
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        type:null,
        data: action.data
      }
    case types.GET_USER_ERR:
      return {
        ...state,
        type:null,
        err: action.err
      }
    case types.ADD_USER_SUCCESS:
      return {
        ...state,
        type: types.ADD_USER_SUCCESS
      }
    case types.GET_USER_ERR:
      return {
        ...state,
        type: types.GET_USER_ERR
      }
    case types.DELETE_USER_SUCCESS: 
    return {
      ...state,
      type: types.DELETE_USER_SUCCESS
    }
    case types.DELETE_USER_ERR:
      return {
        ...state,
        type: types.DELETE_USER_ERR
      }
    default:
      return state
  }
}