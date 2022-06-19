import React, { Fragment } from 'react';
import styled from 'styled-components';
import portrait from '../../assets/me.png';
import fluid from '../services/fluid';
import HeroBtn from './HeroBtn';
import Marquee from './Marquee';
import LazyLoad from '../services/LazyLoad';

const IMG = styled.img`
  position: relative;
  width: var(--hero-img-width);
  order: var(--hero-img-order);
`;

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

const HeroImg = styled.div`
  line-height: 0;
  mask-image: linear-gradient(0deg, transparent 0%, black 34%);
`;

const HeroContent = styled.section`
  order: var(--hero-content-order);
  font-size: var(--hero-content-font-size);
  line-height: var(--hero-content-line-height);

  .title {
    font-size: var(--hero-content-title-font-size);
    line-height: var(--hero-content-title-line-height);
    font-weight: 700;
    margin: 0;
    margin-top: var(--hero-content-title-margin-top);

    span {
      color: var(--yellow);
      font-size: var(--hero-content-title-span-font-size);
      line-height: var(--hero-content-title-span-line-height);
    }

    transform: translateY(20%);
    opacity: 0;
    animation-duration: 3s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-fill-mode: both;

    &.lazyload {
      animation-name: animation1;
    }
  }

  p {
    width: 20em;
    margin: ${fluid.calc(14, 16, 'Full', 'px')} 0 ${fluid.calc(22, 39, 'Full', 'px')};
  }

  @keyframes animation1 {
    0% {
      transform: translateY(20%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    position: absolute;
    top: 104px;
    left: ${fluid.calc(16, 220, 'Full', 'px')};
  }
`;

function Hero(props) {
 return (
  <Fragment>
    <MAIN>
      <HeroImg>
        <IMG src={portrait} alt='portrait' />
      </HeroImg>
      <HeroContent aria-label='hero content'>
        <LazyLoad className="title" lazyload='0.9'>
          <h1>Hi, I'm a<br/><span>Front-end Developer</span></h1>
        </LazyLoad>
        <p>I turn aesthetic and creative design into interactive and engaging website.</p>
        <HeroBtn>Resume</HeroBtn>
      </HeroContent>
      <Marquee className='hero' clone='1' dir="left" alternate speed="25">
        <p>HAO ZHEN</p>
      </Marquee>
    </MAIN>
  </Fragment>
 );
}

export default Hero;