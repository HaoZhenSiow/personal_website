import React from 'react';

const snippetArray = [
  {title: 'Demon Slayer: Infinity Train', src: 'https://codepen.io/HaoZhenSiow/embed/NWyeeez?default-tab=result', desc: `See the Pen &lt;a href="https://codepen.io/HaoZhenSiow/pen/NWyeeez"&gt; Demon
  Slayer: Infinity Train&lt;/a&gt; by Siow Hao Zhen (&lt;a
  href="https://codepen.io/HaoZhenSiow"&gt;@HaoZhenSiow&lt;/a&gt;) on &lt;a
  href="https://codepen.io"&gt;CodePen&lt;/a&gt;.`},
  {title: 'Demon Slayer: Infinity Train', src: 'https://codepen.io/HaoZhenSiow/embed/NWyeeez?default-tab=result', desc: `See the Pen &lt;a href="https://codepen.io/HaoZhenSiow/pen/NWyeeez"&gt; Demon
  Slayer: Infinity Train&lt;/a&gt; by Siow Hao Zhen (&lt;a
  href="https://codepen.io/HaoZhenSiow"&gt;@HaoZhenSiow&lt;/a&gt;) on &lt;a
  href="https://codepen.io"&gt;CodePen&lt;/a&gt;.`},
  {title: 'Demon Slayer: Infinity Train', src: 'https://codepen.io/HaoZhenSiow/embed/NWyeeez?default-tab=result', desc: `See the Pen &lt;a href="https://codepen.io/HaoZhenSiow/pen/NWyeeez"&gt; Demon
  Slayer: Infinity Train&lt;/a&gt; by Siow Hao Zhen (&lt;a
  href="https://codepen.io/HaoZhenSiow"&gt;@HaoZhenSiow&lt;/a&gt;) on &lt;a
  href="https://codepen.io"&gt;CodePen&lt;/a&gt;.`}
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

const SnippetJSX = snippetArray.map(({title, src, desc}, index) => {
  return (
    <iframe 
      key={index}
      scrolling="no"
      title={title}
      src={src}
      frameBorder="no"
      loading="lazy"
      allowFullScreen={true}>
      {desc}
    </iframe>
  );
});

const Snippets = props => {
  return (
    <div className='snippets'>
      {SnippetJSX}
    </div>
  );
}

export default Snippets;