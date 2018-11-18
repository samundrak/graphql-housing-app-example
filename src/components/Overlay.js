import React from 'react';
import styled from 'styled-components';

const OverlayWrapper = styled.div`
  width: 100vw;
  background-color: black;
  height: 100vw;
  position: absolute;
  top: 0px;
  left: 0px;
  opacity: 0.5;
`;
const Overlay = ({ onClick }) => {
  return <OverlayWrapper onClick={onClick} />;
};

export default Overlay;
