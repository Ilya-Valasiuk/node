var primeNumber = require('./../scripts/largePrimeNumber/largePrimeNumber');

exports.calculate = function (test) {
	test.equal(primeNumber(6), 5);
	test.equal(primeNumber(129), 127);
	test.equal(primeNumber(3), 2);
	test.done();
}