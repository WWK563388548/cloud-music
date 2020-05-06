//reducer
import { fromJS } from 'immutable'; // 这里用到 fromJS 把 JS 数据结构转化成 immutable 数据结构
import {
  CHANGE_RANK_LIST,
  CHANGE_LOADING,
} from './constants';
import { RankActionType } from './types';

const defaultState = fromJS({
  rankList: [],
  loading: true
})
  
export default (state = defaultState, action: RankActionType) => {
  switch (action.type) {
    case CHANGE_RANK_LIST:
      return state.set('rankList', action.data);
    case CHANGE_LOADING:
      return state.set('loading', action.data);
    default:
      return state;
  }
}

  