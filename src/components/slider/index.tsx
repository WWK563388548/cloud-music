//components/slider/index.js
import React, { useEffect, useState } from 'react';
import { SliderContainer } from './SliderStyledComponents';
import "swiper/css/swiper.css";
import Swiper from "swiper";

type SliderType = {
  id: number
  imageUrl: string
}

interface SliderProps {
    bannerList: SliderType[]
}

const Slider = ({ bannerList }: SliderProps) => {
  const [sliderSwiper, setSliderSwiper] = useState<null | object>(null);

  useEffect (() => {
    if (bannerList.length && !sliderSwiper){
        let sliderSwiper = new Swiper(".slider-container", {
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {el:'.swiper-pagination'},
        });
        setSliderSwiper(sliderSwiper);
    }
  }, [bannerList.length, sliderSwiper]);
  
  return (
    <SliderContainer>
      <div className="before" />
      <div className="slider-container">
        <div className="swiper-wrapper">
          {
            bannerList.map (slider => {
              return (
                <div className="swiper-slide" key={slider.id}>
                  <div className="slider-nav">
                    <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div> 
    </SliderContainer>
  );
}

export default React.memo (Slider);