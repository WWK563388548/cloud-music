// src/appliction/Singers/index.tsx
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { forceCheck } from 'react-lazyload';
import HorizontalList from '../../components/horizontalList';
import Scroll from '../../components/scroll';
import { categoryTypes, alphaTypes } from '../../lib/singersMockData';
import {
  NavContainer,
  ListContainer, 
  List,
  ListItem,
} from './singersStyledComponents';
import { 
  getSingerList, 
  getRecommendSingerList, 
  changeEnterLoading, 
  changePageCount, 
  getMoreSingerList, 
  changePullUpLoading, 
  changePullDownLoading, 
  getMoreRecommendSingerList 
} from '../../store/Singers/actionCreators';

interface SingerListItem {
  accountId: number
  albumSize: number
  alias: string[]
  briefDesc: string
  followed: boolean
  id: number
  img1v1Id: number
  img1v1Id_str: string
  img1v1Url: string
  musicSize: number
  name: string
  picId: number
  picId_str: string
  picUrl: string
  topicPerson: number
  trans: string
}

const Singers = (props: any) => {
  const [category, setCategory] = useState<string>('');
  const [alpha, setAlpha] = useState<string>('');
  const {
    // states
    singerList,
    pullUpLoading,
    pullDownLoading,
    pageCount,
    // actions
    getRecommendSingerListDispatch,
    updateDispatch,
    pullUpRefreshDispatch,
    pullDownRefreshDispatch,
  } = props;
  console.log('singers props', props);
  useEffect(() => {
    getRecommendSingerListDispatch();
  }, []);

  const handleUpdateAlpha = (val: string) => {
    setAlpha (val);
    updateDispatch(category, val);
  }

  const handleUpdateCatetory = (val: string) => {
    setCategory (val);
    updateDispatch(val, alpha);
  }

  const handlePullUp = () => {
    pullUpRefreshDispatch(category, alpha, category === '', pageCount);
  };

  const handlePullDown = () => {
    pullDownRefreshDispatch(category, alpha);
  };

  const renderSingerList = () => {
    const list: Array<SingerListItem> = singerList ? singerList.toJS(): [];

    return (
      <List>
        {
          list.map((item: SingerListItem, index: number) => {
            return (
              <ListItem key={item.accountId+""+index}>
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
        <Scroll
          pullUp={handlePullUp}
          pullDown = {handlePullDown}
          pullUpLoading = {pullUpLoading}
          pullDownLoading = {pullDownLoading}
          onScroll={forceCheck}
        >
          { renderSingerList () }
        </Scroll>
      </ListContainer>
    </NavContainer>
  )
}

const mapStateToProps = (state: any) => {
  console.log('Singer list state', state);
  return ({
    singerList: state.getIn(['singers', 'singerList']),
    enterLoading: state.getIn(['singers', 'enterLoading']),
    pullUpLoading: state.getIn(['singers', 'pullUpLoading']),
    pullDownLoading: state.getIn(['singers', 'pullDownLoading']),
    pageCount: state.getIn(['singers', 'pageCount'])
  })
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getRecommendSingerListDispatch(){
      dispatch(getRecommendSingerList());
    },
    updateDispatch(category: string, alpha: string){
      dispatch(changePageCount(0));
      dispatch(changeEnterLoading(true));
      dispatch(getSingerList(category, alpha));
    },
    pullUpRefreshDispatch(category: string, alpha: string, recommend: boolean, count: number) {
      dispatch(changePullUpLoading(true));
      dispatch(changePageCount(count+1));
      if(recommend){
        dispatch(getMoreRecommendSingerList());
      } else {
        dispatch(getMoreSingerList(category, alpha));
      }
    },
    pullDownRefreshDispatch(category: string, alpha: string) {
      dispatch(changePullDownLoading(true));
      dispatch(changePageCount(0));
      if(category === '' && alpha === ''){
        dispatch(getRecommendSingerList());
      } else {
        dispatch(getSingerList(category, alpha));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Singers));