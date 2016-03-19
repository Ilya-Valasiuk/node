module.exports = (function () {
	var logger = {
		info: function (text) {
			console.log('INFO: ' + text);
		},
		debug: function (text) {
			if(debugOn) {
				console.log('DEBUG: ' + text);
			}
		}
	}

	return logger;
})();