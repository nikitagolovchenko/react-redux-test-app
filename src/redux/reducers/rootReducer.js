import {combineReducers} from 'redux';
import productReducer from './productReducer';
import loadingReducer from './loadingReducer';

export const rootReducer = combineReducers({
  product: productReducer,
  loading: loadingReducer,
}) 