var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var calcLargePrimeNumber = require('./largePrimeNumber');

app.use(bodyParser.json())

app.post('/largePrimeNumber', function (req, res) {
	var requestData = req.body;
	if(requestData && requestData.number && requestData.number > 1) {
		var calculatedNumber = calcLargePrimeNumber(requestData.number);	
	}
	if(calculatedNumber) {
		res.json({success: true, number: requestData.number, primeNumber: calculatedNumber});	
	} else {
		res.json({success: false, text: 'Bad request data'});	
	}
	
});

app.listen(3000, function () {
	console.log('start listening');
})