import React from 'react';
import styled from 'styled-components';
import fluid from '../services/fluid';

import HeroImg from './HeroImg';
import HeroContent from './HeroContent';
import Marquee from '../services/Marquee';


const MAIN = styled.main`
  position: relative;
  padding: var(--fluid-container-padding);
  display: flex;
  flex-direction: var( --hero-flex-direction);
  align-items: center;
  text-align: var(--hero-text-align);
  justify-content: right;

  .marquee {
    position: absolute;
    top: ${fluid.calc(115, 135, 'Full', 'px')};
    left: 0;
    pointer-events: none;
    z-index: -99;
    opacity: var(--hero-marquee-opacity);

    p {
      margin: 0 0.3em;
      font-family: 'Merienda One', cursive;
      font-size: ${fluid.calc(120, 350, 'Full', 'px')};
      color: #D3D3D3;
      /* darkmode opacity 0.3 */
    }
  }
`;



function Hero(props) {
 return (
  <MAIN>
    <HeroImg/>
    <HeroContent/>
    <Marquee className='hero' clone='1' dir="left" alternate speed="25">
      <p>HAO ZHEN</p>
    </Marquee>
  </MAIN>
 );
}

export default Hero;