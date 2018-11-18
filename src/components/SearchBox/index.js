import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  width: 600px;
  padding: 10px;
  font-size: 20px;
  height: 40px;
  border-radius: 20px;
`;
const SearchBox = ({ onSubmit, searchText, onSearchTextChange }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          value={searchText}
          onChange={onSearchTextChange}
          placeholder="Enter location here..."
        />
      </form>
    </div>
  );
};
SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBox;
