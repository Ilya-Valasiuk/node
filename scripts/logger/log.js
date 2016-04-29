module.exports = (logger) => {	
	// need to overview. Question - how to set debug level on nede js app
	let debugLevel = 'debug';

	return {
		info: text => logger.print(text),
		debug: text => {
			if(debugLevel.toLowerCase() === 'debug') {
				logger.print(text, 'debug');
			}
		},
		warn: text => {
			if(debugLevel.toLowerCase() === 'warn') {
				logger.print(text, 'warn');
			}	
		}
	}
}