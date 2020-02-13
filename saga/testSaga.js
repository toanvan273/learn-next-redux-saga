import {put, takeLatest} from 'redux-saga/effects'
import Axios from 'axios'

import {getUserSuccess, getUserErr} from '../action/testAction'
import * as types from '../action/types'
import {host} from '../host'
const apiGetUser = host + '/users'
// put = vs dispatch
function* getUserSaga(){
    try{
        const res= yield Axios.get(apiGetUser)
        console.log(res);
        // const data = yield res.jon()
        const {data} = res
        console.log('data',data);
        
        yield put(getUserSuccess(data))
    }catch(err){
        console.log(err);
        yield put(getUserErr(err))
    }
}
export default takeLatest(types.TEST_GET_METHOD, getUserSaga)

//takeLatest:   chỉ cho phép một hàm xử lý có thể chạy tại một thời điểm 