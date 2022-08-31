import React from 'react';
import styled from 'styled-components';
import fluid from '../services/fluid';

const FOOTER = styled.footer`
  padding: var(--fluid-container-padding);
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-direction: column;
  font-size: ${fluid.calc(14, 16, 'Full', 'px')};
  align-items: center;

  ul {
    padding: 0%;;
    list-style: none;
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    align-items: center;

    li {
      padding-right: 20px;
      
      a {
        color: var(--grey);
        font-size: var(--body-font-size);
      }
    }
  }

  @media (min-width: 768px) {
    ul {flex-direction: row;}
  }
`;

const Footer = props => {
  return (
    <FOOTER>
      <ul>
        <li><a href="https://github.com/HaoZhenSiow">Github</a></li>
        <li><a href="https://www.linkedin.com/in/siowhaozhen/">Linkedin</a></li>
        <li><a href="https://codepen.io/HaoZhenSiow">Codepen</a></li>
        <li><a href="https://twitter.com/home">Twitter</a></li>
        <li><a href="https://www.frontendmentor.io/profile/HaoZhenSiow">Front-end Mentor</a></li>
      </ul>
      <p>Designed and build by Siow Hao Zhen © 2022</p>
    </FOOTER>
  );
}

export default Footer;