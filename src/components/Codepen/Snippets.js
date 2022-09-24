import React from 'react';
import { useRef } from 'react';

const snippetArray = [
  {title: 'Hamburger Menu', src: 'https://codepen.io/HaoZhenSiow/embed/preview/OJQqpzR?default-tab=result'},
  {title: 'Button UI', src: 'https://codepen.io/HaoZhenSiow/embed/preview/WNJwVJd?default-tabs=css%2Cresult&host=https%3A%2F%2Fcodepen.io&slug-hash=WNJwVJd'},
  {title: 'Image Sprite Mask', src: 'https://codepen.io/HaoZhenSiow/embed/preview/NWMNEmb?default-tab=result'},
  {title: 'Demon Slayer: Infinity Train', src: 'https://codepen.io/HaoZhenSiow/embed/preview/NWyeeez?default-tab=result'},
  {title: 'Cursor Movement Delay', src: 'https://codepen.io/HaoZhenSiow/embed/preview/zYRbKOW?default-tab=result'},
  {title: 'Typing Effect vanilla JS', src: 'https://codepen.io/HaoZhenSiow/embed/preview/BaYMGGN?default-tab=result'},
  {title: 'Hero BG scale on scrolling', src: 'https://codepen.io/HaoZhenSiow/embed/preview/qBxgoyM?default-tab=result'},
  {title: 'Text Wavy Animation', src: 'https://codepen.io/HaoZhenSiow/embed/preview/QWQzZEo?default-tab=result'},
  {title: 'Scroll Trigger Animation', src: 'https://codepen.io/HaoZhenSiow/embed/preview/eYVbKrZ?default-tab=result'}
];

const SnippetJSX = snippetArray.map(({title, src}, index) => {
  return (
    <iframe
      samesite='Strict'
      key={index}
      title={title}
      src={src}
      frameBorder="no"
      loading="lazy"
      allowFullScreen={true}>
    </iframe>
  );
});

const Snippets = props => {
  let ifrDiv = useRef();
  
  const changeHeight = function () {
    [...ifrDiv.current.children].forEach((ifr) => {
      let height = (ifr.getBoundingClientRect().width * 0.8).toString() + 'px';
      ifr.style.setProperty('height', height);
    });
  };

  React.useEffect(() => {
    changeHeight();
    window.addEventListener('resize', changeHeight);
  });

  return (
    <div className='snippets' ref={ifrDiv}>
      {SnippetJSX}
    </div>
  );
}

export default Snippets;