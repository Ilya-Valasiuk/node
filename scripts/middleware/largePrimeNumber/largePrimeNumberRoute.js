'use strict';
module.exports = (primeNumberObject) => {
	let logger = require('./../../logger/log')('consoleLogger');

	return (req, res, next) => {
		let number = req.body.number;
		let primeNumber;
		logger.debug('start second middleware');
		
		if(primeNumberObject.isValid(number)) {
			logger.debug('request data valid');

			primeNumber = primeNumberObject.calculate(number);

			logger.debug(`request data valid. Number -  ${number}. PrimeNumber - ${primeNumber}`);
			res.json({success: true, number: number, primeNumber: primeNumber});
		} else {
			logger.debug(`request data not valid. data - ${number}`);
			res.json({success: false, text: 'Bad request data'});
		}
	}
}	