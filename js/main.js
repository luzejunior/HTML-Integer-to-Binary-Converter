const textResult = document.getElementById('result')
const integerValue = document.getElementById('inputNumber')

function convert() {
	textResult.innerHTML = ""

	if (integerValue.value == "" || isNaN(integerValue.value)) {
		return
	}

	var value = integerValue.value
	while (value > 0) {
		var remainder = value%2
		textResult.innerHTML += remainder
		value = Math.floor(value/2)
		console.log(value)
	}

	textResult.innerHTML = textResult.innerHTML.split("").reverse().join("");
}
