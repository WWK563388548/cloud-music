import {createGlobalStyle} from'styled-components';

export const IconStyle = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('iconfont.eot?t=1592205650756'); /* IE9 */
    src: url('iconfont.eot?t=1592205650756#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('iconfont.woff?t=1592205650756') format('woff'),
    url('iconfont.ttf?t=1592205650756') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('iconfont.svg?t=1592205650756#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-down:before {
    content: "\e649";
  }

  .icon-loop:before {
    content: "\e690";
  }

  .icon-play-list-fill:before {
    content: "\e70f";
  }

  .icon-Playerpause:before {
    content: "\e6b1";
  }

  .icon-player-pause-circle:before {
    content: "\e614";
  }

  .icon-player-skip-back:before {
    content: "\e615";
  }

  .icon-player-skip-forward:before {
    content: "\e616";
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