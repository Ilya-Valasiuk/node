'use strict';
module.exports = (() => {
	let calculateLargePrimeNubmer = function (number) {
		let currentPrimeNumber = 1;

		for(let i = number-1; i > 1; i--) {
			if(isPrimeNumber(i)) {
				currentPrimeNumber = i;
				break;
			}
		}

		return currentPrimeNumber;
	}

	function isPrimeNumber(number) {
		let counter = 0;

		for(let j = 1; j <= number; j++) {
			if(number % j === 0) {
				counter++;
			}
			if(counter > 2) {
				break;
			}
		}

		return counter === 2 ? true : false;
	}
	
	return calculateLargePrimeNubmer;
})();