import React, { Fragment } from 'react';
import FilterBox from './FilterBox';
import CheckboxGroup from '../../components/CheckboxGroup';

const CheckFilter = ({ items, value, onApply, label }) => {
  console.log(value);
  return (
    <FilterBox
      value={value}
      label={label}
      onApply={onApply}
      render={({ state, onChange }) => {
        return (
          <CheckboxGroup
            items={items}
            values={state.value}
            onChange={(event) => {
              const lValue = [].concat(state.value);
              let valueIndex = lValue.indexOf(event.target.value);
              if (valueIndex > -1) {
                lValue.splice(valueIndex, 1);
              } else {
                lValue.push(event.target.value);
              }
              onChange({
                ...state,
                value: lValue,
              });
            }}
            content={({}) => <Fragment>{label}</Fragment>}
          />
        );
      }}
    />
  );
};
export default CheckFilter;
