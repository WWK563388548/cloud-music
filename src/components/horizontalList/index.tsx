import React, { useState, useRef, useEffect, memo } from 'react';
import styled from'styled-components';
import Scroll from '../scroll/index';

const List = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  overflow: hidden;
  > span:first-of-type {
      display: block;
      flex: 0 0 auto;
      padding: 5px 0;
      margin-right: 5px;
      color: grey;
      font-size: 14px;
  }
`;

const ListItem = styled.span`
  flex: 0 0 auto;
  font-size: 14px;
  padding: 5px 8px;
  border-radius: 10px;
  &.selected {
    color: #d44439;
    border: 1px solid #d44439;
    opacity: 0.8;
  }
`;

interface ListItem {
  key: string
  name: string
}

interface HorizontalListProps {
  list: ListItem[];
  oldVal: string
  title: string
  handleClick: (key: string ) => any
}

const HorizontalList = ( props: HorizontalListProps ) => {
  const Category = useRef<HTMLDivElement | null>(null);

  // 加入初始化内容宽度的逻辑
  useEffect (() => {
    let categoryDOM = Category.current;
    if(!categoryDOM) return
    let tagElems = categoryDOM.querySelectorAll ("span");
    let totalWidth = 0;
    Array.from (tagElems).forEach (ele => {
      totalWidth += ele.offsetWidth;
    });
    categoryDOM.style.width = `${totalWidth}px`;
  }, []);
  const { list, oldVal, title, handleClick } = props;
  return (
    <Scroll direction={"horizontal"}>
      <div ref={Category}>
        <List>
          <span>{title}</span>
          {
            list.map ((item) => {
              return (
                <ListItem 
                  key={item.key}
                  className={`${oldVal === item.key ? 'selected': ''}`} 
                  onClick={() => handleClick(item.key)}>
                  {item.name}
                </ListItem>
              )
            })
          }
        </List>
      </div>
    </Scroll>
  )
}

/* 首先考虑接受的参数
    @list: 为接受的列表数据
    @oldVal: 为当前的 item 值
    @title: 为列表左边的标题
    @handleClick(): 为点击不同的 item 执行的方法 
*/
HorizontalList.defaultProps = {
  list: [],
  oldVal: '',
  title: '',
  handleClick: null
};

export default memo (HorizontalList);