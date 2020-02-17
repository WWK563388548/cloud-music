import React from 'react';
import { GlobalStyle } from './globalStyle';
import { IconStyle } from './assets/iconfont/iconfont';

const App  = () => {
    return (
        <div className="App">
          <GlobalStyle></GlobalStyle>
          <IconStyle></IconStyle>
          <i className="iconfont">&#xe7b3;</i>
        </div>
    );
}

export default App;