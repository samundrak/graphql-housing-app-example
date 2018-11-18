import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'auto-bind';
import styled from 'styled-components';
import qs from 'qs';
import { fetchLocationsList } from '../store/actions/locationsListActions';
import SearchBox from '../components/SearchBox';
import RangeFilter from '../containers/filters/RangeFilter';
import CheckFilter from '../containers/filters/CheckFilter';

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
      filter: {
        size: {
          value: { min: 0, max: 100 },
          defaultValue: { min: 0, max: 100 },
        },
        price: {
          value: { min: 0, max: 100 },
          defaultValue: { min: 0, max: 100 },
        },
        amenities: {
          value: [],
          defaultValue: [],
        },
        services: {
          value: [],
          defaultValue: [],
        },
      },
    };
    this.defaultOptions = {
      amenities: ['television', 'elevator', 'fridge', 'heating', 'cooker', 'microwave'],
      services: ['concierge', 'cleaning', 'fullFridge', 'laundry'],
    };
  }
  componentDidMount() {
    if (!this.props.locations.length) {
      this.props.fetchLocationsList();
    }
  }
  handleSearchSubmit(event) {
    if (event) event.preventDefault();
    this.submitSearchRequest();
  }
  handleOnSearchTextChange(event, cb) {
    this.setState(
      {
        searchText: event.target.value,
      },
      cb,
    );
  }
  submitSearchRequest() {
    const query = {
      searchText: this.state.searchText,
      filter: this.state.filter,
    };
    this.props.history.replace({
      pathname: '/search',
      search: `?${qs.stringify(query)}`,
    });
    alert(`Will request to graphql query endpoint once ready ${JSON.stringify(query)}`); // eslint-disable-line
    console.log(query);
  }
  handleApplyFilter(filter) {
    return (value, cb = () => null) => {
      this.setState(
        {
          filter: {
            ...this.state.filter,
            [filter]: value,
          },
        },
        () => {
          cb();
          this.submitSearchRequest();
        },
      );
    };
  }

  render() {
    return (
      <div className="center-element">
        <SearchBox
          suggestions={this.props.locations.items}
          onSubmit={this.handleSearchSubmit}
          onSearchTextChange={this.handleOnSearchTextChange}
          searchText={this.state.searchText}
        />
        <ul style={{ position: 'absolute', marginTop: '50px' }}>
          <FilterList>
            <b>Filter:</b>
          </FilterList>
          <FilterList>
            <RangeFilter value={this.state.filter.size} onApply={this.handleApplyFilter('size')} label="Size" sign="m²" />
          </FilterList>
          <FilterList>
            <RangeFilter value={this.state.filter.price} onApply={this.handleApplyFilter('price')} label="Price" sign="€" />
          </FilterList>
          <FilterList>
            <CheckFilter
              value={this.state.filter.amenities}
              onApply={this.handleApplyFilter('amenities')}
              label="Amenities"
              items={this.defaultOptions.amenities}
            />
          </FilterList>
          <FilterList>
            <CheckFilter
              value={this.state.filter.services}
              onApply={this.handleApplyFilter('services')}
              label="Services"
              items={this.defaultOptions.services}
            />
          </FilterList>
          {/* <FilterList>
            <div>Details</div>
            {renderIf(activeFilter === 'details')(
              <Popup
                onApply={this.handleApplyFilter('details')}
                onCancel={this.handleCancelFilter('details')}
              >
                <RangeInput />
              </Popup>
            )}
          </FilterList> */}
        </ul>
      </div>
    );
  }
}

SearchView.propTypes = {
  locations: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  fetchLocationsList: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  locations: state.locationList.locations,
});

export default connect(
  mapStateToProps,
  { fetchLocationsList },
)(SearchView);
