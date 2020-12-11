import React from 'react';
import { ZoomModal } from './styleFile.jsx';

const ImageZoom = (props) => {
  if (props.showZoom) {
    return (
      <ZoomModal
        src={props.zoomParameters.imgSrc}
        x={props.zoomParameters.x}
        y={props.zoomParameters.y}
      />
    );
  }
  return null;
};

export default ImageZoom;
