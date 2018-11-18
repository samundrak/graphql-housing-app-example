import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ApartmentAmentityView = ({ limit, amentities }) => {
  let localAmentities = [];
  amentities.map((item, index) => {
    if (index < limit) {
      localAmentities.push(
        <span className="_1h9l4w0vvX6d56ZnJ3NLod">
          <i />
          <span>{item}</span>
        </span>
      );
    }
  });
  return <Fragment>{localAmentities}</Fragment>;
};
ApartmentAmentityView.defaultProps = {
  limit: 3,
  amentities: [],
};
ApartmentAmentityView.propTypes = {
  limit: PropTypes.number,
  amentities: PropTypes.array,
};
export default ApartmentAmentityView;
