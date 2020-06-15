import React from "react";
import {  getName } from "../../../lib/utils";
import {
  NormalPlayerContainer,
  Top,
  Middle,
  Bottom,
  Operators,
  CDWrapper,
} from "./normalPlayerStyledComponents";

interface Song {
  al: { picUrl: string },
  name: string,
  ar: object[]
}

interface Props {
  song: Song
}

const NormalPlayer = ({ song }: Props) => {
  return (
    <NormalPlayerContainer>
      <div className="background">
        <img
          src={song.al.picUrl + "?param=300x300"}
          width="100%"
          height="100%"
          alt="歌曲图片"
        />
      </div>
      <div className="background layer"></div>
      <Top className="top">
        <div className="back">
          <i className="iconfont icon-back">&#xe649;</i>
        </div>
        <h1 className="title">{song.name}</h1>
        <h1 className="subtitle">{getName(song.ar)}</h1>
      </Top>
      <Middle>
        <CDWrapper>
          <div className="cd">
            <img
              className="image play"
              src={song.al.picUrl + "?param=400x400"}
              alt="The image of song"
            />
          </div>
        </CDWrapper>
      </Middle>
      <Bottom className="bottom">
        <Operators>
          <div className="icon i-left" >
            <i className="iconfont">&#xe690;</i>
          </div>
          <div className="icon i-left">
            <i className="iconfont">&#xe615;</i>
          </div>
          <div className="icon i-center">
            <i className="iconfont">&#xe614;</i>
          </div>
          <div className="icon i-right">
            <i className="iconfont">&#xe616;</i>
          </div>
          <div className="icon i-right">
            <i className="iconfont">&#xe70f;</i>
          </div>
        </Operators>
      </Bottom>
    </NormalPlayerContainer>
  );
}

export default React.memo (NormalPlayer);