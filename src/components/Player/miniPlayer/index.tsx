//miniPlayer/index.js
import React from 'react';
import { getName } from '../../../lib/utils';
import { MiniPlayerContainer } from './miniPlayerStyledComponents';

interface Song {
  al: { picUrl: string },
  name: string,
  ar: object[]
}

interface Props {
  song: Song
}

const MiniPlayer = ({ song }: Props) => {
  return (
      <MiniPlayerContainer>
        <div className="icon">
          <div className="imgWrapper">
            <img className="play" src={song.al.picUrl} width="40" height="40" alt="img"/>
          </div>
        </div>
        <div className="text">
          <h2 className="name">{song.name}</h2>
          <p className="desc">{getName(song.ar)}</p>
        </div>
        <div className="control">
          <i className="iconfont">&#xe6b1;</i>
        </div>
        <div className="control">
          <i className="iconfont">&#xe70f;</i>
        </div>
      </MiniPlayerContainer>
  )
}

export default React.memo (MiniPlayer);