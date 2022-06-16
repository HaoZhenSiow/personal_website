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
  &.hamburger--close:hover span:first-child {top: 20%;}
  &.hamburger--open span:first-child {
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    transition: 500ms;
  }
  &.hamburger--open:hover span:first-child {
    transform: translate(-50%, -50%) rotate(135deg);
  }

  span:nth-child(2) {transition-duration: 0s;}
  &.hamburger--open span:nth-child(2) {display: none;}

  span:last-child {top: 90%;}
  &.hamburger--close:hover span:last-child {top: 80%;}
  &.hamburger--open span:last-child {
    top: 50%;
    transform: translate(-50%, -50%) rotate(135deg);
    transition: 500ms;
  }
  &.hamburger--open:hover span:last-child {
    transform: translate(-50%, -50%) rotate(225deg);
  }

  @media (min-width: 860px) {
    display: none;
  }
`;


function Hamburder(props) {
  function openMenu(event) {
    event.target.classList.toggle('hamburger--open');
    event.target.classList.toggle('hamburger--close');
  };
 return (
  <Fragment>
    <DIV className="hamburger hamburger--close" onClick={openMenu}>
      <span></span>
      <span></span>
      <span></span>
    </DIV>
  </Fragment>
 );
}

export default Hamburder;