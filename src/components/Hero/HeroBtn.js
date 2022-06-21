import React, { Fragment } from 'react';
import styled from 'styled-components';
import sprite from '../../assets/backgroundSprite.png';

const BTN = styled.span`
  display: inline-block;
 	border: 1px solid var(--yellow);
 	position: relative;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  border-radius: 6px;

    &:before {
	 	content: "Resume";
	 	position: absolute;
	  top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
    color: var(--yellow);
    letter-spacing: 9.5%;
	}

	button {
		background: var(--yellow);
		color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: var(--hero-content-font-size);
    line-height: var(--hero-content-line-height);
    letter-spacing: 9.5%;
    padding: 0.6em 1.7em;
		border: none;
		mask-image: url(${sprite});
		mask-size: 7100% 100%;
		mask-position: 0 0;
		transition: mask-position 0.7s steps(70);

	  &:hover {
			mask-position: 100% 0;
		}
	}
`;

function HeroBtn(props) {
 return (
  <Fragment>
    <BTN>
      <button>{props.children}</button>
    </BTN>
  </Fragment>
 );
}

export default HeroBtn;