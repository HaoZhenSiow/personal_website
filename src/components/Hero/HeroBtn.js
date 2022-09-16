import React from 'react';
import styled from 'styled-components';
import sprite from '../../assets/backgroundSprite.png';
import resume from '../../assets/siowhaozhen-resume.pdf';

const BTN = styled.span`
	@keyframes mask-move {
	from {
		 -webkit-mask-position: 0 0;
		 mask-position: 0 0;
	}
	to {
		 -webkit-mask-position: 100% 0;
		 mask-position: 100% 0;
	}
}

@keyframes mask-reverse {
	from {
		 -webkit-mask-position: 100% 0;
		 mask-position: 100% 0;
	}
	to {
		 -webkit-mask-position: 0 0;
		 mask-position: 0 0;
	}
}

display: inline-block;
outline: 2px solid var(--yellow);
position: relative;
font-family: 'Montserrat', sans-serif;
font-weight: 700;
border-radius: 6px;
overflow: hidden;
width: 6em;
height: 2em;

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
		width: 6em;
		height: 2.2em;
		position: absolute;
	  top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border: none;
		mask-image: url(${sprite});
		mask-size: 7100% 100%;
	  animation: mask-reverse 0.7s steps(70) forwards;

	  &:hover {
			animation: mask-move 0.7s steps(70) forwards;
		}
	}

`;

function HeroBtn(props) {
 return (
	<BTN>
		<button onClick={() => {window.open(resume);}}>{props.children}</button>
	</BTN>
 );
}

export default HeroBtn;