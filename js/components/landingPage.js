import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export  class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  landingMessage() {
    var isUndefined = this.props.apartmentList
    if (isUndefined===undefined|| this.props===null){
      return (
        <div className='main '>
        <div className='row landing-margin landing-container'>
          <div className='col-6 element-center' >
            <video width='320' height='200' controls>
              <source src='assets/demo.mp4' type='video/mp4'/>
              <source src='assets/demo.ogg' type='video/ogg'/>
              Your browser does not support the video tag.
            </video>
            <h4 className='landing-text element-center'> Tour
            </h4>
          </div>
            <div className='col-6'>
              <h2><mark className='app--color'>ApartmentHunt </mark>
              is for simplifing time consuming apartments search !
              </h2>
              <h3>
                You can enter a specific city or simply click the search button to look for near by apartments based on your current location.
              </h3>
              <h3>
                You can save the apartments and view them later with the Saved List tab.
              </h3>
            </div>
          </div>
          <div className='row landing-margin element-center'>
        <a href='http://www.katieseo.com'>
          Personal Project Developed by Katie Seo
          </a>
          </div>
        </div>
      )
    };
  }

  render() {
    return (
      <section>
      {this.landingMessage()}
      </section>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    apartmentList: state
  };
};

export default connect(mapStateToProps)(LandingPage);
