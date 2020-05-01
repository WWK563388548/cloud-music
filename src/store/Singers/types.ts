import { AxiosResponse } from 'axios';

export const CHANGE_SINGER_LIST = 'CHANGE_SINGER_LIST';
export const CHANGE_PAGE_COUNT = 'CHANGE_PAGE_COUNT';
export const CHANGE_ENTER_LOADING = 'CHANGE_ENTER_LOADING';
export const CHANGE_PULLUP_LOADING = 'CHANGE_PULLUP_LOADING';
export const CHANGE_PULLDOWN_LOADING = 'CHANGE_PULLDOWN_LOADING';


export interface Artist {
  img1v1Id: number
  topicPerson: number
  alias: string[]
  picId: number
  briefDesc: string
  musicSize: number
  albumSize: number
  followed: boolean
  img1v1Url: string
  trans: string
  picUrl: string
  name: string
  id: number
  accountId: number
  picId_str: string
  img1v1Id_str: string
}

export interface ReponseType extends AxiosResponse {
  artists?: Artist[]
}

export interface ChangeSingerList {
  type: typeof CHANGE_SINGER_LIST
  data: Artist[]
}

export interface ChangePageCount {
  type: typeof CHANGE_PAGE_COUNT
  data: number
}

export interface ChangeEnterLoading {
  type: typeof CHANGE_ENTER_LOADING
  data: boolean
}

export interface ChangePullUpLoading {
  type: typeof CHANGE_PULLUP_LOADING
  data: boolean
}

export interface ChangePullDownLoading {
  type: typeof CHANGE_PULLDOWN_LOADING
  data: boolean
}
  
export type SingerActionType = ChangeSingerList | ChangePageCount | ChangeEnterLoading | ChangePullUpLoading | ChangePullDownLoading