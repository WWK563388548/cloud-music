// src/appliction/Home/index.tsx
import React from 'react';
import { renderRoutes } from "react-router-config";
import { NavLink } from 'react-router-dom'; // 利用 NavLink 组件进行路由跳转
import { Top, Tab, TabItem } from './HomeStyledComponents';

const Home = (props : any) => {
  const { route } = props;

  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe630;</span>
        <span className="title">CloudMusic</span>
        <span className="iconfont search">&#xe7b3;</span>
      </Top>
      <Tab>
        <NavLink to="/recommend" activeClassName="selected">
          <TabItem>
            <span > 推荐 </span>
          </TabItem>
        </NavLink>
        <NavLink to="/singers" activeClassName="selected">
          <TabItem>
            <span > 歌手 </span>
          </TabItem>
        </NavLink>
        <NavLink to="/rank" activeClassName="selected">
          <TabItem>
            <span > 排行榜 </span>
          </TabItem>
        </NavLink>
      </Tab>
      { renderRoutes (route.routes) }
    </div>
  )
}

export default React.memo (Home);