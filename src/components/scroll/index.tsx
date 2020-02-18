import React, { forwardRef, useState,useEffect, useRef, useImperativeHandle } from "react";
import BScroll from "better-scroll";
import styled from'styled-components';

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

interface  ScrollProps {
  direction?: string
  click?: boolean
  refresh?: boolean
  bounceTop?: boolean
  bounceBottom?: boolean
  children?: React.ReactNode
  className?: string
  pullUpLoading?: boolean
  pullDownLoading?: boolean
  // funcs
  pullUp?: any
  pullDown?: any
  onScroll?: any
}

const Scroll = forwardRef ((props: ScrollProps, ref) => {
  const [bScroll, setBScroll] = useState<BScroll | null>(null);
  const scrollContaninerRef = useRef<HTMLDivElement | null>(null);
  const { 
    direction, 
    click, 
    refresh,  
    bounceTop, 
    bounceBottom, 
    pullUp, 
    pullDown, 
    onScroll 
  } = props;

  useEffect (() => {
    const scrollContainer = scrollContaninerRef.current
    if(!scrollContainer) return
    const scroll = new BScroll (scrollContainer as HTMLDivElement, {
      scrollX: direction === "horizontal",
      scrollY: direction === "vertical",
      probeType: 3,
      click: click,
      bounce:{
        top: bounceTop,
        bottom: bounceBottom
      }
    });
    setBScroll (scroll);
    return () => {
      setBScroll (null);
    }
    //eslint-disable-next-line
  }, []);

  useEffect (() => {
    if (!bScroll || !onScroll) return;
    bScroll.on ('scroll', (scroll: any) => {
      onScroll (scroll);
    })
    return () => {
      bScroll.off ('scroll');
    }
  }, [onScroll, bScroll]);

  useEffect (() => {
    if (!bScroll || !pullUp) return;
    bScroll.on ('scrollEnd', () => {
      // 判断是否滑动到了底部
      if (bScroll.y <= bScroll.maxScrollY + 100){
        pullUp ();
      }
    });
    return () => {
      bScroll.off ('scrollEnd');
    }
  }, [pullUp, bScroll]);

  useEffect (() => {
    if (!bScroll || !pullDown) return;
    bScroll.on ('touchEnd', (pos: any) => {
      // 判断用户的下拉动作
      if (pos.y > 50) {
        pullDown ();
      }
    });
    return () => {
      bScroll.off ('touchEnd');
    }
  }, [pullDown, bScroll]);


  useEffect (() => {
    if (refresh && bScroll){
      bScroll.refresh ();
    }
  });

  useImperativeHandle (ref, () => ({
    refresh () {
      if (bScroll) {
        bScroll.refresh ();
        bScroll.scrollTo (0, 0);
      }
    },
    getBScroll () {
      if (bScroll) {
        return bScroll;
      }
    }
  }));


  return (
    <ScrollContainer ref={scrollContaninerRef}>
      {props.children}
    </ScrollContainer>
  );
})

export default Scroll;

Scroll.defaultProps = {
  direction: "vertical",
  click: true,
  refresh: true,
  onScroll:null,
  pullUpLoading: false,
  pullDownLoading: false,
  pullUp: null,
  pullDown: null,
  bounceTop: true,
  bounceBottom: true
};