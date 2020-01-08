function two() {
	var isValid
}

function one() {
	var isValid = true
	two()
}

var isValid = false

resault = one()
console.log(resault)
