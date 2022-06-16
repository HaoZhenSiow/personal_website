import React, { Fragment } from 'react';
import styled from 'styled-components';
// import fluid from '../services/fluid';
import Hamburder from './Hamburder';
import Nav from './Nav';

const HEADER = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--fluid-container-padding);
  margin-top: var(--header-margin-top);
  margin-bottom: var(--header-margin-bottom);

  .logo {
    color: var(--yellow);
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    font-size: var(--header-logo-font-size);
    line-height: var(--header-logo-line-height);
  }

  .logo:any-link {
    text-decoration: none;
  }
`;

function Header(props) {
 return (
  <Fragment>
    <HEADER>
       <a className='logo' href="index.html">HAO ZHEN</a>
       <Hamburder/>
       <Nav/>
    </HEADER>
  </Fragment>
 );
}

export default Header;