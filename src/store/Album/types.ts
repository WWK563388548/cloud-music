import { AxiosResponse } from 'axios';

export const CHANGE_CURRENT_ALBUM = 'CHANGE_CURRENT_ALBUM';
export const CHANGE_ENTER_LOADING = 'CHANGE_ENTER_LOADING';

export interface Al {
  id: number
  name: string
  pic: number
  picUrl: string
  pic_str: string
}

export interface Ar{
  alias: string[]
  id: number
  name: string
}

export interface Subscriber {
  accountStatus: number
  authStatus: number
  authority: number
  avatarImgId: number
  avatarImgIdStr: string
  avatarImgId_str: string
  avatarUrl: string
  backgroundImgId: number
  backgroundImgIdStr: string
  backgroundUrl: string
  birthday: number
  city: number
  defaultAvatar: boolean
  description: string
  detailDescription: string
  djStatus: number
  followed: boolean
  gender: number
  mutual: boolean
  nickname: string
  province: number
  remarkName: string | null
  signature: string
  userId: number
  userType: number
  vipType: number
}

export interface Track {
  al: Al
  alia: string[]
  ar: Ar[]
  cd: string
  cf: string
  copyright: number
  cp: number
  djId: number
  dt: number
  fee: number
  ftype: number
  id: number
  mark: number
  mst: number
  mv: number
  name: string
  no: number
  originCoverType: number
  pop: number
  pst: number
  publishTime: number
  rt: string
  rtUrl: string | null
  rtUrls: string[]
  rtype: number
  rurl: string | null
  s_id: number
  st: number
  t: number
  v: number
}

export interface TrackId {
  id: number
  v: number
}

export interface Creator {
  accountStatus: number
  authStatus: number
  authority: number
  avatarImgId: number
  avatarImgIdStr: string
  avatarImgId_str: string
  avatarUrl: string
  backgroundImgId: number
  backgroundImgIdStr: string
  backgroundUrl: string
  birthday: number
  city: number
  defaultAvatar: boolean
  description: string
  detailDescription: string
  djStatus: number
  followed: boolean
  gender: number
  mutual: boolean
  nickname: string
  province: number
  remarkName: string | null
  signature: string
  userId: number
  userType: number
  vipType: number
}

export interface PlayList {
  updateTime: number
  userId: number
  adType: number
  backgroundCoverId: number
  backgroundCoverUrl: string | null
  cloudTrackCount: number
  commentCount: number
  commentThreadId: string
  coverImgId: number
  coverImgId_str: string
  coverImgUrl: string
  createTime: number
  creator: Creator
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
  shareCount: number
  specialType: number
  status: number
  subscribed: boolean
  subscribedCount: number
  subscribers: Subscriber[]
  tags: string[]
  titleImage: number
  titleImageUrl: string | null
  trackCount: number
  trackIds: TrackId[]
  trackNumberUpdateTime: number
  trackUpdateTime: number
  tracks: Track[]
}

export interface ReponseType extends AxiosResponse {
  playlist?: PlayList[]
}
 
export interface ChangeCurrentAlbum {
  type: typeof CHANGE_CURRENT_ALBUM
  data: PlayList[]
}

export interface ChangeEnterLoading {
  type: typeof CHANGE_ENTER_LOADING
  data: boolean
}
  
export type RankActionType = ChangeCurrentAlbum | ChangeEnterLoading