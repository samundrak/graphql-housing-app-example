import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FilterBox from './FilterBox';
import RangeInput from '../../components/RangeInput';

const RangeFilter = (props) => {
  const {
    value, onApply, label, sign = '',
  } = props;
  return (
    <FilterBox
      value={value}
      label={label}
      onApply={onApply}
      render={({ state, onChange }) => (
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
      )}
    />
  );
};
RangeFilter.propTypes = {
  value: PropTypes.object.isRequired,
  onApply: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  sign: PropTypes.string.isRequired,
};
export default RangeFilter;
