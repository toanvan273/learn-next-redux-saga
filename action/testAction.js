
import * as types from './types'

const getUser = () => ({
    type: types.TEST_GET_METHOD
})
const getUserSuccess = (data) => {
    return {
        type: types.TEST_GET_SUCCESS,
        data
    }
}
const  getUserErr = (err) => ({
    type: types.TEST_GET_METHOD_ERR,
    err
})
export {getUser,getUserSuccess, getUserErr}