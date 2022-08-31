import React, {  } from 'react';
import styled from 'styled-components';
import IMG1 from '../../assets/projects/screenshot1.png';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Container = styled.div`
  width: 100%;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto;
  margin-top: var(--work-layout-margin-top);
`;

const Project = styled.div`
  width: 100%;
  text-align: left;

  a:any-link {
    text-decoration: none;
  }

  h3 {
    color: var(--yellow);
    margin: 1em 0 0;
    display: inline-block;
  }

  .link {
    fill: var(--yellow);
  }


  p {
    margin: .3em 0;
  }
  & > img {
    width: 100%;
    box-shadow: var(--work-layout-shadow);
  }
`;

const projectsArr = [
  {url: IMG1, alt:'sdsd', title: 'title', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi cum hic voluptas quam optio ex fugiat ut doloribus.'},
  {url: IMG1, alt:'sdsd', title: 'title', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi cum hic voluptas quam optio ex fugiat ut doloribus.'},
  {url: IMG1, alt:'sdsd', title: 'title', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi cum hic voluptas quam optio ex fugiat ut doloribus.'},
  {url: IMG1, alt:'sdsd', title: 'title', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi cum hic voluptas quam optio ex fugiat ut doloribus.'},
  {url: IMG1, alt:'sdsd', title: 'title', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi cum hic voluptas quam optio ex fugiat ut doloribus.'},
  {url: IMG1, alt:'sdsd', title: 'title', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi cum hic voluptas quam optio ex fugiat ut doloribus.'},
  {url: IMG1, alt:'sdsd', title: 'title', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi cum hic voluptas quam optio ex fugiat ut doloribus.'},
  {url: IMG1, alt:'sdsd', title: 'title', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi cum hic voluptas quam optio ex fugiat ut doloribus.'},
  {url: IMG1, alt:'sdsd', title: 'title', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi cum hic voluptas quam optio ex fugiat ut doloribus.'},
  {url: IMG1, alt:'sdsd', title: 'title', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi cum hic voluptas quam optio ex fugiat ut doloribus.'},
  {url: IMG1, alt:'sdsd', title: 'title', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi cum hic voluptas quam optio ex fugiat ut doloribus.'}
];

const ProjectJSX = projectsArr.map(({url, alt, title, description}, index) => {
  return (<Project key={index}>
    <img src={url} alt={alt}/>
      <a href='https://www.google.com/' target='_blank' rel='noreferrer'><h3>{title}</h3> <FaExternalLinkAlt className='link' /></a>
      <p>{description}</p>
  </Project>);
});

const WorkLayout = props => {
  return (
    <>
      <Container>
        {ProjectJSX}
      </Container>
    </>
  );
}

export default WorkLayout;