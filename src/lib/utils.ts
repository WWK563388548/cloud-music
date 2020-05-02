// src/lib/utils.ts

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
