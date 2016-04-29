module.exports = () => {
	return {
		print: (text, logLevel = 'info') => {
			console.log(logLevel + ': ' + text);
		}
	}
}