import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import Navbar from './navbar';
import SearchBar from './searchBar';
import SavedList from './savedList';

export  class ListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <SavedList />
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    state: state
  };

};
export default connect(mapStateToProps)(ListContainer);
