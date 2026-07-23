const palindromes = function (string) {
	return string === string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
