import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import Apartment from './apartment';

function selectList(apartment) {
  if (apartment.visible==='all' || apartment.visible==='saved'){
    return apartment;
  }
}

export  class ApartmentList extends React.Component {
  constructor(props) {
    super(props);
  }

  getApartmentList(){
    let apartments = [];
    if(this.props !=null && this.props.apartmentList !=null){
      apartments = this.props.apartmentList.apartments.filter(selectList).map(apartment => {
        return <Apartment apartment={apartment}  key={apartment.placeid} />;
      });
    }
    return apartments;
  }

  render() {
    return (
      <div >
        <div className='main apartment-list'>
          <div className='row'>
            {this.getApartmentList()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    apartmentList: state
  };
};

export default connect(mapStateToProps)(ApartmentList);
