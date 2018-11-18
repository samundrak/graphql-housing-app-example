import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const OverlayWrapper = styled.div`
  width: 100vw;
  background-color: black;
  height: 100vw;
  position: fixed;
  top: 0px;
  left: 0px;
  opacity: 0.5;
`;
const Overlay = ({ onClick }) => <OverlayWrapper onClick={onClick} />;

Overlay.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Overlay;
