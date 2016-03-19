module.exports = (function () {
	var calculateLargePrimeNubmer = function (number) {
		var i = number-1;
		var currentPrimeNumber = 1;

		for(i; i > 1; i--) {
			if(isPrimeNumber(i)) {
				currentPrimeNumber = i;
				break;
			}
		}

		return currentPrimeNumber;
	}

	function isPrimeNumber(number) {
		var counter = 0;
		var j = 1;

		for(j; j <=number; j++) {
			if(number % j === 0) {
				counter++;
			}
		}

		return counter === 2 ? true : false;
	}
	

	return calculateLargePrimeNubmer;
})();