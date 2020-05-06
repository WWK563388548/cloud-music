// src/application/Album/index.js
import React from 'react';
import styled from'styled-components';


const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: #fff;
`;

function Album () {
  return (
    <Container>
      Album
    </Container>
  )
}

export default Album;