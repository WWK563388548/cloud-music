// src/lib/utils.ts
import { RankTypes } from './singersMockData';
import { RankList } from '../store/Rank/types';

interface RankTypes {
  [key: string]: string
}

// 显示播放数
export const getCount = (count: number): string | boolean | number => {
    if (count < 0) return false;
    if (count < 10000) {
      return count;
    } else if (Math.floor (count / 10000) < 10000) {
      return Math.floor (count/1000)/10 + "万";
    } else  {
      return Math.floor (count / 10000000)/ 10 + "亿";
    }
  }

// debounce func
export const debounce = (func: any, delay: number) => {
  let timer: any;
  // @ts-ignore
  return function (...args) {
    if (timer) {
      clearTimeout (timer);
    }
    timer = setTimeout (() => {
      // @ts-ignore
      func.apply (this, args);
      clearTimeout (timer);
    }, delay);
  }
}

// 处理数据，找出第一个没有歌名的排行榜的索引
export const filterIndex = (rankList: RankList[]) => {
  for (let i = 0; i < rankList.length - 1; i++) {
    if (rankList[i].tracks.length && !rankList[i + 1].tracks.length) {
      return i + 1;
    }
  }
};

// 找出排行榜的编号
export const filterIdx = (name: string) => {
  for (var key in RankTypes) {
    if ((RankTypes as RankTypes)[key] === name) return key;
  }
  return null;
};

// 处理歌手列表拼接歌手名字
// TODO: Need to update type
export const getName = (list: any) => {
  let str = '';
  list.map ((item: any, index: number) => {
    str += index === 0 ? item.name : '/' + item.name;
    return item;
  });
  return str;
};

// 判断一个对象是否为空
export const isEmptyObject = (obj: object) => !obj || Object.keys(obj).length === 0;
