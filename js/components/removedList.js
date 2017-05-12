import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import Apartment from './apartment';

export  class RemovedList extends React.Component {
  constructor(props) {
    super(props);
    try {
      if ( typeof localStorage !== 'undefined'){
        const serializedState = localStorage.getItem('state');
        if (serializedState!==null && JSON.parse(serializedState).apartments.length !=0){
          this.props.dispatch(actions.loadLocalStorage(JSON.parse(serializedState)));
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  getRemovedList(){
    let apartments=[];
    let removedList=this.props.apartmentList;

    if(removedList){
      let removedApartments = this.props.apartmentList.apartments.filter(apartment => apartment.visible==='removed');
      apartments = removedApartments.map(apartment => {

        return <Apartment apartment={apartment} key={apartment.placeid} />;
      });
    }
    return apartments;
  }

  render() {
    return (
        <div className = 'main'>
          <h2 className = 'element-center' style ={{marginTop:'100px',marginBottom:'20px',}}> Removed List </h2>
            <div className = 'row'>
              {this.getRemovedList()}
            </div>
        </div>
    );
  }
}

var mapStateToProps = (state) => {
  console.log(state);
  return {
    apartmentList: state
  };
};

export default connect(mapStateToProps)(RemovedList);
