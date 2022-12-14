import { createGlobalStyle } from "styled-components";
import fluid from "./fluid";


const GlobalStyle = createGlobalStyle`
/* root font size must be fixed */
/* scale 1.067, 14px, 320px viewport and 1.2 18px, 1920px viewport */
/* viewport - viewport, fluid-container-padding - fluid container horizontal padding */
:root {
  --grey: #545454;
  --yellow: #EFA019;
  --bg-color: white;
  --header-bg-color: rgba(255,255,255,0.6);
  --work-layout-shadow: 15px 15px 15px #d8d8d8;
  --hero-marquee-opacity: 0.3;

  --fluid-container-padding: ${fluid.container(16, 200, 16)};
  --body-font-size: ${fluid.calc(16, 18, 'Full', 'px')};
  --header-logo-font-size: ${fluid.calc(28, 36, 'Full', 'px')};
  --header-logo-line-height: ${fluid.calc(34.13, 43.88, 'Full', 'px')};
  --header-margin-top: ${fluid.calc(24, 32, 'Full', 'px')};
  --header-margin-bottom: ${fluid.calc(40, 80, 'Full', 'px')};
  --header-nav-font-size: ${fluid.calc(16, 18, 'b', 'px')};
  --header-nav-margin-left: ${fluid.calc(15, 40, 'b', 'px')};

  --hero-flex-direction: column;
  --hero-text-align: center;
  --hero-img-width: ${fluid.calc(230, 460, 'Full', 'px')};
  --hero-img-order: 1;
  --hero-content-order: 2;
  --hero-content-title-font-size: ${fluid.calc(26, 36, 'Full', 'px')};
  --hero-content-title-line-height: ${fluid.calc(30, 44, 'Full', 'px')};
  --hero-content-title-margin-top: 2.5rem;
  --hero-content-title-span-font-size: ${fluid.calc(30, 56, 'Full', 'px')};
  --hero-content-title-span-line-height: ${fluid.calc(29.26, 68.26, 'Full', 'px')};
  --hero-content-font-size: ${fluid.calc(18, 20, 'Full', 'px')};
  --hero-content-line-height: ${fluid.calc(19.5, 26, 'Full', 'px')};

  --work-margin-top: ${fluid.calc(50, 200, 'Full', 'px')};
  --work-layout-margin-top: ${fluid.calc(30, 80, 'Full', 'px')};
  --work-h2: ${fluid.calc(24, 26, 'Full', 'px')};
  --work-h2-letter-spacing: ${fluid.calc(2, 6, 'Full', 'px')};

  --snippet-height: ${fluid.calc(300, 400, 's', 'px')};
  --snippet-height: auto;
}

@media (min-width: 768px) {
  :root {
    --hero-text-align: left;
    --hero-flex-direction: row;
    --hero-img-order: 2;
    --hero-content-order: 1;
    --hero-content-title-font-size: ${fluid.calc(18, 36, 'Full', 'px')};
    --hero-content-title-span-font-size: ${fluid.calc(22, 56, 'Full', 'px')};
    --hero-content-title-margin-top: 0;

    --snippet-height: ${fluid.calc(400, 500, 'b', 'px')};
    --snippet-height: auto;
  }
}

@media (prefers-color-scheme: dark) {
    :root {
        --grey: #ececec;
        --yellow: #ffd700;
        --bg-color: #2d2d2d;
        --header-bg-color: rgba(45,45,45,0.6);
        --hero-marquee-opacity: 0.1;
        --work-layout-shadow: none;
    }
}

* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

::selection {
    background-color: var(--yellow);
    color: white;
}

html {
  font-family: 'Montserrat', sans-serif;
  color: var(--grey);
}

body {
    margin: 0;
    padding: 0;
    background-color: var(--bg-color);
    font-family: 'Montserrat', sans-serif;
    font-size: var(--body-font-size);
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: #337ab7;
}

a:hover, a:focus {text-decoration: underline;}

abbr:hover , acronym:hover { cursor: help;}

kbd {
    background-color: #333333;
    color: #ffffff;
    font-size: .9em;
    padding: 0.1em 0.2em;
    border-radius: 0.2em;
}

code {
    color: #c7254e;
    background-color: #f9f2f4;
    font-size: .9em;
    padding: 0.1em 0.2em;
    border-radius: 0.2em;
}

sub, sup {
    font-size: 75%;
}

blockquote {
    padding: 0.5em 1.5em;
    margin-left: 0;
    margin-right: 0;
    /* font-size: var(--fluid-h4); */
    border-left: 5px solid #eee;
}

blockquote > p {
    margin: 0;
}

dt {font-weight: 700;}
dd {margin-inline-start: 0;}
address {font-style: normal;}

pre {
    display: block;
    padding: 1.5em;
    /* font-size: var(--fluid-sm); */
    line-height: 1.6em;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: .3em;
}

fieldset {
    padding: 0;
    margin: 0;
    border: 0;
}

legend {
    width: 100%;
    /* font-size: var(--fluid-h3); */
    border-bottom: solid 1px #d6d6d6;
    margin-bottom: 1em;
}

label {
    font-weight: 700;
}

button:hover, input[type="button"]:hover, input[type="submit"]:hover, input[type="reset"]:hover {
    cursor: pointer;
}
`;

export default GlobalStyle;