import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Primary = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  line-height: 24px;
  text-align: center;
  width: initial;
  background-color: ${(props) => (props.type === 'primary' ? 'rgb(102, 153, 204)' : 'white')};
  color: ${(props) => (props.type === 'primary' ? 'white' : 'black')};
  box-sizing: border-box;
  box-shadow: transparent 0px 0px 0px;
  padding: 8px;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-radius: 2px;
  margin: 1px;
`;

const Button = ({ children, onClick, type = 'primary' }) => (
  <Primary type={type} onClick={onClick}>
    {children}
  </Primary>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
export default Button;
