import styled from'styled-components';

interface TopDesc {
  background?: string
}

interface SongList {
  showBackground?: boolean
}

export const TopDesc = styled.div<TopDesc>`
  background-size: 100%;
  padding: 5px 20px;
  padding-bottom: 50px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 275px;
  position: relative;
  .background {
    z-index: -1;
    background: url(${props => props.background}) no-repeat;
    background-position: 0 0;
    background-size: 100% 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur (20px);
    .filter {
      position: absolute;
      z-index: 10;
      top: 0; left: 0;
      width: 100%;
      height: 100%;
      background: rgba (7, 17, 27, 0.2);
    }
  }
  .img_wrapper {
    width: 120px;
    height: 120px;
    position: relative;         
    .decorate {
      position: absolute;
      top: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient (hsla (0,0%,43%,.4),hsla (0,0%,100%,0));
    }
    .play_count {
      position: absolute;
      right: 2px;
      top: 2px;
      font-size: 12px;
      line-height: 15px;
      color: #F1F1F1;
      .play {
        vertical-align: top;
      }
    }
    img {
      width: 120px;
      height: 120px;
      border-radius:3px;
    }
  }
  .desc_wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 120px;
    padding: 0 10px;
    .title {
      max-height: 70px;
      color: #F1F1F1;
      font-weight: 700;
      line-height: 1.5;
      font-size: 16px;
    }
    .person {
      display: flex;
      .avatar {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .name {
        line-height: 20px;
        font-size: 14px;
        color: #BBA8A8;
      }
    }
  }
`;

export const Menu = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 30px 20px 30px;
  margin: -100px 0 0 0;
  > div {
    display: flex;
    flex-direction: column;
    line-height: 20px;
    text-align: center;
    font-size: 12px;
    color: #F1F1F1;
    z-index:1000;
    font-weight: 500;
    .iconfont {
      font-size: 20px;
    }
  }
`;

export const SongList = styled.div<SongList>`
  border-radius: 10px;
  opacity: 0.98;
  ${props => props.showBackground ? 'background: #FFF': ''}
  .first_line {
    box-sizing: border-box;
    padding: 10px 0;
    margin-left: 10px;
    position: relative;
    justify-content: space-between;
    border-bottom: 1px solid #E4E4E4;
    .play_all {
      display: inline-block;
      line-height: 24px;
      color: #2E3030;
      .iconfont {
        font-size: 24px;
        margin-right: 10px;
        vertical-align: top;
      }
      .sum {
        font-size: 12px;
        color: #BBA8A8;
      }
      >span {
        vertical-align: top;
      }
    }
    .add_list, .isCollected {
      display: flex;
      align-items: center;
      position: absolute;
      right: 0; top :0; bottom: 0;
      width: 130px;
      line-height: 34px;
      background: #D44439;
      color: #F1F1F1;
      font-size: 0;
      border-radius: 3px;
      vertical-align: top;
      .iconfont {
        vertical-align: top;
        font-size: 10px;
        margin: 0 5px 0 10px;
      }
      span {
        font-size: 14px;
        line-height: 34px;
      }
    }
    .isCollected {
      display: flex;
      background: #F2F3F4;
      color: #2E3030;
    }
}
`;
export const SongItem = styled.ul`
  > li {
    display: flex;
    height: 60px;
    align-items: center;  
    .index {
      flex-basis: 60px;
      width: 60px;
      height: 60px;
      line-height: 60px;
      text-align: center;
    }
    .info {
      box-sizing: border-box;
      flex: 1;
      display: flex;
      height: 100%;
      padding: 5px 0;
      flex-direction: column;
      justify-content: space-around;
      border-bottom: 1px solid #E4E4E4;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      > span {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      > span:first-child {
        color: #2E3030;
      }
      > span:last-child {
        font-size: 12px;
        color: #BBA8A8;
      }
    }
  }
`;