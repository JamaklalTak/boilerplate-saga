import React from 'react';

const Image = (props) => {
  const { src, alt, onClick, onLoad } = props;
  return(
    <img
      src={src}
      alt={alt || 'imageAlt'}
      onClick={onClick}
      onload={onLoad}
    />
  )
}

export default Image;