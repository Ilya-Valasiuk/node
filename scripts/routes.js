module.exports = (app) => {
	let calcLargePrimeNumber = require('./largePrimeNumber/largePrimeNumber');
	let consoleLogger = require('./logger/consoleLogger')();
	let logger = require('./logger/log')(consoleLogger);

	app.post('/largePrimeNumber', function (req, res) {
		let requestData = req.body,
			calculatedNumber;

		logger.info('largePrimeNumber route');

		if(requestData && requestData.number && requestData.number > 1) {
			logger.debug('Start calculating large prime number for ' + requestData.number);
			calculatedNumber = calcLargePrimeNumber(requestData.number);	
		}

		if(calculatedNumber) {
			logger.debug('success: request number - ' + requestData.number + ', primeNumber: ' + calculatedNumber);
			res.json({success: true, number: requestData.number, primeNumber: calculatedNumber});	
		} else {
			logger.debug('bad datam request number - ' + requestData.number);
			res.json({success: false, text: 'Bad request data'});	
		}
	});
}