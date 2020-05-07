import {createGlobalStyle} from'styled-components';

export const IconStyle = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('iconfont.eot?t=1588850010418'); /* IE9 */
    src: url('iconfont.eot?t=1588850010418#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('iconfont.woff?t=1588850010418') format('woff'),
    url('iconfont.ttf?t=1588850010418') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('iconfont.svg?t=1588850010418#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-heart:before {
    content: "\e6b3";
  }

  .icon-add-new:before {
    content: "\e60a";
  }

  .icon-gengduo:before {
    content: "\e6f4";
  }

  .icon-bofang:before {
    content: "\e634";
  }

  .icon-pinglun:before {
    content: "\e647";
  }

  .icon-play:before {
    content: "\e65e";
  }

  .icon-back:before {
    content: "\e6a9";
  }

  .icon-shoucangfill:before {
    content: "\e627";
  }

  .icon-headphone:before {
    content: "\e6f3";
  }

  .icon-menu:before {
    content: "\e630";
  }

  .icon-search:before {
    content: "\e7b3";
  }
`