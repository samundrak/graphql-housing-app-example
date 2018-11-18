import React from 'react';
import PropTypes from 'prop-types';
import { StyledLI, StyledUL } from './style';
import { Link } from 'react-router-dom';

const LocationItems = ({ items, onClick }) => {
  return (
    <StyledUL>
      {items.map((location, index) => {
        return (
          <StyledLI key={location._id}>
            <Link
              to={{
                pathname: '/locations',
                search: `?_id=${location._id}&name=${location.title}`,
              }}
              onClick={onClick(location)}
            >
              {location.title}
              {index !== items.length - 1 && ' |'}
            </Link>
          </StyledLI>
        );
      })}
    </StyledUL>
  );
};

LocationItems.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default LocationItems;
