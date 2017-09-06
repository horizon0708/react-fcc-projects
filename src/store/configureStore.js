import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

function configureStore(initalState){
    const middlewares = [
        thunk,
        logger
    ]

    return createStore(rootReducer, initalState, compose(
        applyMiddleware(...middlewares)
    ))
}

export default configureStore;