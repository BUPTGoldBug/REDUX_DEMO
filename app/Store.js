'use strict';

import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import createLogger from 'redux-logger';
import storage from './config/asyncStorageConf';

import NavigatorReducer from './reducers/NavigatiorReducer';
import SearchReducer from './reducers/SearchReducer';
import {navigator_midderware } from "./components/NavigationPage"


const logger = createLogger();

const store = createStore(
    combineReducers({
        navigator: NavigatorReducer,
        search: SearchReducer,
    }),
    {},  //initialState
    applyMiddleware(thunk, promiseMiddleware(), logger,navigator_midderware) //传入所有的
);

export default store;