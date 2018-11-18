import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FilterBox from './FilterBox';
import CheckboxGroup from '../../components/CheckboxGroup';

const CheckFilter = (props) => {
  const {
    items, value, onApply, label,
  } = props;
  return (
    <FilterBox
      value={value}
      label={label}
      onApply={onApply}
      render={({ state, onChange }) => (
        <CheckboxGroup
          items={items}
          values={state.value}
          onChange={(event) => {
            const lValue = [].concat(state.value);
            const valueIndex = lValue.indexOf(event.target.value);
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
          content={() => <Fragment>{label}</Fragment>}
        />
      )}
    />
  );
};
CheckFilter.propTypes = {
  items: PropTypes.array.isRequired,
  value: PropTypes.object.isRequired,
  onApply: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
export default CheckFilter;
