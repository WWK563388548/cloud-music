import React from 'react';
import { withRouter } from 'react-router-dom';
import LazyLoad from "react-lazyload";
import { 
  ListWrapper,
  ListItem,
  List
} from './ListStyledComponents';
import { getCount } from "../../lib/utils";

interface RecommendListItem {
    id: number,
    picUrl: string,
    playCount: number,
    name: string
}

const RecommendList = (props: any) => {

  const enterDetail = (id: number) => {
    props.history.push(`/recommend/${id}`);
  }

  return (
    <ListWrapper>
      <h1 className="title"> 推荐歌单 </h1>
      <List>
        {
          props.recommendList.map ((item: RecommendListItem, index: number) => {
            return (
              <ListItem key={item.id + index} onClick={() => enterDetail (item.id)}>
                <div className="img_wrapper">
                  <div className="decorate"></div>
                    {/* 添加 param 可以减小请求的图片资源大小 */}
                    <LazyLoad placeholder={<img width="100%" height="100%" src={require ('../../assets/music_placeholder.png')} alt="music"/>}>
                      <img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music"/>
                    </LazyLoad>
                  <div className="play_count">
                    <i className="iconfont play">&#xe6f3;</i>
                    <span className="count">
                        {getCount (item.playCount)}
                    </span>
                  </div>
                </div>
                <div className="desc">{item.name}</div>
              </ListItem>
            )
          })
        }
      </List>
    </ListWrapper>
  );
  }
 
export default React.memo (withRouter(RecommendList));