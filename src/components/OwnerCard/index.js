import React from 'react';
import PropTypes from 'prop-types';
import { Card } from './style';

const OwnerCard = ({ owner }) => {
  if (!owner) return null;
  const {
    profile: { firstName, lastName },
    email,
  } = owner;
  return (
    <Card>
      <div>
        Owner: {firstName} {lastName}
      </div>
      <div>Contact: {email}</div>
    </Card>
  );
};
OwnerCard.propTypes = {
  owner: PropTypes.shape({
    email: PropTypes.string,
    profile: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
  }),
};
export default OwnerCard;
