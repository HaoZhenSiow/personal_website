import React, { Fragment, useCallback, useEffect, useRef } from 'react';

const LazyLoad = props => {
  const target = React.Children.only(props.children);
  const container = target.type;
  const className = target.props.className;
  const children = target.props.children;
  const myRef = useRef();
  const detect = useCallback(() => {
    let posY = myRef.current.getBoundingClientRect().y;
    let depth = Number(props.lazyload ? props.lazyload : 1);
    if (posY < (window.innerHeight * depth)) {
      myRef.current.classList.add('lazyload');
    }
  }, [props.lazyload]);

  let childNode = React.createElement(
    container,
    { className: className, ref: myRef },
    children
  );

  useEffect(() => {
    detect();
    window.addEventListener('scroll', detect);
    return () => {
      window.removeEventListener('scroll', detect);
    };
  }, [detect]);

  return (
    <Fragment>
      {childNode}
    </Fragment>
  );
}

export default LazyLoad;