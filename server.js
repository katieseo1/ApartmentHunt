"use strict";
require('isomorphic-fetch');
const https = require('https');
const fs = require('fs');
const config = require('./js/config.js');
const api_key = config.api_key1;
const PORT = config.PORT;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const GooglePlaces = require ('node-googleplaces');
const jsonParser = bodyParser.json();
let server;

app.use(express.static('build'));
// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.post('/nearbySearch', function(req, response) {
  let searchResult=[];
  const places = new GooglePlaces(api_key);
  const params = {
    location: ''+req.body.lat+ ','+ req.body.lng+'',
    radius: 10000,
    keyword : 'apartment',
    type :'apartment'
  };

  places.nearbySearch(params)
   .then(res => {
     return res.body;
    })
    .then (data =>{
      let obj;
      let numOfObjects=data.results.length;
        for (var i=0; i<data.results.length ; i++){
          places.details({placeid:data.results[i].place_id})
          .then(res =>{
            return res.body;
          })
          .then(data =>{
            obj= new Object();
						obj.location=data.result.geometry.location;
            obj.placeid=data.result.id;
            obj.address=data.result.formatted_address;
            obj.name=data.result.name;
            obj.phone_number=data.result.formatted_phone_number;
            obj.photos=data.result.photos;
            obj.rating=data.result.rating;
            obj.website=data.result.url;
            searchResult.push(obj);
        }).then(data=> {
          if(searchResult.length===numOfObjects){
            response.json(searchResult);
          }
        }).
          catch(function(err){
            console.log(err);
          })
        }
  });
});

const runServer = function(callback) {
	server = app.listen(PORT, function() {
		console.log('Listening on localhost:==>' + PORT);
		if (callback) {
		  callback();
		}
	});
};

const closeServer = function(callback) {
	server.close(err => {
		if (err) {
			console.log(err);
		}
	});
};

if (require.main === module) {
  runServer(function(err) {
    if (err) {
      console.error(err);
    }
  });
}

module.exports = {
	runServer,
	closeServer,
	app
};
