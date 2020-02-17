import React from 'react';
import { GlobalStyle } from './globalStyle';
import { IconStyle } from './assets/iconfont/iconfont';
// renderRoutes 读取路由配置转化为 Route 标签
import { renderRoutes } from 'react-router-config';
import routes from './routes/index.js';
import { HashRouter } from 'react-router-dom';

const App  = () => {
    return (
        <HashRouter>
          <GlobalStyle></GlobalStyle>
          <IconStyle></IconStyle>
          { renderRoutes (routes) }
        </HashRouter>
    );
}

export default App;