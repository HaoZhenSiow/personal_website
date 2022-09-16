import React, { Fragment, useRef } from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Hamburder from './Hamburder';
import HamburgerMenu from './HamburgerMenu';

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

function Header(props) {

  const headerRef = useRef();
  const HamburgerRef = useRef();
  const HamburgerMenuRef = useRef();

  function openMenu(event) {
    HamburgerRef.current.classList.toggle('hamburger--open');
    HamburgerMenuRef.current.classList.toggle('HamburgerMenu--open');
    headerRef.current.classList.toggle('blur');
  };

 return (
  <Fragment>
    <HamburgerMenu ref={HamburgerMenuRef}/>
    <HEADER ref={headerRef} className='blur'>
       <a className='logo' href="index.html">HAO ZHEN</a>
       <Hamburder openMenu={openMenu} ref={HamburgerRef}/>
       <Nav/>
    </HEADER>
  </Fragment>
 );
}

export default Header;