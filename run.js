module.exports = function (app, config) {
	app.listen(config.port, function () {
		console.log('start listening on port number ' + config.port);
	});
}