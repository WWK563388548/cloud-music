import React from 'react';
import styled from'styled-components';

const HeaderContainer = styled.div`
  position: fixed;
  padding: 5px 10px;
  padding-top: 0;
  height: 40px;
  width: 100%;
  z-index: 100;
  display: flex;
  line-height: 40px;
  color: #F1F1F1;
  .back {
    margin-right: 5px;
    font-size: 20px;
    width: 20px;
  }
  > h1 {
    font-size: 16px;
    font-weight: 700;
  }
`;

interface Props {
  handleClick: () => void
  title: string
}
// 处理函数组件拿不到 ref 的问题，所以用 forwardRef
const Header = React.forwardRef ((props: Props, ref: any) => {
  const { handleClick, title} = props;
  return (
    <HeaderContainer ref={ref}>
      <i className="iconfont back"  onClick={handleClick}>&#xe6a9;</i>
      <h1>{title}</h1>
    </HeaderContainer>
  )
})

Header.defaultProps = {
  handleClick: () => {},
  title: "标题",
};

export default React.memo (Header);