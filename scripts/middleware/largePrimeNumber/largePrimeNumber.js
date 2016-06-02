'use strict';
module.exports = (() => {
	let logger = require('./../../logger/log')('consoleLogger');
	let calcLargePrimeNumber = require('./../../services/largePrimeNumber/largePrimeNumber');

	return {
		isValid: (number) => {
			return number > 1;
		},
		calculate: (number) => {
			logger.debug(`Start calculating large prime number for ${number}`);
			return calcLargePrimeNumber(number);
		}
	}
})()