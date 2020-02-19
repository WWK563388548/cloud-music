// reducer.ts
import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from './Recommend/index';

export default combineReducers ({
    recommend: recommendReducer,
});