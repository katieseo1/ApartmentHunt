import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import Navbar from './navbar';
import SearchBar from './searchBar';
import FetchingBar from './fetchingBar';
import ApartmentList from './apartmentList';
import Message from './message';
import LandingPage from './landingPage';
import geocoding from 'reverse-geocoding';
import GooglePlaces from 'node-googleplaces';

export  class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div >
        <Navbar />
        <SearchBar/>
        <LandingPage/>
        <FetchingBar/>
        <Message />
        <ApartmentList/>
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    state: state
  };
};

export default connect(mapStateToProps)(SearchContainer);
