// src/appliction/Singers/index.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import HorizontalList from '../../components/horizontalList';
import Scroll from '../../components/scroll';
import { categoryTypes, alphaTypes } from '../../lib/singersMockData';
import {
  NavContainer,
  ListContainer, 
  List,
  ListItem,
} from './singersStyledComponents';

const Singers = () => {
  const [category, setCategory] = useState<string>('');
  const [alpha, setAlpha] = useState<string>('');

  const handleUpdateAlpha = (val: string) => {
    setAlpha (val);
  }

  const handleUpdateCatetory = (val: string) => {
    setCategory (val);
  }

  // mock data
  const singerList = [1, 2,3, 4,5,6,7,8,9,10,11,12].map (item => {
    return {
      tempId: item,
      picUrl: "https://p2.music.126.net/uTwOm8AEFFX_BYHvfvFcmQ==/109951164232057952.jpg",
      name: "Someone",
      accountId: 111,
    }
  }); 

  const renderSingerList = () => {
    return (
      <List>
        {
          singerList.map ((item, index) => {
            return (
              <ListItem key={item.tempId + " " + index}>
                <div className="img_wrapper">
                  <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="music"/>
                </div>
                <span className="name">{item.name}</span>
              </ListItem>
            )
          })
        }
      </List>
    )
  };

  return (
    <NavContainer>
      <HorizontalList 
        list={categoryTypes} 
        title={"分类 (默认热门):"}
        handleClick={(val) => handleUpdateCatetory(val)} 
        oldVal={category}
      />
      <HorizontalList 
        list={alphaTypes} 
        title={"首字母:"} 
        handleClick={val => handleUpdateAlpha(val)} 
        oldVal={alpha}
      />
      <ListContainer>
        <Scroll>
          { renderSingerList () }
        </Scroll>
      </ListContainer>
    </NavContainer>
  )
}

export default React.memo (Singers);