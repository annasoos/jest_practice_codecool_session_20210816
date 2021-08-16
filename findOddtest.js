const findOdd = require("./findOdd");

let wasFailure = false;

const expect = (desc, funcResult, expectation) => {
	if (funcResult === expectation) {
		console.log("test passed")
	} else {
		console.log("test failed - " + desc + " but it was " + funcResult)
		wasFailure = true
	}
};

expect("should return only element", findOdd([1]), 1)
expect("should return first element if first is the one with odd appearance", findOdd([1, 2, 2]), 1);
expect("should return last element if first is the one with odd appearance", findOdd([1, 1, 2]), 2);
expect("should return 0 if array is empty", findOdd([]), null);
