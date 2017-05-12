import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import store from '../store';
import geocoding from 'reverse-geocoding';
import ActivityIndicator from 'react-activity-indicator';

export class FetchingBar extends React.Component {

  constructor(props) {
    super(props);
  }

  fetchingProgress(){
    if (String(this.props.apartmentList)!=='undefined'  &&
    this.props.apartmentList.visible === true){
      return (
        <div className='main'>
        <h4 className='element-center'> Searching......</h4>
        <ActivityIndicator
          number={7}
          diameter={20}
          borderWidth={1}
          duration={300}
          activeColor='#6695ef'
          borderColor='#3d598f'
          borderWidth={5}
          borderRadius='50%'
        />
        </div>
      )
    }
  }
  render() {
    return (
      <div>
      {this.fetchingProgress()}
      </div>
    );
  }
}

var mapStateToProps = (state ) => {
  return {
    apartmentList: state
  };
};

export default connect(mapStateToProps )(FetchingBar);
