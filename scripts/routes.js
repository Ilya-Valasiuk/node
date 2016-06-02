'use strict';
module.exports = (app) => {
	let bodyParser = require('body-parser');
	let largePrimeNumberParseData = require('./middleware/largePrimeNumber/largePrimeNumberParseData');
	let largePrimeNumberRoute = require('./middleware/largePrimeNumber/largePrimeNumberRoute');
	let largePrimeNumber = require('./middleware/largePrimeNumber/largePrimeNumber');

	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});
	app.use(bodyParser.json());
	app.use(largePrimeNumberParseData);
	app.post('/largePrimeNumber', largePrimeNumberRoute(largePrimeNumber));
};