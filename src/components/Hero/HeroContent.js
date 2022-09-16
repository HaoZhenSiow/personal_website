import React from 'react';
import styled from 'styled-components';
import fluid from '../services/fluid';

import LazyLoad from '../services/LazyLoad';
import TextAnimation1 from '../services/TextAnimation1';
import HeroBtn from './HeroBtn';

const HeroContentStyled = styled.section`
  order: var(--hero-content-order);
  font-size: var(--hero-content-font-size);
  line-height: var(--hero-content-line-height);
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: var(--hero-content-title-font-size);
    line-height: var(--hero-content-title-line-height);
    font-weight: 700;
    margin: 0;
    margin-top: var(--hero-content-title-margin-top);

    .intro {
      display: inline-block;
      transform: translateY(30%);
      opacity: 0;
      transition-property: transform, opacity;
      transition-duration: 3s;
      transition-timing-function: ease;
      transition-delay: 0s;        
    }

    .role {
      color: var(--yellow);
      font-size: var(--hero-content-title-span-font-size);
      line-height: var(--hero-content-title-span-line-height);
    }

    &.lazyload {

      .intro, .text-animation1__letter {
        transform: translateY(0%);
        opacity: 1;
      }

      .text-animation1__underline {
        background: var(--yellow);
        width: 100%;
      }

    }
  }

  p {
    width: 20em;
    margin: ${fluid.calc(14, 16, 'Full', 'px')} 0 ${fluid.calc(22, 39, 'Full', 'px')};
  }

  @media (min-width: 768px) {
    position: absolute;
    top: 104px;
    left: ${fluid.calc(16, 200, 'Full', 'px')};
    align-items: start;
  }
`;

const HeroContent = props => {
  return (
    <HeroContentStyled aria-label='hero content'>
      <LazyLoad lazyload='0.9'>
        <h1 className="title">
          <span className='intro'>Hi, I'm a</span>
          <br/>
          <span className='underline'></span>
          <TextAnimation1 delay="0.05"><span className='role'>Front-end Developer</span></TextAnimation1>
        </h1>
      </LazyLoad>
      <p>I turn aesthetic and creative designs into interactive and meaningful solutions.</p>
      <HeroBtn>Resume</HeroBtn>
    </HeroContentStyled>
  );
}

export default HeroContent;