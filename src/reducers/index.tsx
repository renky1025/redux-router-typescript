import {combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { enthusiasm  } from './helloreducer';
import { numbers  } from './appreducer';

export const AppReducers =   combineReducers({ enthusiasm, numbers,  router: routerReducer})
