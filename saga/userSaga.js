import { put, takeEvery, fork, call, takeLatest, take } from 'redux-saga/effects'
import Axios from 'axios'

import { getUserSuccess, getUserErr } from '../action/userAction'
import * as types from '../action/types'
import { host } from '../host'
const apiGetUser = host + '/users'
// put = vs dispatch
function* getUserSaga() {
    // try{
    //     const res= yield Axios.get(apiGetUser)
    //     console.log(res);
    //     const {data} = res
    //     yield put(getUserSuccess(data))
    // }catch(err){
    //     console.log(err);
    //     yield put(getUserErr(err))
    // }
    // while (true) {
        yield take(types.GET_USER)
        try {
            const res = yield Axios.get(apiGetUser)
            console.log(res);
            const { data } = res
            yield put(getUserSuccess(data))
        } catch (err) {
            console.log(err);
            yield put(getUserErr(err))
        }
    // }
}
function* addUserSaga({ data }) {
    console.log('data :', data);
    try {
        const res = yield (Axios.post(apiGetUser, data))
        console.log(res);
    } catch (err) {
        console.log(err);

    }
}

function* userSaga() {
    yield fork(getUserSaga)
    yield takeEvery(types.ADD_USER, addUserSaga)
}
export default userSaga


//takeLatest:   chỉ cho phép một hàm xử lý có thể chạy tại một thời điểm 