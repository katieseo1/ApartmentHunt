import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import Navbar from './navbar';
import RemovedList from './removedList';

export  class RemovedListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <RemovedList />
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    state: state
  };

};
export default connect(mapStateToProps)(RemovedListContainer);
