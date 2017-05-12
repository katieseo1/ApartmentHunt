import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
const config = require('../config.js');
const api_key2 = config.api_key2;
const api_key_map = config.api_key_map;

export class Apartment extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleViewClick = this.handleToggleViewClick.bind(this);
    this.handleSaveApartmentClick = this.handleSaveApartmentClick.bind(this);
    this.handleRemoveApartmentClick = this.handleRemoveApartmentClick.bind(this);

  }

  //Toggle map view and photo
  handleToggleViewClick (event){
    event.preventDefault();
    const id =$(event.currentTarget).attr("data-id");

    if (this.props.apartment.isToggleOn === false) {
      document.getElementById(id).setAttribute('src',this.getMap());
      $(event.currentTarget).text("Photo");
    }
    else {
      document.getElementById(id).setAttribute('src',this.getPhoto());
      $(event.currentTarget).text("Map");
    }
    this.props.apartment.isToggleOn = !this.props.apartment.isToggleOn;
    this.props.dispatch(actions.toggleView(this.props.apartment.placeid));
  }


  handleSaveApartmentClick() {
      this.props.dispatch(actions.saveApartment(this.props.apartment.placeid));
  }

  handleRemoveApartmentClick() {
      this.props.dispatch(actions.removeApartment(this.props.apartment.placeid));
  }
  //Display Map or Photo
  chooseMapPhoto(){
    if (this.props.apartment.isToggleOn === false) {
      return this.getPhoto();
    }
    else{
      return this.getMap();
    }
  }

  getMap() {
    const address = encodeURI(this.props.apartment.address);
    return  `https://maps.googleapis.com/maps/api/staticmap?center=${address}&key=${api_key_map}&zoom=15&size=300x250&maptype=roadmap&markers=color:blue%7Clabel:S%7C${this.props.apartment.location.lat},${this.props.apartment.location.lng}`;
  }

  getCrimeInfo() {
    const location = this.props.apartment.location;
    return  `https://www.crimereports.com/home/#!/dashboard?lat=${location.lat}&lng=${location.lng}&zoom=16`;
  }
  getPhoto(){
    return this.props.apartment.photos ?
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxHeight=300&key=
    ${api_key2}&photoreference=${this.props.apartment.photos[0].photo_reference}`
    : '../assets/NA_img.png'
  }

  getRating(){
    return this.props.apartment.rating ?
    'Rating : ' + this.props.apartment.rating
    :'Rating : NA'
  }

  getSaveButton(){
    return (this.props.apartment.visible==='all' || this.props.apartment.visible ==='removed') ? true : false
  }
  getRemoveButton(){
    return (this.props.apartment.visible==='all' || this.props.apartment.visible ==='saved') ? true : false
  }

  render() {
    return (
      <div className='main'>
        <div className='row apartment-item'>
          <div className='col-5 element-center'>
            <figure className="apartment-img ">
            <a href ={this.props.apartment.website} target='_blank'>
            <img id = {this.props.apartment.placeid} src={this.chooseMapPhoto()} className='thumbnail  pic img-responsive' style={{width:'280px', height:'250px', marginLeft:'auto', marginRight:'auto', display:'block'}}/>
            </a>
            </figure>
          </div>
          <div className='col-7'>
            <div className='apartment-info'>
              <a href ={this.props.apartment.website} target='_blank'>
              <h2 className='list-group-item-text'>
              {this.props.apartment.name}
              </h2>
              </a>
              <h3 className='text-left'>{this.props.apartment.address}</h3>
              <h3 className='list-group-item-text'>{this.props.apartment.phone_number} </h3>
              <a href ={this.getCrimeInfo()} target='_blank'>
              <h3 className='list-group-item-text link'>
                Crime Report
              </h3>
              </a>
              <h3>{this.getRating()}</h3>

              <button className='map-button btn'  data-id = {this.props.apartment.placeid} onClick={this.handleToggleViewClick} >
              {this.props.apartment.isToggleOn ? 'Photo' : 'Map'}
              </button>
                { this.getSaveButton() &&
                <button className='save-button btn' data-id = {this.props.apartment.placeid} onClick={this.handleSaveApartmentClick} >
                Save
                </button>
                }

                { this.getRemoveButton()&&
                <button className='remove-button btn' data-id = {this.props.apartment.placeid} onClick={this.handleRemoveApartmentClick} >
                Remove
                </button>
              }

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Apartment);
