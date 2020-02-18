// src/appliction/Recommend/index.tsx
import React from 'react';
import Slider from '../../components/slider';
import RecommendList from '../../components/list';

const Recommend = () => {

  // mock data
  const bannerList = [1,2,3,4].map (item => {
    return { 
      id: item,
      imageUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg" 
    }
  });

  const recommendList = [1,2,3,4,5,6,7,8,9,10].map (item => {
    return {
      id: item,
      picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
      playCount: 17171122,
      name: "李荣浩, 周杰伦, 苏打绿, 薛之谦"
    }
  });

  return (
    <div>
      <Slider bannerList={bannerList} />
      <RecommendList recommendList={recommendList} />
    </div>
  )
}

export default React.memo (Recommend);