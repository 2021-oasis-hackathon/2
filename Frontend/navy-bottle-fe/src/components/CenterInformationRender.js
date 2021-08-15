import React from 'react';
import CenterRenderComponet from './CenterRenderComponent';
import MarkerRenderComponet from './MarkerRenderComponet';

const CenterInformationRender = ({
  zoom_in,
  center_top,
  center_left,
  name,
  marker_top,
  marker_left,
  color,
}) => {
  return (
    <>
      <CenterRenderComponet
        zoom_in={zoom_in}
        top={center_top}
        left={center_left}
        name={name}
      ></CenterRenderComponet>
      <MarkerRenderComponet
        zoom_in={zoom_in}
        top={marker_top}
        left={marker_left}
        color={color}
      ></MarkerRenderComponet>
    </>
  );
};

export default CenterInformationRender;
