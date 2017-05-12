import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import store from '../store';
import geocoding from 'reverse-geocoding';
import ActivityIndicator from 'react-activity-indicator';
import PlacesAutocomplete from 'react-places-autocomplete'

export class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { city: '' }
    this.onChange = (city) => this.setState({ city })

    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState!==null && JSON.parse(serializedState).apartments.length !=0){
        this.props.dispatch(actions.loadLocalStorage(JSON.parse(serializedState)));
      }
    } catch (err) {
      console.log(err);
    }

    this.searchApartment = this.searchApartment.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

  }

  checkInput(userInput){
    if (userInput.match(/[a-zA-Z]+/)){
      this.props.dispatch(actions.convertGeoLocation(userInput));
    }
    else{
      JSAlert.alert("Not valid city").dismissIn(1000 * 2);
    }
  }
  searchNearByApartment(){
    this.props.dispatch(actions.fetchCurrentLocation());
  }
  searchApartment(){
    if (this.locationNameInput.value){
      this.checkInput(this.locationNameInput.value.trim());
    }
    else{
      this.props.dispatch(actions.fetchCurrentLocation());
    }
  }

  handleFormSubmit  (event)  {
   event.preventDefault()
   const { city } = this.state
   if (city===''){
     this.props.dispatch(actions.fetchCurrentLocation());
   }
   else{
     this.checkInput(city);
   }
 }
  render() {
    const autocompleCSS = {
    root: 'form-group',
    input: 'form-control',
    autocompleteContainer: 'autocomplete-container'
  }
    const autocompleteStyles = {
   root: { position: 'relative', textAlign:'center', },
   input: { width: '100%' },
   autocompleteItem: { color: 'black' },
   autocompleteItemActive: { color: 'blue' }
 }
    return (
      <div className='landing-background'>
        <div className='element-center'>
          <h4 className='search-text'> Simply click for near by apartments Or Start searching by entering the city  </h4>
          <div className=' form-container element-center'>
            <form onSubmit={this.handleFormSubmit} >
               <PlacesAutocomplete
                placeholder={'Current Location'}
                 value={this.state.city}
                 onChange={this.onChange}
                 styles={autocompleteStyles}
                 classNames={autocompleCSS}
               />
               <br />
               <button className='btn search-button' type="submit">Search</button>
             </form>
             <row>
             </row>
        </div>
        </div>
      </div>
    );
  }
}

var mapStateToProps = (state ) => {
  return {
    apartmentList: state
  };
};

export default connect(mapStateToProps )(SearchBar);
