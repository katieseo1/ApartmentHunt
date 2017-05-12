
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import { expect } from 'chai';
import store from '../js/store';
import * as actions from '../js/actions/index';
import { createMockStore } from 'redux-test-utils';
import { createMockDispatch } from 'redux-test-utils';

//Testing Redux
describe('Action Test', () => {
	const state = 'state';
	const store = createMockStore(state);
	it('Saving apartment action test', () => {
		const action = {
			type: 'SAVE_APARTMENT',
			data: 'data'
		};
		store.dispatch(action);
		store.getAction(action.type).should.equal(action);
	});
	it('Saving apartment action test', () => {
		const action = {
			type: 'REMOVE_APARTMENT',
			data: 'data'
		};
		store.dispatch(action);
		store.getAction(action.type).should.equal(action);
	});

	it('Fetch search success action test', () => {
		const action = {
			type: 'FETCH_SEARCH_SUCCESS'
		};
		store.dispatch(action);
		store.getAction(action.type).should.equal(action);
	});

	it('Load local storage action test', () => {
		const action = {
			type: 'LOAD_LOCAL_STORAGE'
		};
		store.dispatch(action);
		store.getAction(action.type).should.equal(action);
	});

	it('Fetch geo location success action test', () => {
		const action = {
			type: 'FETCH_GEO_LOCATION_SUCCESS',
			data:'location'
		};
		store.dispatch(action);
		store.getAction(action.type).should.equal(action);
	});

	it('Fetching progress action test', () => {
		const action = {
			type: 'FETCHING_PROGRESS'
		};
		store.dispatch(action);
		store.getAction(action.type).should.equal(action);
	});

	it('Display error action test', () => {
		const action = {
			type: 'ERROR'
		};
		store.dispatch(action);
		store.getAction(action.type).should.equal(action);
		});
});

describe('Reducer test', () => {
	const state = 'state';
	const dispatchMock = createMockDispatch();
	it('Saving apartment reducer test', () => {
		const action = {
			type: 'SAVE_APARTMENT',
			data: 'data',
		};
		dispatchMock.dispatch(action);
		dispatchMock.getAction(action.type).should.equal(action);
	});

	it('Fetch search success reducer test', () => {
		const action = {
			type: 'FETCH_SEARCH_SUCCESS'
		};
		dispatchMock.dispatch(action);
		dispatchMock.getAction(action.type).should.equal(action);
	});

	it('Load local storage reducer test', () => {
		const action = {
			type: 'LOAD_LOCAL_STORAGE'
		};
		dispatchMock.dispatch(action);
		dispatchMock.getAction(action.type).should.equal(action);
	});

	it('Fetch geo location success reducer test', () => {
		const action = {
			type: 'FETCH_GEO_LOCATION_SUCCESS',
			data:'location'
		};
		dispatchMock.dispatch(action);
		dispatchMock.getAction(action.type).should.equal(action);
	});

	it('Fetching progress reducer test', () => {
		const action = {
			type: 'FETCHING_PROGRESS'
		};
		dispatchMock.dispatch(action);
		dispatchMock.getAction(action.type).should.equal(action);
	});

	it('Error reducer test', () => {
		const action = {
			type: 'ERROR'
		};
		dispatchMock.dispatch(action);
		dispatchMock.getAction(action.type).should.equal(action);
	});
});
