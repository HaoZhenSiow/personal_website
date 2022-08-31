import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const TextAnimationStyle = createGlobalStyle`
  .text-animation1 {
    white-space: pre-wrap;
    position: relative;
  }

  .text-animation1__underline {
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 5px;
    background: black;
    transition: width 2s ease 1s;
  }
`;

const LETTER = styled.span`
  display: inline-block;
  transform: translateY(30%);
  opacity: 0;
  transition-property: transform, opacity;
  transition-duration: 2s;
  transition-timing-function: ease;
  transition-delay: ${props => props.delay};
`;

const TextAnimation1 = props => {
  const target = React.Children.only(props.children);
  const container = target.type;
  const className = target.props.className;
  const children = target.props.children;

  const letters = Array.from(children);
  const lettersMap = letters.map((letter, index) => {
    let delay = ((index+1) * Number(props.delay)).toFixed(2) + 's';
    return <LETTER className='text-animation1__letter' delay={delay} key={index}>{letter}</LETTER>
  });

  if (props.underline) {
    lettersMap.push(<span key='underline'className='text-animation1__underline'/>);
  }

  let childNode = React.createElement(
    container,
    { className: `text-animation1 ${className}` },
    lettersMap
  );

  return (
    <Fragment>
      <TextAnimationStyle/>
      {childNode}
    </Fragment>
  );
}

export default TextAnimation1;