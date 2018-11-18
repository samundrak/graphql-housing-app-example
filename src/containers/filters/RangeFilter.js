import React, { Fragment } from 'react';
import FilterBox from './FilterBox';
import RangeInput from '../../components/RangeInput';

const SizeFilter = ({ value, onApply, label, sign = '' }) => {
  console.log(value);
  return (
    <FilterBox
      value={value}
      label={label}
      onApply={onApply}
      render={({ state, onChange }) => {
        return (
          <RangeInput
            range={state.value.max}
            max={state.defaultValue.max}
            onChange={(event) => {
              onChange({
                ...state,
                value: {
                  ...state.value,
                  max: event.target.value,
                },
              });
            }}
            content={({ min, range }) => (
              <Fragment>
                <span>{label}</span>
                <br />
                {min} {sign} - {range} {sign}
              </Fragment>
            )}
          />
        );
      }}
    />
  );
};
export default SizeFilter;
