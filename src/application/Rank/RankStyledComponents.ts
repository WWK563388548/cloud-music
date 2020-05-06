import styled from 'styled-components';
import { Track } from '../../store/Rank/types';

interface ListProps {
  globalRank?: boolean
}

interface ListItemProps {
  tracks: Track[]
}

export const Container = styled.div`
  position: fixed;
  top: 90px;
  bottom: 0;
  width: 100%;
  .offical,.global {
    margin: 10px 5px;
    padding-top: 15px;
    font-weight: 700;
    font-size: 14px;
    color: #2E3030;
  }
`;

export const List = styled.ul<ListProps>`
  margin-top: 10px;
  padding: 0 5px;
  display: ${props => props.globalRank ? "flex": "" };
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #F2F3F4;
  &::after{
    content:"";
    display:block;
    width: 32vw;
  }
`
export const ListItem = styled.li<ListItemProps>`
  display: ${props => props.tracks.length ? "flex": ""};
  padding: 3px 0;
  border-bottom: 1px solid #E4E4E4;
  .img_wrapper {
    width:  ${props => props.tracks.length ? "27vw": "32vw"};
    height: ${props => props.tracks.length ? "27vw": "32vw"};
    border-radius: 3px;
    position: relative;
    .decorate {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient(hsla(0,0%,100%,0),hsla(0,0%,43%,.4));
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
    .update_frequecy {
      position: absolute;
      left: 7px;
      bottom: 7px;
      font-size: 10px;
      color: #F1F1F1;
    }
  }
`;

export const SongList = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px 10px;
  > li {
    font-size: 12px;
    color: grey;
  }
`;

export const EnterLoading = styled.div`
  position: fixed;
  left: 0; right: 0; top: 0; bottom: 0;
  width: 100px;
  height: 100px;
  margin: auto;
`;