import { all, call, fork } from 'redux-saga/effects'
import userSaga from './userSaga'
import clockSaga from './clockSaga'
function* rootSaga() {
    yield all([
        yield fork(userSaga),
        yield fork(clockSaga)
    ])
}
export default rootSaga