'use strict';
module.exports = function (app, config) {
	app.listen(config.port, () => {
		console.log('start listening on port number ' + config.port);
	});
}