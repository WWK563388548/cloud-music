import { Dispatch } from 'redux';
import { fromJS } from 'immutable'; // 将 JS 对象转换成 immutable 对象
import { axiosInstance } from "../../lib/config";
import {
  CHANGE_SINGER_LIST,
  CHANGE_PAGE_COUNT,
  CHANGE_ENTER_LOADING,
  CHANGE_PULLUP_LOADING,
  CHANGE_PULLDOWN_LOADING,
} from './constants';
import { Artist, ReponseType } from './types';

export const changeSingerList = (data: Artist[]) => ({
  type: CHANGE_SINGER_LIST,
  data: fromJS(data)
});

export const changePageCount = (data: number) => ({
  type: CHANGE_PAGE_COUNT,
  data
});

// Default loading
export const changeEnterLoading = (data: boolean) => ({
  type: CHANGE_ENTER_LOADING,
  data
});

// Loading of pulling up
export const changePullUpLoading = (data: boolean) => ({
  type: CHANGE_PULLUP_LOADING,
  data
});

// Loading of pulling down
export const changePullDownLoading = (data: boolean) => ({
  type: CHANGE_PULLDOWN_LOADING,
  data
});

export const getRecommendSingerList = (count = 0) => {
  return (dispatch: Dispatch) => {
    axiosInstance.get(`/top/artists?offset=${count}`)
      .then(({ artists }: ReponseType) => {
        if(artists) {
          dispatch(changeSingerList(artists));
          dispatch(changeEnterLoading(false));
          dispatch(changePullDownLoading(false));
        } else {
          throw new Error('热门歌手数据获取失败');
        }
      })
      .catch((e) => {
        alert(e);
        console.log('热门歌手数据获取失败');
      });
  }
}

// Get more recommend singers
export const getMoreRecommendSingerList = () => {
  return (dispatch: Dispatch, getState: any ) => {
    const pageCount = getState().getIn(['singers', 'pageCount']);
    const singerList = getState().getIn(['singers', 'singerList']).toJS();
    axiosInstance.get(`/top/artists?offset=${pageCount}`)
      .then(({ artists }: ReponseType ) => {
        if(artists) {
          const data = [...singerList, ...artists];
          dispatch(changeSingerList(data));
          dispatch(changePullUpLoading(false));
        } else {
          throw new Error('热门歌手数据获取失败');
        }
      }).catch((e) => {
        alert(e);
        console.log('热门歌手数据获取失败');
      });
  }
};
  
export const getSingerList = (category: string, alpha: string, count = 0) => {
  return (dispatch: Dispatch ) => {
    axiosInstance.get(`/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`)
      .then(({ artists }: ReponseType ) => {
        if(artists) {
          dispatch(changeSingerList(artists));
          dispatch(changeEnterLoading(false));
          dispatch(changePullDownLoading(false));
        } else {
          throw new Error('歌手数据获取失败');
        }
      })
      .catch((e) => {
        alert(e);
        console.log('歌手数据获取失败');
      });
  }
}

// Get more singers
export const getMoreSingerList = (category: string, alpha: string) => {
  return (dispatch: Dispatch, getState: any) => {
    const pageCount = getState().getIn(['singers', 'pageCount']);
    const singerList = getState().getIn(['singers', 'singerList']).toJS();
    axiosInstance.get(`/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${pageCount}`)
      .then(({ artists }: ReponseType) => {
        if(artists) {
          const data = [...singerList, ...artists];
          dispatch(changeSingerList(data));
          dispatch(changePullUpLoading(false));
        } else {
          throw new Error('歌手数据获取失败');
        }
      })
      .catch((e) => {
        alert(e);
        console.log('歌手数据获取失败');
      });
  }
};