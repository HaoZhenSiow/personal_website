import React, { forwardRef } from 'react';
import styled from 'styled-components';
import resume from '../../assets/siowhaozhen-resume.pdf';

const HamburgerMenuStyle = styled.div`
  background-color: var(--yellow);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 99;
  display: none;
  place-content: center;

  nav {
    list-style: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 40vh;
    
    li a {
      color: var(--bg-color);
      font-size: var(--header-logo-font-size);
      font-weight: 700;
      text-transform: uppercase;
    }
  }

  &.HamburgerMenu--open {
    display: grid;
  }

  @media (min-width: 860px) {
    &.HamburgerMenu--open {
      display: none;
    }
  }

`;

const HamburgerMenu = forwardRef((props, ref) => {
  return (
    <HamburgerMenuStyle ref={ref}>
      <nav>
          <li><a href={resume} rel="noopener noreferrer" target="_blank"><span data-hover='resume'>resume</span></a></li>
          <li><a href='#work' onClick={props.openMenu}><span data-hover='work'>work</span></a></li>
          <li><a href='https://github.com/HaoZhenSiow' target='_blank' rel='noreferrer'><span data-hover='github'>github</span></a></li>
          <li><a href='https://www.linkedin.com/in/siowhaozhen/' target='_blank' rel='noreferrer'><span data-hover='linkedin'>linkedin</span></a></li>
          <li><a href='#codepen' onClick={props.openMenu}><span data-hover='codepen'>codepen</span></a></li>
        </nav>
    </HamburgerMenuStyle>
  );
});

export default HamburgerMenu;