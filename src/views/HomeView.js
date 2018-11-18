/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApartmentsList } from '../store/actions/apartmentsListActions';
import ApartmentTileView from '../components/ApartmentTileView';

class HomeView extends React.Component {
  componentWillMount() {
    this.props.fetchApartmentsList();
  }

  render() {
    const { apartmentsList } = this.props;
    if (!Object.keys(apartmentsList).length) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container-list container-lg clearfix">
        <div className="col-12 float-left">
          <div className="view-apartment-list">
            {apartmentsList.items.map((item, index) => (
              <ApartmentTileView key={index} apartment={item} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  apartmentsList: state.apartmentsList.apartments,
});

HomeView.propTypes = {
  apartmentsList: PropTypes.object.isRequired,
  fetchApartmentsList: PropTypes.func.isRequired,
};
export default connect(
  mapStateToProps,
  { fetchApartmentsList },
)(HomeView);
