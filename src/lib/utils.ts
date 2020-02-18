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