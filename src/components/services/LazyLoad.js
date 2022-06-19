import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';

const LazyLoad = props => {
  const target = React.Children.only(props.children);
  const container = target.type;
  const children = target.props.children;
  const myRef = useRef();
  const [childDOM, setChildDOM] = useState([]);
  const detect = useCallback(() => {
    let posY = myRef.current.getBoundingClientRect().y;
    let depth = Number(props.lazyload ? props.lazyload : 1);
    if (posY < (window.innerHeight * depth)) {
      myRef.current.classList.add('lazyload');
    }
  }, [props.lazyload]);

  useEffect(() => {
    let childNode = React.createElement(
      container,
      { className: `${props.className}`, ref: myRef },
      children
    );
    setChildDOM(childNode);
  }, [props, container, children, myRef]);

  useEffect(() => {
    // myRef is undefined at this point
    let detectTimeout = setTimeout(detect, 1);
    window.addEventListener('scroll', detect);
    return () => {
      clearTimeout(detectTimeout);
      window.removeEventListener('scroll', detect);
    };
  }, [childDOM, detect]);

  return (
    <Fragment>
      {childDOM}
    </Fragment>
  );
}

export default LazyLoad;