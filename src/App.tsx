import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// renderRoutes 读取路由配置转化为 Route 标签
import { renderRoutes } from 'react-router-config';
import { GlobalStyle } from './globalStyle';
import { IconStyle } from './assets/iconfont/iconfont';
import routes from './routes/index';
import store from './store/index'

const App  = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <GlobalStyle></GlobalStyle>
                <IconStyle></IconStyle>
                { renderRoutes (routes) }
            </HashRouter>
        </Provider>
    );
}

export default App;