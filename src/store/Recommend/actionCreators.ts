import { axiosInstance } from "../../lib/config";
import { Dispatch } from 'redux';
import * as actionTypes from './constants';
import { fromJS } from 'immutable'; // 将 JS 对象转换成 immutable 对象
import { RecommendListItem, BannerListItem, ReponseType } from './types';

export const changeBannerList = (data: BannerListItem[] | void) => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS (data)
});

export const changeRecommendList = (data: RecommendListItem[] | void) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: fromJS (data)
});

export const changeEnterLoading = (data: boolean) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
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