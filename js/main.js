const textResult = document.getElementById('result')
const integerValue = document.getElementById('inputNumber')

function convert() {
	textResult.innerHTML = ""

	if (integerValue.value == "" || isNaN(integerValue.value)) {
		return
	}

	if (!integerValue.value.includes(".")) {
		textResult.innerHTML = calculate(integerValue.value)
	} else {
		let splitNumber = integerValue.value.split('.');
		textResult.innerHTML = calculate(splitNumber[0])
		textResult.innerHTML += "."
		textResult.innerHTML += calculateDecimal(splitNumber[1])
	}
}

function calculate(value) {
	var auxText = ""

	if (value == 0) {
		return "0"
	}

	while (value > 0) {
		var remainder = value % 2
		auxText += remainder
		value = Math.floor(value / 2)
	}

	return auxText.split("").reverse().join("");
}

function calculateDecimal(value) {
	var auxText = ""
	value = parseFloat("0." + value)

	while (value != 0.0) {
		value = value * 2
		if (value >= 1.0) {
			auxText += "1"
			value = value - 1
		} else {
			auxText += "0"
		}
	}

	return auxText
}
