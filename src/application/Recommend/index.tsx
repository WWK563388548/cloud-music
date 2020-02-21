// src/appliction/Recommend/index.tsx
import React, { useEffect } from 'react';
import styled from'styled-components';
import { forceCheck } from 'react-lazyload';
import { connect } from "react-redux";
import Slider from '../../components/slider';
import RecommendList from '../../components/list';
import Scroll from '../../components/scroll';
import Loading from '../../components/Loading';
import * as actionTypes from '../../store/Recommend/actionCreators';

export const Content = styled.div`
  position: fixed;
  top: 90px;
  bottom: 0;
  width: 100%;
`;

const Recommend = (props: any) => {

  const { 
    bannerList, 
    recommendList, 
    enterLoading,
    // actions
    getBannerDataDispatch, 
    getRecommendListDataDispatch 
  } = props;

  useEffect (() => {
    getBannerDataDispatch ();
    getRecommendListDataDispatch ();
  }, []);

  const bannerListJS = bannerList ? bannerList.toJS () : [];
  const recommendListJS = recommendList ? recommendList.toJS () :[];

  return (
    <Content>
      <Scroll className="list" onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerListJS} />
          <RecommendList recommendList={recommendListJS} />
        </div>
      </Scroll>
      { enterLoading && <Loading /> }
    </Content> 
  )
}

// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = (state: any) => ({
  // 不要在这里将数据 toJS
  // 不然每次 diff 比对 props 的时候都是不一样的引用，还是导致不必要的重渲染，属于滥用 immutable
  bannerList: state.getIn (['recommend', 'bannerList']),
  recommendList: state.getIn (['recommend', 'recommendList']),
  enterLoading: state.getIn (['recommend', 'enterLoading'])
});
// 映射 dispatch 到 props 上
const mapDispatchToProps = (dispatch: any) => {
  return {
    getBannerDataDispatch () {
      dispatch (actionTypes.getBannerList ());
    },
    getRecommendListDataDispatch () {
      dispatch (actionTypes.getRecommendList ());
    },
  }
};

export default connect (mapStateToProps, mapDispatchToProps)(React.memo (Recommend))