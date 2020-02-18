import { put, takeEvery, fork, call, takeLatest, take, select } from 'redux-saga/effects'
import Axios from 'axios'
// import axiosService from '../lib/axiosService'
// import { getUserSuccess, getUserErr } from '../action/userAction'
import * as actionUser from '../action/userAction'
import * as types from '../action/types'
import { host } from '../host'
const apiGetUser = host + '/users'

// put = vs dispatch
function* getUserSaga() {
    while (true) {
        yield take(types.GET_USER)
        try {
            const res = yield Axios.get(apiGetUser)
            console.log(res);
            const { data } = res
            yield put(actionUser.getUserSuccess(data))
            // const list = yield select(state=>state.userReducer.data)
            // console.log('list :',list);
        } catch (err) {
            console.log(err);
            yield put(actionUser.getUserErr(err))
        }
    }
}
function* addUserSaga({ data }) {
    try {
        const res = yield Axios.post(apiGetUser, data)
        console.log(res);
        const { status } = res
        if (status === 201) {
            yield put(actionUser.addUserSuccess())
        }
    } catch (err) {
        console.log(err);
        yield put(actionUser.addUserfFail())
    }
}
const apiDelUser = id => host + '/users/' + id
function* deleteUserSaga({ data }) {
    try {
        const res = yield Axios.delete(apiDelUser(data))
        console.log(res);
        const {status} = res
        if(status===200){
            yield put(actionUser.deleteUserSuccess())
        }
    } catch (err) {
        console.log(err);
        yield put(actionUser.deleteUserFail())
    }
}
function* userSaga() {
    yield fork(getUserSaga)
    yield takeEvery(types.ADD_USER, addUserSaga)
    yield takeLatest(types.DELETE_USER, deleteUserSaga)
}
export default userSaga


//takeLatest:   chỉ cho phép một hàm xử lý có thể chạy tại một thời điểm 