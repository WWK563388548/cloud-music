import { AxiosResponse } from 'axios';

export const CHANGE_BANNER = 'CHANGE_BANNER';
export const CHANGE_RECOMMEND_LIST = 'RECOMMEND_LIST';
export const CHANGE_ENTER_LOADING = 'CHANGE_ENTER_LOADING';

export interface BannerListItem {
  imageUrl: string
  targetId: number
  adid: null | number
  targetType: number
  titleColor: string
  typeTitle: string
  url: null | string
  encodeId: string
}
  
export interface RecommendListItem {
  id: number
  type: number
  name: string
  copywriter: string
  picUrl: string
  canDislike: boolean
  trackNumberUpdateTime: number
  playCount: number
  trackCount: number
  highQuality: boolean
  alg: string
}

export interface ReponseType extends AxiosResponse {
  banners?: BannerListItem[]
  result?: RecommendListItem[]
}


export interface ChangeBannerList {
  type: typeof CHANGE_BANNER
  data: BannerListItem[]
}
export interface ChangeRecommendList {
  type: typeof CHANGE_RECOMMEND_LIST
  data: RecommendListItem[]
}

export interface ChangeEnterLoading {
  type: typeof CHANGE_ENTER_LOADING
  data: boolean
}

export type RecommendActionType = ChangeBannerList | ChangeRecommendList | ChangeEnterLoading
