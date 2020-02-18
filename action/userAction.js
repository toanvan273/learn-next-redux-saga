
import * as types from './types'

export const getUser = () => ({
    type: types.GET_USER
})
export const getUserSuccess = (data) => {
    return {
        type: types.GET_USER_SUCCESS,
        data
    }
}
export const getUserErr = (err) => ({
    type: types.GET_USER_ERR,
    err
})
export const addUser = (name, job, phone) => {
    return {
        type: types.ADD_USER,
        data: { name, job, phone }
    }
}
export const addUserSuccess=()=>({type: types.ADD_USER_SUCCESS})
export const addUserfFail=()=>({type:types.ADD_USER_ERR})
export const deleteUser=(id)=>{
    return {
        type: types.DELETE_USER,
        data: id
    }
}
export const deleteUserSuccess=()=>({type:types.DELETE_USER_SUCCESS})
export const deleteUserFail=()=>({type:types.DELETE_USER_ERR})