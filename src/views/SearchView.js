import React from 'react';
import renderIf from 'render-if';
import autobind from 'auto-bind';
import styled from 'styled-components';
import SearchBox from '../components/SearchBox';
import Popup from '../components/Popup';
import RangeInput from '../components/RangeInput';

const FilterList = styled.li`
  display: inline-block;
  margin-left: 10px;
  cursor: pointer;
`;
class SearchView extends React.Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      searchText: '',
      defaultAmenities: [
        'television',
        'elevator',
        'fridge',
        'heating',
        'cooker',
        'microwave',
      ],
      activeFilter: '',
    };
  }
  handleSearchSubmit(event) {
    event.preventDefault();
  }
  handleOnSearchTextChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }
  handleFilterClick(filter) {
    return () => {
      this.setState({
        activeFilter: filter,
      });
    };
  }
  handleApplyFilter(filter) {
    return () => {};
  }
  handleCancelFilter(filter) {
    return () => {
      this.setState({
        activeFilter: '',
      });
    };
  }
  render() {
    const { activeFilter } = this.state;
    return (
      <div className="center-element">
        <SearchBox
          onSubmit={this.handleSearchSubmit}
          onSearchTextChange={this.handleOnSearchTextChange}
          searchText={this.state.searchText}
        />
        <ul>
          <FilterList>
            <b>Filter:</b>
          </FilterList>
          <FilterList>
            <div onClick={this.handleFilterClick('size')}>Size</div>
            {renderIf(activeFilter === 'size')(
              <Popup
                onApply={this.handleApplyFilter('size')}
                onCancel={this.handleCancelFilter('size')}
              >
                <RangeInput />
              </Popup>
            )}
          </FilterList>
          <FilterList>
            <div onClick={this.handleFilterClick('price')}>Price</div>
            {renderIf(activeFilter === 'price')(
              <Popup
                onApply={this.handleApplyFilter('price')}
                onCancel={this.handleCancelFilter('price')}
              >
                <RangeInput />
              </Popup>
            )}
          </FilterList>
          <FilterList>
            <div onClick={this.handleFilterClick('amenities')}>Amenities</div>
            {renderIf(activeFilter === 'amenities')(
              <Popup
                onApply={this.handleApplyFilter('amenities')}
                onCancel={this.handleCancelFilter('amenities')}
              >
                <RangeInput />
              </Popup>
            )}
          </FilterList>
          <FilterList>
            <div onClick={this.handleFilterClick('details')}>Details</div>
            {renderIf(activeFilter === 'details')(
              <Popup
                onApply={this.handleApplyFilter('details')}
                onCancel={this.handleCancelFilter('details')}
              >
                <RangeInput />
              </Popup>
            )}
          </FilterList>
          <FilterList>
            <div onClick={this.handleFilterClick('services')}>services</div>
            {renderIf(activeFilter === 'services')(
              <Popup
                onApply={this.handleApplyFilter('services')}
                onCancel={this.handleCancelFilter('services')}
              >
                <RangeInput />
              </Popup>
            )}
          </FilterList>
        </ul>
      </div>
    );
  }
}

export default SearchView;
