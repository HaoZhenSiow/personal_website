import React from 'react';
import { useRef } from 'react';

const snippetArray = [
  {title: 'Button UI', src: 'https://codepen.io/HaoZhenSiow/embed/preview/WNJwVJd?default-tabs=css%2Cresult&host=https%3A%2F%2Fcodepen.io&slug-hash=WNJwVJd'},
  {title: 'Image Sprite Mask', src: 'https://codepen.io/HaoZhenSiow/embed/preview/NWMNEmb?default-tab=result'},
  {title: 'Demon Slayer: Infinity Train', src: 'https://codepen.io/HaoZhenSiow/embed/preview/NWyeeez?default-tab=result'},
  {title: 'Cursor Movement Delay', src: 'https://codepen.io/HaoZhenSiow/embed/preview/zYRbKOW?default-tab=result'},
  {title: 'Typing Effect vanilla JS', src: 'https://codepen.io/HaoZhenSiow/embed/preview/BaYMGGN?default-tab=result'},
  {title: 'Hero BG scale on scrolling', src: 'https://codepen.io/HaoZhenSiow/embed/preview/qBxgoyM?default-tab=result'},
  {title: 'Text Wavy Animation', src: 'https://codepen.io/HaoZhenSiow/embed/preview/QWQzZEo?default-tab=result'},
  {title: 'Scroll Trigger Animation', src: 'https://codepen.io/HaoZhenSiow/embed/preview/eYVbKrZ?default-tab=result'}
];

// const snippetArray = [
//   <iframe
//     scrolling="no"
//     title="Demon Slayer: Infinity Train"
//     src="https://codepen.io/HaoZhenSiow/embed/NWyeeez?default-tab=result"
//     frameBorder="no"
//     loading="lazy"
//     allowFullScreen={true}
//   >
//     See the Pen &lt;a href="https://codepen.io/HaoZhenSiow/pen/NWyeeez"&gt; Demon
//     Slayer: Infinity Train&lt;/a&gt; by Siow Hao Zhen (&lt;a
//     href="https://codepen.io/HaoZhenSiow"&gt;@HaoZhenSiow&lt;/a&gt;) on &lt;a
//     href="https://codepen.io"&gt;CodePen&lt;/a&gt;.
//   </iframe>,
//   <iframe
//     scrolling="no"
//     title="Typing Effect vanilla JS"
//     src="https://codepen.io/HaoZhenSiow/embed/BaYMGGN?default-tab=result"
//     frameBorder="no"
//     loading="lazy"
//     allowFullScreen={true}
//   >
//     See the Pen &lt;a href="https://codepen.io/HaoZhenSiow/pen/BaYMGGN"&gt; Typing
//     Effect vanilla JS&lt;/a&gt; by Siow Hao Zhen (&lt;a
//     href="https://codepen.io/HaoZhenSiow"&gt;@HaoZhenSiow&lt;/a&gt;) on &lt;a
//     href="https://codepen.io"&gt;CodePen&lt;/a&gt;.
//   </iframe>
// ];

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
    // let btns = document.getElementsByClassName('scaling-choices');
    // console.log(btns);
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