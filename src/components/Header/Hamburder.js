import React, { forwardRef } from 'react';
import styled from 'styled-components';

const DIV = styled.div`
  position: relative;
  display: inline-block;
  width: 36px;
  height: 28px;
  cursor: pointer;

  span {
    background: var(--yellow);
    display: inline-block;
    width: 100%;
    height: 20%;
    border-radius: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition-duration: 500ms;
    pointer-events: none;
  }

  &.hamburger--open span {
    background-color: var(--bg-color);
  }

  #bar1 {top: 10%;}
  &:hover #bar1 {top: 20%;}
  &.hamburger--open #bar1 {
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    transition: 500ms;
  }
  &.hamburger--open:hover #bar1 {
    transform: translate(-50%, -50%) rotate(135deg);
  }

  #bar2 {transition-duration: 0s;}
  &.hamburger--open #bar2 {display: none;}

  #bar3 {top: 90%;}
  &:hover #bar3 {top: 80%;}
  &.hamburger--open #bar3 {
    top: 50%;
    transform: translate(-50%, -50%) rotate(135deg);
    transition: 500ms;
  }
  &.hamburger--open:hover #bar3 {
    transform: translate(-50%, -50%) rotate(225deg);
  }

  @media (min-width: 860px) {
    display: none;
  }
`;


function Hamburder(props, ref) {
 return (
  <DIV className="hamburger" onClick={props.openMenu} ref={ref}>
    <span id='bar1'></span>
    <span id='bar2'></span>
    <span id='bar3'></span>
  </DIV>
 );
}

export default forwardRef(Hamburder);