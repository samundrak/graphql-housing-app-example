import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Slider = styled.input`
  width: 200px;
`;
const RangeInput = ({
  content, range, onChange, min = 0, max = 100,
}) => (
  <div style={{ padding: '20px' }}>
    <div>{content({ min, max, range })}</div>
    <br />
    <Slider type="range" min={min} max={max} value={range} onChange={onChange} />
  </div>
);
RangeInput.propTypes = {
  content: PropTypes.func.isRequired,
  range: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};
export default RangeInput;
