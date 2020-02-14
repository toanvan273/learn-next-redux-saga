import {all, call} from 'redux-saga/effects'
import testSaga from './testSaga'
import runClockSaga from './clockSaga'
function* rootSaga() {
    yield all([
        call(runClockSaga),
        testSaga,
        // runClockSaga
        // 
    ])
}
export default rootSaga