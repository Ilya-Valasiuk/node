module.exports = (function () {
	var calculateLargePrimeNubmer = function (number) {
		var i = 1;
		var currentPrimeNumber = 1;

		for(i; i < number; i++) {
			currentPrimeNumber = isPrimeNumber(i) ? i : currentPrimeNumber;
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