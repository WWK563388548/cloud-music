// src/application/Album/index.js
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from'styled-components';
import { CSSTransition } from 'react-transition-group';
import Header from '../../components/header';
import Scroll from '../../components/scroll';
import Loading from '../../components/Loading';
import {
  TopDesc,
  Menu,
  SongList,
  SongItem,
} from './albumStyledComponents';
import { getCount, getName, isEmptyObject } from '../../lib/utils';
import { changeEnterLoading, getAlbumList } from '../../store/Album/actionCreators';
import { Track } from '../../store/Album/types';


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
  // 从路由中拿到歌单的 id
  const id = props.match.params.id;
  const { currentAlbum, enterLoading, getAlbumDataDispatch } = props;

  useEffect (() => {
    getAlbumDataDispatch (id);
  }, [getAlbumDataDispatch, id]);

  // 同时将 mock 数据的代码删除
  const albumData = currentAlbum.toJS ();

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
        { !isEmptyObject(albumData) && (
          <Scroll bounceTop={false}>
            <div>
              <TopDesc background={albumData.coverImgUrl}>
                <div className="background">
                  <div className="filter"></div>
                </div>
                <div className="img_wrapper">
                  <div className="decorate"></div>
                  <img src={albumData.coverImgUrl} alt=""/>
                  <div className="play_count">
                    <i className="iconfont play">&#xe634;</i>
                    <span className="count">{Math.floor(albumData.subscribedCount / 1000) / 10} 万 </span>
                  </div>
                </div>
                <div className="desc_wrapper">
                  <div className="title">{albumData.name}</div>
                  <div className="person">
                    <div className="avatar">
                      <img src={albumData.creator.avatarUrl} alt=""/>
                    </div>
                    <div className="name">{albumData.creator.nickname}</div>
                  </div>
                </div>
              </TopDesc>
              <Menu>
                <div>
                  <i className="iconfont">&#xe647;</i>
                  评论
                </div>
                <div>
                  <i className="iconfont">&#xe6b3;</i>
                  点赞
                </div>
                <div>
                  <i className="iconfont">&#xe627;</i>
                  收藏
                </div>
                <div>
                  <i className="iconfont">&#xe6f4;</i>
                  更多
                </div>
              </Menu>
              <SongList>
                <div className="first_line">
                  <div className="play_all">
                    <i className="iconfont">&#xe65e;</i>
                    <span > 播放全部 <span className="sum">(共 {albumData.tracks.length} 首)</span></span>
                  </div>
                  <div className="add_list">
                    <i className="iconfont">&#xe60a;</i>
                    <span > 收藏 ({getCount(albumData.subscribedCount)})</span>
                  </div>
                </div>
                <SongItem>
                  {
                    albumData.tracks.map((item: Track, index: number) => {
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
        )}
        { enterLoading && <Loading show={enterLoading} /> }
      </Container>
    </CSSTransition>
  )
}

const mapStateToProps = (state: any) => ({
  currentAlbum: state.getIn (['album', 'currentAlbum']),
  enterLoading: state.getIn (['album', 'enterLoading']),
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    getAlbumDataDispatch(id: number) {
      dispatch(changeEnterLoading(true));
      dispatch(getAlbumList(id));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo (Album));