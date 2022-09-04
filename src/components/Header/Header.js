import React, { Fragment } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
// import fluid from '../services/fluid';
import Hamburder from './Hamburder';
import Nav from './Nav';

const HEADER = styled.header`
  pointer-events: none;
  position: sticky;
  top: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--fluid-container-padding);
  padding-top: 10px;
  padding-bottom: 10px;
  /* margin-top: var(--header-margin-top); */
  margin-bottom: calc(var(--header-margin-bottom) + var(--header-margin-top) - 20px);

  &.blur {
    background-color: var(--header-bg-color);
    backdrop-filter: blur(5px);

    .logo {
      color: var(--yellow);
    }
  }

  .logo {
    color: var(--bg-color);
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    font-size: var(--header-logo-font-size);
    line-height: var(--header-logo-line-height);
    pointer-events: all;
  }

  .logo:any-link {
    text-decoration: none;
  }

  .hamburger, nav {
    pointer-events: all;
  }

  @media (min-width: 860px) {
    .logo {
      color: var(--yellow);
    }
  }
`;

const HamburgerMenu = styled.div`
  background-color: var(--yellow);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 99;
  display: grid;
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

  &.HamburgerMenu--closed {
    display: none;
  }

  @media (min-width: 860px) {
    display: none;
  }

`;

function Header(props) {

  const headerRef = useRef();
  const HamburgerRef = useRef();
  const HamburgerMenuRef = useRef();

  function openMenu(event) {
    HamburgerRef.current.classList.toggle('hamburger--opened');
    HamburgerRef.current.classList.toggle('hamburger--closed');
    HamburgerMenuRef.current.classList.toggle('HamburgerMenu--closed');
    headerRef.current.classList.toggle('blur');
  };

 return (
  <Fragment>
    <HamburgerMenu ref={HamburgerMenuRef} className='HamburgerMenu--closed'>
      <nav>
        {/* <li><a href='google.com'><span data-hover='about'>about</span></a></li> */}
        <li><a href='#work' onClick={openMenu}><span data-hover='work'>work</span></a></li>
        <li><a href='https://github.com/HaoZhenSiow' target='_blank' rel='noreferrer'><span data-hover='github'>github</span></a></li>
        <li><a href='https://www.linkedin.com/in/siowhaozhen/' target='_blank' rel='noreferrer'><span data-hover='linkedin'>linkedin</span></a></li>
        <li><a href='#codepen' onClick={openMenu}><span data-hover='codepen'>codepen</span></a></li>
      </nav>
    </HamburgerMenu>
    <HEADER ref={headerRef} className='blur'>
       <a className='logo' href="index.html">HAO ZHEN</a>
       <Hamburder openMenu={openMenu} ref={HamburgerRef}/>
       <Nav/>
    </HEADER>
    
  </Fragment>
 );
}

export default Header;