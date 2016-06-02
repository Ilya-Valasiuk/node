'use strict';
module.exports =  {
	print: (text, logLevel) => {
		logLevel = logLevel || 'info';
		
		console.log(logLevel + ': ' + text);
	}
}
