// src/appliction/Singers/index.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import HorizontalList from '../../components/horizontalList';
import { categoryTypes, alphaTypes } from '../../lib/singersMockData';

const NavContainer  = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 95px;
  width: 100%;
  padding: 5px;
  overflow: hidden;
  background-color: #D3D3D3;
`;

const Singers = () => {
  const [category, setCategory] = useState<string>('');
  const [alpha, setAlpha] = useState<string>('');

  const handleUpdateAlpha = (val: string) => {
    setAlpha (val);
  }

  const handleUpdateCatetory = (val: string) => {
    setCategory (val);
  }
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
    </NavContainer>
  )
}

export default React.memo (Singers);