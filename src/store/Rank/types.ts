import { AxiosResponse } from 'axios';

export const CHANGE_RANK_LIST = 'CHANGE_RANK_LIST';
export const CHANGE_LOADING = 'CHANGE_LOADING';

export interface Track {
  first: string
  second: string
}

export interface RankList {
  ToplistType: string
  adType: number
  anonimous: boolean
  backgroundCoverId: number
  backgroundCoverUrl: string | null
  cloudTrackCount: number
  commentThreadId: string
  coverImgId: number
  coverImgId_str: string
  coverImgUrl: string
  createTime: number
  creator: string | null
  description: string
  englishTitle: string | null
  highQuality: boolean
  id: number
  name: string
  newImported: boolean
  opRecommend: boolean
  ordered: boolean
  playCount: number
  privacy: number
  recommendInfo: string | null
  specialType: number
  status: number
  subscribedCount: number
  subscribers: string[]
  tags: string[]
  titleImage: number
  totalDuration: number
  trackCount: number
  trackNumberUpdateTime: number
  trackUpdateTime: number
  tracks: Track[]
  updateFrequency: string
  updateTime: number
  userId: number
}

export interface ReponseType extends AxiosResponse {
  list?: RankList[]
}
 
export interface ChangeLoading {
  type: typeof CHANGE_LOADING
  data: boolean
}

export interface ChangeRankList {
  type: typeof CHANGE_RANK_LIST
  data: RankList[]
}
  
export type RankActionType = ChangeRankList | ChangeLoading