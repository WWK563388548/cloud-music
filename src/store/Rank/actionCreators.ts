//actionCrreator
import { axiosInstance } from "../../lib/config";
import { Dispatch } from 'redux';
import { fromJS } from 'immutable'; // 将 JS 对象转换成 immutable 对象
import {
  CHANGE_LOADING,
  CHANGE_RANK_LIST,
} from './constants';
import { RankList, ReponseType } from './types';


const changeLoading = (data: boolean) => ({
  type: CHANGE_LOADING,
  data
})

const changeRankList = (data: RankList[]) => ({
  type: CHANGE_RANK_LIST,
  data: fromJS(data)
})

  
export const getRankList = () => {
  return (dispatch: Dispatch) => {
    axiosInstance
    .get(`/toplist/detail`)
    .then(({ list }: ReponseType) => {
      if(list) {
        dispatch(changeRankList(list));
        dispatch(changeLoading(false));
      } else {
        throw new Error('无法获取排行榜数据');
      }
    })
    .catch ((e) => {
      alert(e);
      console.log ("无法获取排行榜数据");
    }) 
  }
}
  