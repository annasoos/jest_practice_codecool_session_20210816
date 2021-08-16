const sum = require("./sum");

const wasFailure = false;

const expect = (desc, funcResult, expectation) => {
	if (funcResult === expectation) {
		console.log("test passed")
	} else {
		console.log("test failed - " + desc + " but it was " + funcResult)
		wasFailure = true
	}
};

expect("1 + 2 should be 3", sum(1, 2), 3);
expect("10 + 3 should be 13", sum(10, 3), 13);

if (wasFailure) throw "There was a failure";