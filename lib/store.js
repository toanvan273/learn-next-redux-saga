import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducer/rootReducer'
import rootSaga from '../saga/rootSaga'

const bindMiddleware = middleware => {
    if(process.env.NODE_ENV !== 'production'){
        const {composeWithDevTools} = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}
function configureStore(initialSate) {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        initialSate,
        bindMiddleware([sagaMiddleware])
    )
    store.sagaTask = sagaMiddleware.run(rootSaga)
    return store
}
export default configureStore