import { axiosInstance } from "../../lib/config";
import { fromJS } from 'immutable';
import { 
  CHANGE_CURRENT_ALBUM, 
  CHANGE_ENTER_LOADING 
} from './constants';
import { Dispatch } from 'redux';
import { PlayList, ReponseType } from './types';

export const changeCurrentAlbum = (data: PlayList[]) => ({
  type: CHANGE_CURRENT_ALBUM,
  data: fromJS(data)
});

export const changeEnterLoading = (data: boolean) => ({
  type: CHANGE_ENTER_LOADING,
  data
});

export const getAlbumList = (id: number) => {
  return (dispatch: Dispatch) => {
    axiosInstance
    .get (`/playlist/detail?id=${id}`)
    .then (({ playlist }: ReponseType) => {
      if(playlist) {
        dispatch(changeCurrentAlbum(playlist));
        dispatch(changeEnterLoading(false));
      } else {
        throw new Error('获取歌单数据失败！');
      }
    })
    .catch ((e) => {
      alert(e);
      console.log ("获取歌单数据失败！")
    });
  }
};