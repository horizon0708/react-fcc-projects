import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
function configureStore(initalState){
    const middlewares = [
        thunk,
        logger,
        sagaMiddleware
    ];

    return createStore(rootReducer, initalState, compose(
        applyMiddleware(...middlewares)
    ))
}

export default configureStore;