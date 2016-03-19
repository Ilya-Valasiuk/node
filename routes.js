module.exports = function (app) {
	var calcLargePrimeNumber = require('./largePrimeNumber');
	var logger = require('./logger/log');

	app.post('/largePrimeNumber', function (req, res) {
		var requestData = req.body;
		if(requestData && requestData.number && requestData.number > 1) {
			var calculatedNumber = calcLargePrimeNumber(requestData.number);	
		}
		if(calculatedNumber) {
			logger.info('success');
			res.json({success: true, number: requestData.number, primeNumber: calculatedNumber});	
		} else {
			logger.info('bad data');
			res.json({success: false, text: 'Bad request data'});	
		}
		
	});
}