const getNumber = async () => {
	const response = await fetch("http://numbers.com/api")
	const numbers = await response.json()
	return numbers
}

module.exports = getNumber;