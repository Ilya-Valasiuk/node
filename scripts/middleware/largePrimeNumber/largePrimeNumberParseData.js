'use strict';
module.exports = (req, res, next) => {
	let logger = require('./../../logger/log')('consoleLogger');
	let data = req.body;

	logger.info('start first middleware');
	
	if(data.number && !isNaN(+data.number)) {
		next();
	} else {
		logger.debug(`Not a number - ${data.number}`);
		next(new Error('Incorrect Data'));
	}
};