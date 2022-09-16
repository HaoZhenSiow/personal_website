import React, { Fragment, useRef, useEffect } from 'react';
import styled from 'styled-components';

const DIV = styled.div`
  width: 100vw;
  display: flex;
  overflow-x: hidden;
  --pos-x: 0;

  .marquee__row {
    --pos-x: 0;
    --translateX: calc(var(--pos-x) * 1px);
    flex-shrink: 0;
    min-width: 100vw;
    display: flex;
    justify-content: space-around;
    transform: translateX(var(--translateX));
  }
`;

function Marquee(props) { 

  const marqueeRef = useRef();
  const marqueeRow1Ref = useRef();
  const marqueeRow2Ref = useRef();
  const marqueeRow3Ref = useRef();
  const cloneNum = Number(props.clone) ? Number(props.clone) : 1;
  let marqueeItems = [];
  for (let i = 0; i < cloneNum; i++) {
    marqueeItems.push(props.children);
  }
  
  useEffect(() => {
    const marqueeMove = (direction) => {
      [marqueeRow1Ref.current,
       marqueeRow2Ref.current, 
       marqueeRow3Ref.current].forEach(row => {
        let rowWidth = row.getBoundingClientRect().width;
        let currentX = Number(getComputedStyle(row).getPropertyValue('--pos-x'));
        let newX = 0;
        switch (direction) {
          case 'right':
            newX = currentX ? (currentX + 1) : -rowWidth;
            (newX > 0) && (newX = -rowWidth);
            break;
          default:
            newX = currentX ? (currentX - 1) : -rowWidth;
            (newX < (-2 * rowWidth)) && (newX = -rowWidth);
        }
        row.style.setProperty('--pos-x', newX);
      });
    };

    const changeDir = () => {
      clearInterval(marqueeInterval);
      let scrollTop = document.documentElement.scrollTop;
      let opposite = (props.dir === 'right') ? 'left' : 'right';
      direction = (scrollTop > posY) ? props.dir : opposite;
      marqueeMove(direction);
      marqueeMove(direction);
      marqueeInterval = setInterval(marqueeMove, speed, direction);
      posY = scrollTop;
    };

    let direction = props.dir;
    let posY = 0;
    const speed = Number(props.speed) ? Number(props.speed) : 25;
    let marqueeInterval = setInterval(marqueeMove, speed, direction);
    if (props.alternate) {
      window.addEventListener('scroll', changeDir);
    }
    return () => {
      clearInterval(marqueeInterval);
      window.removeEventListener('scroll', changeDir);
    };

  }, [props]);


  return (
  <Fragment>
    <DIV className={`marquee marquee--${props.className}`} ref={marqueeRef}>
      <div className={`marquee__row marquee__row--${props.className}`} ref={marqueeRow1Ref}>
        {marqueeItems}
      </div>
      <div className={`marquee__row marquee__row--${props.className}`} ref={marqueeRow2Ref}>
        {marqueeItems}
      </div>
      <div className={`marquee__row marquee__row--${props.className}`} ref={marqueeRow3Ref}>
        {marqueeItems}
      </div>
    </DIV>
  </Fragment>
  );
}

export default Marquee;