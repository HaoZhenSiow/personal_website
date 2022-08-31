import React, { } from 'react';
import styled from 'styled-components';
import WorkLayout from './WorkLayout';
import LazyLoad from '../services/LazyLoad';
import TextAnimation1 from '../services/TextAnimation1';

const WORK = styled.div`
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
    display: inline-block;
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
  `;

const Work = props => {
  return (
    <LazyLoad lazyload='0.99'>
      <WORK>
        <TextAnimation1 delay='0.05'>
          <h2>Front-end Mentor<wbr/> Projects</h2>
        </TextAnimation1>
        <p>These are the projects I have been working on. Frontend Mentor challenges help me improve me coding skills by building realistic projects.</p>
        <WorkLayout/>
      </WORK>
    </LazyLoad>
  );
}

export default Work;