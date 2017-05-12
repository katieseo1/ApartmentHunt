import chai from 'chai';
import { expect } from 'chai';
const should = chai.should();
const chaiHttp = require('chai-http');
const {	runServer,	app,	closeServer } = require('../server');
chai.use(chaiHttp);

//Test server for AJAX request
describe('SERVER TEST', function() {
	this.timeout(5000); // this test can take up to 5 seconds

	before(function() {
		return runServer();
	});

	after(function() {
		return closeServer();
	});

	it('should get data from Google Api', function (done) {
		setTimeout(done, 5000);
		const location = {
			lat: 37,
			lng: -122
		};

		chai.request(app)
		.post('/nearbySearch')
		.send(location)
		.end(function(err, _res) {
		_res.should.have.property('status', 200);
		done();
		});
	});
});
