import * as types from '../action/types'
import {all, delay, put, take, takeLatest , call, takeEvery, fork} from 'redux-saga/effects'
import {tickClock} from '../action/clockAction'
import Axios from 'axios'
import * as action from '../action/clockAction'

function* runClockSaga(){
    yield take(types.START_CLOCK)
    while(true) {
        yield put(tickClock(true))
        yield delay(1000)
    }
}
function* loadDataSaga() {
    try {
        const res = yield Axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(res);
        const {data} = res
        yield put(action.loadDataSagaSuccess(data))
    } catch (err) {
        yield put(action.loadDataSagaErr(err))
    }
}
function* clockSaga(){
    yield all([
        // call(runClockSaga),
        fork(runClockSaga),
        takeLatest(types.LOAD_DATASAGA, loadDataSaga)
    ])
}
export default clockSaga