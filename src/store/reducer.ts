// reducer.ts
import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from './Recommend/index';
import { reducer as singersReducer } from './Singers/index';
import { reducer as rankReducer } from './Rank/index';

export default combineReducers ({
    recommend: recommendReducer,
    singers: singersReducer,
    rank: rankReducer,
});