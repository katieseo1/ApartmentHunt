import 'whatwg-fetch';
const config = require('../config.js');

export const FETCH_GEO_LOCATION_SUCCESS = 'FETCH_GEO_LOCATION_SUCCESS';
export const fetchGeoLocationSuccess = location => ({
	type: FETCH_GEO_LOCATION_SUCCESS,
	location
});

export const FETCHING_PROGRESS = 'FETCHING_PROGRESS';
export const fetchingProgress = () => ({
	type: FETCHING_PROGRESS
});

export const SAVE_APARTMENT = 'SAVE_APARTMENT';
export const saveApartment = id => ({
	type: SAVE_APARTMENT,
	id
});

export const REMOVE_APARTMENT = 'REMOVE_APARTMENT';
export const removeApartment = id => ({
	type: REMOVE_APARTMENT,
	id
});

export const TOGGLE_VIEW = 'TOGGLE_VIEW';
export const toggleView = id => ({
	type: TOGGLE_VIEW,
	id
});

export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
export const fetchSearchSuccess = (searchListResults) => ({
	type: FETCH_SEARCH_SUCCESS,
	searchListResults
});

export const ERROR = 'ERROR';
export const errorMsg = (msg) => ({
	type: ERROR,
	msg
});

export const LOAD_LOCAL_STORAGE = 'LOAD_LOCAL_STORAGE';
export const loadLocalStorage = (data) => ({
	type: LOAD_LOCAL_STORAGE,
	data
});

export const fetchDataFromGooglePlace = (lat,lng) => {
	return fetch('/nearbySearch', {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify({
			lat: lat,
			lng: lng
		})
	})
	.then(response => {
		if (!response.ok) {
			dispatch(errorMsg('Could not get data, try later'));
			throw new Error(response.statusText);
		}
		return response.json();
	});
}

const fetchDataWithCurrentLocation = (dispatch, position) => {
	return (fetchDataFromGooglePlace(position.lat, position.lng))
	.then(searchListResults => {
		dispatch(fetchSearchSuccess(searchListResults));
	})
	.catch(error => {
		dispatch(errorMsg('Could not get data. Try later.'));
	});
}

export const fetchCurrentLocation = () =>{
	return (dispatch) => {
		dispatch(fetchingProgress());
		jQuery.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${config.api_key_geo_Location}`, function(success) {
			fetchDataWithCurrentLocation(dispatch, success.location);
		})
		.fail((err) => {
			alert("API Geolocation error! \n\n"+err);
		});
	}
}

export const convertGeoLocation = address => {
	return function(dispatch) {
		dispatch(fetchingProgress());
		const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address} &key= ${config.api_key_geo_Location}`;
		return fetch(encodeURI(url))
		.then(response => {
			if (!response.ok) {
				dispatch(errorMsg('Not a valid address'));
				throw new Error(response.statusText);
			}
			return response;
		})
		.then(response => {
			return response.json();})
			.then(data => {
				return fetchDataFromGooglePlace(data.results[0].geometry.location.lat,data.results[0].geometry.location.lng);})
				.then(searchListResults => {
					if (searchListResults.length==0){
						dispatch(errorMsg('No results availible for given city name'));
					}
					dispatch(fetchSearchSuccess(searchListResults));
				})
				.catch(error => {
					dispatch(errorMsg('Could not get data. Please try again.'));
				});
			}
		};

		export const getNearByApartments = (location) => {
			return (dispatch) => {
				dispatch(fetchingProgress());
				return fetchDataFromGooglePlace(location.lat, location.lng)
				.then(searchListResults => {
					dispatch(fetchSearchSuccess(searchListResults));
				})
				.catch(error => {
					dispatch(errorMsg());
				});
			}
		};
