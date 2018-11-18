import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLI = styled.li`
  list-style-type: none;
`;
const isChecked = (item, values) => !!values.find((value) => value === item);
const CheckboxGroup = ({
  values, onChange, items, content,
}) => (
  <div style={{ padding: '20px' }}>
    <div>{content({ values, items })}</div>
    <br />
    <ul>
      {items.map((item) => (
        <StyledLI key={item}>
          <input onChange={onChange} type="checkbox" value={item} checked={isChecked(item, values)} />
          {item}
        </StyledLI>
      ))}
    </ul>
  </div>
);
CheckboxGroup.propTypes = {
  values: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  content: PropTypes.func.isRequired,
};
export default CheckboxGroup;
