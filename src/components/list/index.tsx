import React from 'react';
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

interface RecommendListProps {
    recommendList: RecommendListItem[]
}

const RecommendList = ({ recommendList }: RecommendListProps ) => {
  return (
    <ListWrapper>
      <h1 className="title"> 推荐歌单 </h1>
      <List>
        {
          recommendList.map ((item, index) => {
            return (
              <ListItem key={item.id + index}>
                <div className="img_wrapper">
                  <div className="decorate"></div>
                    {/* 添加 param 可以减小请求的图片资源大小 */}
                    <img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music"/>
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
 
export default React.memo (RecommendList)