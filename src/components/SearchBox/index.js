import React from 'react';
import autobind from 'auto-bind';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import renderIf from 'render-if';
import Popup from '../Popup';

const Input = styled.input`
  width: 600px;
  padding: 10px;
  font-size: 20px;
  height: 40px;
  border-radius: 20px;
  z-index: 99999;
  position: absolute;
`;
const StyledSuggestionUL = styled.ul`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  -webkit-transform: translateY(calc(100% + 0.3rem));
  -ms-transform: translateY(calc(100% + 0.3rem));
  transform: translateY(calc(100% + 0.3rem));
  align-items: stretch;
  background: #fff;
  margin: 0;
  padding: 0;
  border-radius: 4px;
  box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.075);
`;
const StyledSuggestionLI = styled.li`
  list-style-type: none;
  border-bottom-style: solid;
  cursor: pointer;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.075);
  padding: 10px;
  &:hover {
    background: rgba(0, 0, 0, 0.075);
  }
`;

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      isPopupVisible: false,
      filteredSuggestions: [],
    };
  }

  changePopupState(state) {
    this.setState({
      isPopupVisible: state,
    });
  }
  onSearchTextChange(event) {
    const searchTerm = event.target.value;
    // if (!searchTerm) return;
    const suggestions = this.props.suggestions.filter((suggestion) => {
      return suggestion.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    this.setState({
      filteredSuggestions: suggestions,
      isPopupVisible: !!suggestions.length,
    });
    this.props.onSearchTextChange(event);
  }
  handlePopupCancel() {
    this.changePopupState(false);
  }
  handleSuggestionClick(suggestion) {
    return () => {
      this.props.onSearchTextChange(
        { target: { value: suggestion.title } },
        () => {
          this.changePopupState(false);
          this.props.onSubmit();
        }
      );
    };
  }
  render() {
    const { onSubmit, searchText } = this.props;
    return (
      <div>
        <form
          onSubmit={(e) => {
            this.changePopupState(false);
            onSubmit(e);
          }}
        >
          <Input
            type="text"
            value={searchText}
            onChange={this.onSearchTextChange}
            placeholder="Enter location here..."
          />
          {renderIf(this.state.isPopupVisible)(
            <Popup
              enableFooter={false}
              onCancel={this.handlePopupCancel}
              style={{ width: '600px', marginTop: '40px' }}
            >
              <StyledSuggestionUL>
                {this.state.filteredSuggestions.map((item) => {
                  return (
                    <StyledSuggestionLI
                      key={item._id}
                      onClick={this.handleSuggestionClick(item)}
                    >
                      {item.title}
                    </StyledSuggestionLI>
                  );
                })}
              </StyledSuggestionUL>
            </Popup>
          )}
        </form>
      </div>
    );
  }
}

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBox;
