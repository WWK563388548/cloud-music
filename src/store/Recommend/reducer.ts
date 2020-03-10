import { fromJS } from 'immutable'; // 这里用到 fromJS 把 JS 数据结构转化成 immutable 数据结构
import { RecommendActionType } from './types';
import {
  CHANGE_BANNER,
  CHANGE_RECOMMEND_LIST,
  CHANGE_ENTER_LOADING,
} from './constants';

const defaultState = fromJS ({
  bannerList: [],
  recommendList: [],
  enterLoading: true,
});

export default (state = defaultState, action: RecommendActionType ) => {
  switch (action.type) {
    case CHANGE_BANNER:
      return state.set ('bannerList', action.data);
    case CHANGE_RECOMMEND_LIST:
      return state.set ('recommendList', action.data);
    case CHANGE_ENTER_LOADING:
        return state.set ('enterLoading', action.data);
    default:
      return state;
    }
}