// src/appliction/Rank/index.tsx
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRankList } from '../../store/Rank/actionCreators'
import Loading from '../../components/Loading';
import {
  List, 
  ListItem,
  SongList,
  Container,
  EnterLoading,
} from './RankStyledComponents';
import Scroll from '../../components/scroll';
import { filterIndex, filterIdx } from '../../lib/utils';
import { renderRoutes } from 'react-router-config';
import { Track, RankList } from '../../store/Rank/types';

const Rank = (props: any) => {
  const { rankList, loading, getRankListDataDispatch } = props;

  let list = rankList ? rankList.toJS() : [];

  useEffect(() => {
    if(!list.length){
      getRankListDataDispatch();
    }
    // eslint-disable-next-line
  }, []);

  let globalStartIndex = filterIndex(list);
  let officialList = list.slice(0, globalStartIndex);
  let globalList = list.slice(globalStartIndex);

  const enterDetail = (name: string) => {
    const idx = filterIdx(name);
    if(idx === null) {
      alert("暂无相关数据");
      return;
    } 
  }
  const renderSongList = (list: Track[]) => {
    return list.length ? (
      <SongList>
        {
          list.map((item: Track, index: number) => {
            return <li key={index}>{index+1}. {item.first} - {item.second}</li>
          })
        }
      </SongList>
    ) : null;
  }
  const renderRankList = (list: RankList[], global: boolean) => {
    return (
      <List globalRank={global}>
       {
        list.map((item: RankList) => {
          return (
            <ListItem key={item.coverImgId} tracks={item.tracks} onClick={() => enterDetail(item.name)}>
              <div className="img_wrapper">
                <img src={item.coverImgUrl} alt=""/>
                <div className="decorate"></div>
                <span className="update_frequecy">{item.updateFrequency}</span>
              </div>
              { renderSongList(item.tracks)  }
            </ListItem>
          )
       })
      } 
      </List>
    )
  }

  let displayStyle = loading ? {"display":"none"}:  {"display": ""};
  return (
    <Container>
      <Scroll>
        <div>
          <h1 className="offical" style={displayStyle}>官方榜</h1>
            { renderRankList(officialList, false) }
          <h1 className="global" style={displayStyle}>全球榜</h1>
            { renderRankList(globalList, true) }
          { loading && (
            <EnterLoading>
              <Loading />
            </EnterLoading>
          )}
        </div>
      </Scroll> 
      {renderRoutes(props.route.routes)}
    </Container>
    );
}

// 映射Redux全局的state到组件的props上
const mapStateToProps = (state: any) => ({
  rankList: state.getIn(['rank', 'rankList']),
  loading: state.getIn(['rank', 'loading']),
});
// 映射dispatch到props上
const mapDispatchToProps = (dispatch: any) => {
  return {
    getRankListDataDispatch() {
      dispatch(getRankList());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Rank));