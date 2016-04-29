module.exports = (logger) => {	
	let debugLevel = process.env.debugLvl;

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