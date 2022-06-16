import React, { Fragment } from 'react';
import styled from 'styled-components';

const NAV = styled.nav`
  display: flex;
  list-style: none;
  font-size: 24px;
  font-weight: 500;
  line-height: 29.26px;

  li {
    overflow: hidden;
  }

  a {
    font-family: 'Montserrat', sans-serif;
    color: var(--grey);
    font-size: var(--header-nav-font-size);
    font-weight: 500;
    line-height: 29.26px;
    margin-left: var(--header-nav-margin-left);
    position: relative;
  }

  span {
    display: inline-block;
    transition: transform 0.3s;
  }

  span::after {
    content: attr(data-hover);
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    color: var(--yellow);
  }

  a:hover span {
    transform: translateY(-108%);
  }

  
  /* a:hover {
    color: var(--yellow);
  } */

  @media (max-width: 860px) {
    display: none;
  }
`;


function Nav(props) {
 return (
  <Fragment>
    <NAV>
      <li><a href='google.com'><span data-hover='about'>about</span></a></li>
      <li><a href='google.com'><span data-hover='work'>work</span></a></li>
      <li><a href='google.com'><span data-hover='github'>github</span></a></li>
      <li><a href='google.com'><span data-hover='linkedin'>linkedin</span></a></li>
      <li><a href='google.com'><span data-hover='codepen'>codepen</span></a></li>
    </NAV>
  </Fragment>
 );
}

export default Nav;