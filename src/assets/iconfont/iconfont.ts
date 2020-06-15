import {createGlobalStyle} from'styled-components';

export const IconStyle = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('iconfont.eot?t=1592203163619'); /* IE9 */
    src: url('iconfont.eot?t=1592203163619#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('iconfont.woff?t=1592203163619') format('woff'),
    url('iconfont.ttf?t=1592203163619') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('iconfont.svg?t=1592203163619#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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