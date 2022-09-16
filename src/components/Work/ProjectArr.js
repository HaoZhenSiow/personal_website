import styled from 'styled-components';

import IMG1 from '../../assets/projects/e-learning.jpg';
import IMG2 from '../../assets/projects/suite.jpg';
import IMG3 from '../../assets/projects/meet-landing.jpg';
import IMG4 from '../../assets/projects/equalizer.jpg';
import IMG5 from '../../assets/projects/stats-preview.jpg';
import IMG6 from '../../assets/projects/nft.jpg';
import IMG7 from '../../assets/projects/order-summary.jpg';
import IMG8 from '../../assets/projects/pod.jpg';
import IMG9 from '../../assets/projects/QRcode.jpg';
import IMG10 from '../../assets/projects/rating.jpg';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projectsArr = [
  {img: IMG1, src: 'https://www.frontendmentor.io/solutions/skilled-elearning-landing-page-SJEGtvTL5', title:'Frontend Mentor - Skilled e-learning Landing Page', alt: 'Skilled e-learning landing page', description: 'HTML . CSS . Mobile First . Responsive . Fluid Typography'},
  {img: IMG2, src: 'https://www.frontendmentor.io/solutions/suite-landing-page-M--62i8164', alt:'Suite Landing Page', title: 'Frontend Mentor - Suite Landing Page', description: 'React . Mobile First . Responsive . Fluid Layout . Fluid Typography'},
  {img: IMG3, src: 'https://www.frontendmentor.io/solutions/meeting-landing-page-8hlKX0opba', alt:'Meet landing page', title: 'Frontend Mentor - Meet Landing Page', description: 'React . Mobile First . Responsive . Fluid Layout . Fluid Typography'},
  {img: IMG4, src: 'https://www.frontendmentor.io/solutions/equalizer-landing-page-GluX4ULrxP', alt:'Equalizer Landing Page', title: 'Frontend Mentor - Equalizer Landing Page', description: 'HTML . CSS . Fluid Layout . Fluid Typography'},
  {img: IMG5, src: 'https://www.frontendmentor.io/solutions/stats-preview-card-component-DclCvGeNKD', alt:'Stats Preview Card Component', title: 'Frontend Mentor - Stats Preview Card Component', description: 'HTML . CSS . Fluid Layout . Fluid Typography'},
  {img: IMG6, src: 'https://www.frontendmentor.io/solutions/nft-preview-card-component-solution-y0k03GEcg', alt:'NFT preview card component', title: 'Frontend Mentor - NFT preview card component', description: 'HTML . CSS . Fluid Typography'},
  {img: IMG7, src: 'https://www.frontendmentor.io/solutions/order-summary-component-r38SKhyIZl', alt:'Order summary component', title: 'Frontend Mentor - Order summary component', description: 'HTML . CSS . Fluid Typography'},
  {img: IMG8, src: 'https://www.frontendmentor.io/solutions/podrequestaccesslandingpage-UdwV-FhhGW', alt:'Pod Request Access Landing Page', title: 'Frontend Mentor - Pod request access landing page', description: 'React . Mobile First . Responsive . Fluid Layout . Fluid Typography'},
  {img: IMG9, src: 'https://www.frontendmentor.io/solutions/qr-code-component-solution-sX_4tZEXn', alt:'QR code component', title: 'Frontend Mentor - QR code component', description: 'HTML . CSS . Fluid Typography'},
  {img: IMG10,src: 'https://www.frontendmentor.io/solutions/interactive-rating-component-H1SiLhAI9',  alt:'Interactive rating component', title: 'Frontend Mentor - Interactive rating component', description: 'HTML . CSS . Fluid Typography'}
];

const Project = styled.div`
  width: 100%;
  /* text-align: center; */

  a:any-link {
    text-decoration: none;
  }

  h3 {
    color: var(--yellow);
    margin: 1em auto 0;
    max-width: 80%;
    /* display: inline-block; */
  }

  .link {
    fill: var(--yellow);
    width: 0.8em;
    margin-left: 0.3em;
    vertical-align: text-top;
  }


  p {
    margin: .3em 0;
  }
  & > img {
    width: 100%;
    box-shadow: var(--work-layout-shadow);
  }
`;

const ProjectJSX = projectsArr.map(({img, src, alt, title, description}, index) => {
  return (<Project key={index}>
    <img src={img} alt={alt}/>
      <a href={src} target='_blank' rel='noreferrer'><h3>{title}<FaExternalLinkAlt className='link' /></h3></a>
      <p>{description}</p>
  </Project>);
});

export default ProjectJSX;