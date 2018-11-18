import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const Slider = styled.input`
  width: 200px;
`;
const Footer = styled.div`
  border-radius: 5px;
  background-color: #f1f1f1;
`;
class RangeInput extends React.Component {
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <div>
          <span>Price</span>
          <br />
          1000 $ - 2000 $
        </div>
        <br />
        <Slider type="range" min="0" max="100" />
      </div>
    );
  }
}

export default RangeInput;
