import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import jsdom from 'jsdom'
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { ApartmentList } from '../js/components/apartmentList';
import { SavedList } from '../js/components/savedList';
import { Message } from '../js/components/message';
import { Apartment } from '../js/components/apartment';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc;
global.window = doc.defaultView;

//Render the test data into components and
//check if the rendered DOM values are what we expect
describe('Component tests', () => {

	const apartment = {
	name:'name',
	rating : 5,
	photos: '../assets/NA_img.png',
	location : { lat :40.7128, lng: -74.0059},
	address : 'cupertino',
	phone_number: '123',
	website : 'google.com',
	saved : true
	};

	it('should render Apartment component ', () => {
		const item = shallow(<Apartment apartment={apartment} />);
		expect(item.hasClass('apartment-item'));
		expect(item.hasClass('thumbnail'));
		expect(item.hasClass('checkbox'));
	});

	it('should render ApartmentList  component ', () => {
		const item = shallow(<ApartmentList apartment={apartment} />);
		expect(item.hasClass('apartment-list'));
	});

	it('should render SavedList component ', () => {
		const item = shallow(<SavedList apartment={apartment} />);
		expect(item.text('Saved'));
	});

	it('should render Message component ', () => {
		const item = shallow(<Message apartment={apartment} />);
		expect(item.hasClass('message'));
	});

	it('allows us to set props', () => {
		const wrapper = mount( <Apartment apartment={apartment} />);
		expect(wrapper.props().apartment.name).to.equal('name');
		wrapper.setProps({ name: 'abc' });
		expect(wrapper.props().name).to.equal('abc');
	});
});
