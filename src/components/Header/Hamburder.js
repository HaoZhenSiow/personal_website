import React, { Fragment } from 'react';
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

  span:first-child {top: 10%;}
  &.hamburger--closed:hover span:first-child {top: 20%;}
  &.hamburger--opened span:first-child {
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    transition: 500ms;
  }
  &.hamburger--opened:hover span:first-child {
    transform: translate(-50%, -50%) rotate(135deg);
  }

  span:nth-child(2) {transition-duration: 0s;}
  &.hamburger--opened span:nth-child(2) {display: none;}

  span:last-child {top: 90%;}
  &.hamburger--closed:hover span:last-child {top: 80%;}
  &.hamburger--opened span:last-child {
    top: 50%;
    transform: translate(-50%, -50%) rotate(135deg);
    transition: 500ms;
  }
  &.hamburger--opened:hover span:last-child {
    transform: translate(-50%, -50%) rotate(225deg);
  }

  &.hamburger--opened span {
    background-color: var(--bg-color);
  }

  @media (min-width: 860px) {
    display: none;
  }
`;


function Hamburder(props) {
 return (
  <DIV className="hamburger hamburger--closed" onClick={props.openMenu}>
    <span></span>
    <span></span>
    <span></span>
  </DIV>
 );
}

export default Hamburder;