import React from 'react';
import styled from 'styled-components';
import Snippets from './Snippets';
import LazyLoad from '../services/LazyLoad';
import TextAnimation1 from '../services/TextAnimation1';

const CODEPEN = styled.div`
  padding: var(--fluid-container-padding);
  margin-top: 200px;
  margin-top: var(--work-margin-top);
  text-align: center;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 2s ease 0s, transform 2s ease 0s; 

  h2 {
    font-weight: 700;
    letter-spacing: var(--work-h2-letter-spacing);
    font-size: var(--work-h2);
    color: var(--yellow);
  }

  a {
    color: var(--yellow);
  }

  &.lazyload {
    opacity: 1;
    transform: translateY(0);

    .intro, .text-animation1__letter {
        transform: translateY(0%);
        opacity: 1;
      }

    .text-animation1__underline {
      background: var(--yellow);
      width: 100%;
    }
  }

  .snippets {
    margin-top: var(--work-layout-margin-top);

    iframe {
      margin-bottom: 40px;
      width: 100%;
      height: var(--snippet-height);
    }

  }
`;



const Codepen = props => {
  return (
    <LazyLoad lazyload='0.99'>
      <CODEPEN>
        <TextAnimation1 delay='0.1'>
          <h2>Codepen Snippets</h2>
        </TextAnimation1>
        <p>I enjoy leaning new stuff and build these snippets to showcase what I've learn and what else can I really do. Here is my Codepen profile, <a href='https://codepen.io/HaoZhenSiow' target='_blank' rel='noreferrer'>https://codepen.io/HaoZhenSiow</a>, feel free to check out more of my snippets.</p>
        <Snippets/>
      </CODEPEN>
    </LazyLoad>
  );
}

export default Codepen;