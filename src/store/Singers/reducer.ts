//reducer.js
import { fromJS } from 'immutable';
import * as actionTypes from './constants';
import { SingerActionType } from './types';

const defaultState = fromJS({
  singerList: [],
  enterLoading: true,
  pullUpLoading: false,   // Animation of pulling up loading
  pullDownLoading: false, // Animation of pulling down loading
  pageCount: 0            // pagnation
});

export default (state = defaultState, action: SingerActionType) => {
  switch(action.type) {
    case actionTypes.CHANGE_SINGER_LIST:
      return state.set('singerList', action.data);
    case actionTypes.CHANGE_PAGE_COUNT:
      return state.set('pageCount', action.data);
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set('enterLoading', action.data);
    case actionTypes.CHANGE_PULLUP_LOADING:
      return state.set('pullUpLoading', action.data);
    case actionTypes.CHANGE_PULLDOWN_LOADING:
      return state.set('pullDownLoading', action.data);
    default:
      return state;
  }
}