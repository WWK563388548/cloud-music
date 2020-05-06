// src/application/Album/index.js
import React, { useState } from 'react';
import styled from'styled-components';
import { CSSTransition } from 'react-transition-group';
import Header from '../../components/header';
import Scroll from '../../components/scroll';
import {
  TopDesc,
  Menu,
  SongList,
  SongItem,
} from './albumStyledComponents';
import { getCount, getName } from '../../lib/utils';
import { currentAlbum } from '../../lib/singersMockData';


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
        <Scroll bounceTop={false}>
          <div>
            <TopDesc background={currentAlbum.coverImgUrl}>
              <div className="background">
                <div className="filter"></div>
              </div>
              <div className="img_wrapper">
                <div className="decorate"></div>
                <img src={currentAlbum.coverImgUrl} alt=""/>
                <div className="play_count">
                  <i className="iconfont play">&#xe885;</i>
                  <span className="count">{Math.floor(currentAlbum.subscribedCount / 1000) / 10} 万 </span>
                </div>
              </div>
              <div className="desc_wrapper">
                <div className="title">{currentAlbum.name}</div>
                <div className="person">
                  <div className="avatar">
                    <img src={currentAlbum.creator.avatarUrl} alt=""/>
                  </div>
                  <div className="name">{currentAlbum.creator.nickname}</div>
                </div>
              </div>
            </TopDesc>
            {/* TODO: Need to update iconfont */}
            <Menu>
              <div>
                <i className="iconfont">&#xe6ad;</i>
                评论
              </div>
              <div>
                <i className="iconfont">&#xe86f;</i>
                点赞
              </div>
              <div>
                <i className="iconfont">&#xe62d;</i>
                收藏
              </div>
              <div>
                <i className="iconfont">&#xe606;</i>
                更多
              </div>
            </Menu>
            <SongList>
              <div className="first_line">
                <div className="play_all">
                  <i className="iconfont">&#xe6e3;</i>
                  <span > 播放全部 <span className="sum">(共 {currentAlbum.tracks.length} 首)</span></span>
                </div>
                <div className="add_list">
                  <i className="iconfont">&#xe62d;</i>
                  <span > 收藏 ({getCount(currentAlbum.subscribedCount)})</span>
                </div>
              </div>
              <SongItem>
                {
                  currentAlbum.tracks.map ((item, index) => {
                    return (
                      <li key={index}>
                        <span className="index">{index + 1}</span>
                        <div className="info">
                          <span>{item.name}</span>
                          <span>
                            { getName(item.ar) } - { item.al.name }
                          </span>
                        </div>
                      </li>
                    )
                  })
                }
              </SongItem>
            </SongList>
          </div>  
        </Scroll>
      </Container>
    </CSSTransition>
  )
}

export default React.memo (Album);