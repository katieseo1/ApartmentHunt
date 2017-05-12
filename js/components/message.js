import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export  class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
      {
        (this.props.apartmentList) &&
        <h4 className='message text-center'>{this.props.apartmentList.message}</h4>
      }
      </section>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    apartmentList: state
  };
};

export default connect(mapStateToProps)(Message);
