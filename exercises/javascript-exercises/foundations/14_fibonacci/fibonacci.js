const fibonacci = function(value) {
	const num = parseInt(value);

	let current = 1;
	let prev = 1;
	let next = 0

	if (num === 0) return 0;
	if (num < 0) return "OOPS";
	if (num < 2) return 1;

	for (let i = 2; i < num; i++) {
		next = current + prev;
		prev = current;
		current = next;
	}
	return current;
};

// Do not edit below this line
module.exports = fibonacci;
