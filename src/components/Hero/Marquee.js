import React, { Fragment } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import fluid from '../services/fluid';

const DIV = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -99;
  overflow: hidden;
  /* top: ${fluid.calc(-50, -170, 'Full', 'px')}; */
  /* opacity: .2; */
  display: flex;
  width: 100%;

  .marquee__row {
    --row-width: ${fluid.calc(1000, 2000, 'Full', 'px')};
    /* display: inline-block; */
    flex-shrink: 0;
    background-color: pink;
    width: var(--row-width);
    text-align: center;
    transform: translateX(calc(var(--row-width) * -1));
  }

  div:nth-child(2) {
    background-color: green;
  }

  p {
    
    margin: 0;
    white-space: nowrap;
    /* color: #D3D3D3; */
    color: white;
    font-family: 'Merienda One', cursive;
    font-size: ${fluid.calc(170, 350, 'Full', 'px')};
  }
`;

function Marquee(props) {
  const moveLeft = () => {
    const rows = document.querySelectorAll('.marquee__row');
    rows.forEach(row => {
      let rowWidth = row.getBoundingClientRect().width;
      let rowPosX = Number(getComputedStyle(row).getPropertyValue('--pos-x')) ? Number(getComputedStyle(row).getPropertyValue('--pos-x')) : -rowWidth;
      if (rowPosX < -2 * rowWidth) {
        rowPosX = -rowWidth + 1;
      };
      row.style.setProperty('transform', `translateX(${rowPosX - 1}px)`);
      row.style.setProperty('--pos-x', (rowPosX - 1));
    });
  };
  
  const moveRight = () => {
    const rows = document.querySelectorAll('marquee__row');
    rows.forEach(row => {
      let rowWidth = row.getBoundingClientRect().width;
      let rowPosX = Number(getComputedStyle(row).getPropertyValue('--pos-x')) ? Number(getComputedStyle(row).getPropertyValue('--pos-x')) : -rowWidth;
      if (rowPosX > rowWidth) {
        rowPosX = -rowWidth;
      };
      row.style.setProperty('transform', `translateX(${rowPosX + 1}px)`);
      row.style.setProperty('--pos-x', (rowPosX + 1));
    });  
  };

  let posY = 0;
  let speed = 25;
  let myInterval = setInterval(moveLeft, speed);

  const changeMarqueeDir = () => {
    console.log('heha');
    clearInterval(myInterval);
    if (document.documentElement.scrollTop > posY) {
      moveRight();
      moveRight();
      myInterval = setInterval(moveRight, speed);
    } else {
      moveLeft();
      moveLeft();
      myInterval = setInterval(moveLeft, speed);
    }
    posY = document.documentElement.scrollTop;  
  };

  window.addEventListener('scroll', changeMarqueeDir);
  // useEffect(() => {
    
  // }, []);
 return (
  <Fragment>
    <DIV className='marquee'>
      <div className='marquee__row'><p>HAO ZHEN</p></div>
      <div className='marquee__row'><p>HAO ZHEN</p></div>
      <div className='marquee__row'><p>HAO ZHEN</p></div>
    </DIV>
  </Fragment>
 );
}

export default Marquee;