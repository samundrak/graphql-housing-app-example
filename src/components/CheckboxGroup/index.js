import React from 'react';
import styled from 'styled-components';

const StyledLI = styled.li`
  list-style-type: none;
`;
const isChecked = (item, values) => {
  return !!values.find((value) => value === item);
};
const CheckboxGroup = ({ values, onChange, items, content }) => {
  return (
    <div style={{ padding: '20px' }}>
      <div>{content({ values, items })}</div>
      <br />
      <ul>
        {items.map((item) => {
          return (
            <StyledLI key={item}>
              <input
                onChange={onChange}
                type="checkbox"
                value={item}
                checked={isChecked(item, values)}
              />
              {item}
            </StyledLI>
          );
        })}
      </ul>
    </div>
  );
};
export default CheckboxGroup;
