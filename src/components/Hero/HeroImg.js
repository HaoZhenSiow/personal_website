import React from 'react';
import styled from 'styled-components';
import portrait from '../../assets/me.png';

const HeroImgStyle = styled.div`
  line-height: 0;
  mask-image: linear-gradient(0deg, transparent 0%, black 34%);

  img {
    position: relative;
    width: var(--hero-img-width);
    order: var(--hero-img-order);
  }
`;

const HeroImg = props => {
  return (
    <HeroImgStyle>
      <img src={portrait} alt='portrait'/>
    </HeroImgStyle>
  );
}

export default HeroImg;