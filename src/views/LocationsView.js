import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import autoBind from 'auto-bind';
import {
  fetchLocationsList,
  fetchApartmentByLocation,
} from '../store/actions/locationsListActions';
import qs from 'qs';
import LocationItems from '../components/LocationItems';
import ApartmentTileView from '../components/ApartmentTileView';

class LocationsView extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      selectedLocation: {},
    };
  }
  componentWillMount() {
    this.props.fetchLocationsList();
    this.parseQueryAndLoad(this.props.location.search.replace(/\?/, ''));
  }
  parseQueryAndLoad(queryString) {
    const query = qs.parse(queryString);
    if (query && query._id) {
      this.props.fetchApartmentByLocation(query._id);
      this.setState({
        selectedLocation: query,
      });
    }
  }
  handleOnLocationClick(location) {
    return () => {
      this.props.fetchApartmentByLocation(location._id);
      this.setState({
        selectedLocation: {
          _id: location._id,
          name: location.title,
        },
      });
    };
  }
  render() {
    return (
      <div className="center-element">
        <h2>
          <i>Select location, where you want to stay :)</i>
        </h2>
        <LocationItems
          items={this.props.locations.items}
          onClick={this.handleOnLocationClick}
          selected={this.state.selectedLocation._id}
        />
        {this.state.selectedLocation._id && (
          <Fragment>
            <hr />
            <b>
              Found {this.props.apartments.items.length} apartment(s) in{' '}
              {this.state.selectedLocation.name}
            </b>
            <div className="view-apartment-list">
              {this.props.apartments.items.map((item, index) => (
                <ApartmentTileView key={index} apartment={item} />
              ))}
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  locations: state.locationList.locations,
  apartments: state.locationList.apartments,
});

export default connect(
  mapStateToProps,
  { fetchLocationsList, fetchApartmentByLocation }
)(LocationsView);
