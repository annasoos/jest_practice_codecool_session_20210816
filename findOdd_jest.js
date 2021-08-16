/* Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times. */

const getNumber = require("./getNumber")

async function findOdd() {

	const A = await getNumber()

	if(!A.length) return null

	let a = []; // elements of A
	let b = []; // num of occurrences of elements 
	var prev;

	A.sort();

	for (let i = 0; i < A.length; i++) {
		if (A[i] !== prev) {
			a.push(A[i]);
			b.push(1);
		} else {
			b[b.length - 1]++;
		}
		prev = A[i];
	};

	for (let i = 0; i < b.length; i++) {
		if (b[i] % 2 === 1) {
			return a[i];
		};
	};
}

module.exports = findOdd;