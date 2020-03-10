import { axiosInstance } from "../../lib/config";
import { Dispatch } from 'redux';
import { fromJS } from 'immutable'; // 将 JS 对象转换成 immutable 对象
import { RecommendListItem, BannerListItem, ReponseType } from './types';
import {
  CHANGE_BANNER,
  CHANGE_RECOMMEND_LIST,
  CHANGE_ENTER_LOADING,
} from './constants';

export const changeBannerList = (data: BannerListItem[] | void) => ({
  type: CHANGE_BANNER,
  data: fromJS (data)
});

export const changeRecommendList = (data: RecommendListItem[] | void) => ({
  type: CHANGE_RECOMMEND_LIST,
  data: fromJS (data)
});

export const changeEnterLoading = (data: boolean) => ({
  type: CHANGE_ENTER_LOADING,
  data
});

export const getBannerList = () => {
  return (dispatch: Dispatch) => {
    axiosInstance
    .get('/banner')
    .then (({ banners }: ReponseType ) => {
      dispatch (changeBannerList (banners));
    }).catch ((e) => {
      alert(e);
      console.log ("轮播图数据传输错误");
    }) 
  }
};

export const getRecommendList = () => {
  return (dispatch: Dispatch) => {
    axiosInstance
    .get('/personalized')
    .then (({ result }: ReponseType ) => {
      dispatch (changeRecommendList (result));
      dispatch (changeEnterLoading (false)); // 改变 loading
    }).catch ((e) => {
      alert(e);
      console.log ("推荐歌单数据传输错误");
    });
  }
};