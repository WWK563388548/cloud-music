// src/application/Album/index.js
import React, { useState } from 'react';
import styled from'styled-components';
import { CSSTransition } from 'react-transition-group';
import Header from '../../components/header';


const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: #fff;
  transform-origin: right bottom;
  &.fly-enter, &.fly-appear{
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
  &.fly-enter-active, &.fly-appear-active{
    transition: transform .3s;
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit{
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit-active{
    transition: transform .3s;
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
`;

const Album = (props: any) => {
  const [showStatus, setShowStatus] = useState(true);

  const handleBack = () => {
    // 不直接在 handleBack 中跳转路由
    // 先让页面切出动画执行一次，然后在动画执行完的瞬间跳转路由
    // 因为如果路由变化, 当前的组件会被立即卸载, 相关的动画当然也就不复存在了
    setShowStatus (false);
  };

  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fly"
      appear={true}
      unmountOnExit
      onExited={props.history.goBack} // 先让页面切出动画执行一次，然后在动画执行完的瞬间跳转路由
    >
      <Container>
        <Header title={'返回'} handleClick={handleBack} />
      </Container>
    </CSSTransition>
  )
}

export default React.memo (Album);