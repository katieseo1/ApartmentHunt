var JSAlert = require("js-alert");
import * as actions from '../actions/index';

export const initialApartmentListState = {
	apartments: [],
	visible: false,
	currentLocation: null,
	message: '',
	landingPage: true,
	visible: 'all'
};

export const apartmentReducer = (state = initialApartmentListState, action) => {
	if (action.type === actions.ERROR) {
		state.visible = false;
		state = Object.assign({}, {
			message: action.msg
		});
		return state;
	}

	else if (action.type === actions.LOAD_LOCAL_STORAGE) {
		state.visible = false;
		state = Object.assign({}, initialApartmentListState, {
			apartments: action.data.apartments,
			message: ''
		});
		return state;
	}

	else if (action.type === actions.FETCHING_PROGRESS) {
		state = Object.assign({}, initialApartmentListState, {
			visible: true,
			landingPage: false,
		});
		return state;
	}

	else if (action.type === actions.FETCH_SEARCH_SUCCESS) {
		state.visible = false;
		let searchResult = action.searchListResults;
		let i = 0;

		for (i = 0; i < searchResult.length; i++) {
			searchResult[i].visible = 'all';
			searchResult[i].isToggleOn = false;
		}

		state = Object.assign({}, initialApartmentListState, {
			apartments: searchResult,
			message: ''
		});
		return state;
	}

	else if (action.type === actions.TOGGLE_VIEW) {
		return {
			...state,
			apartments: state.apartments.map(item =>
				item.placeid===action.id
				?	{
					...item,
					isToggleOne: !item.isToggleOne
				}
				: item
			)
		}
	}

	else if (action.type === actions.SAVE_APARTMENT) {
		JSAlert.alert("Moved to Saved List");

		return {
			...state,
			apartments: state.apartments.map(item =>
				item.placeid===action.id
				?	{
					...item,
					visible: 'saved'
				}
				: item
			)
		}
	}

	else if (action.type === actions.REMOVE_APARTMENT) {
		JSAlert.alert("Moved to Removed List");

		return {
			...state,
			apartments: state.apartments.map(item =>
				item.placeid===action.id
				?	{
					...item,
					visible: 'removed'
				}
				: item
			)
		}
	}


};
