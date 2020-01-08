/*
function findName() {
	var b = 'b'
	return printName()
}

function printName() {
	var c = 'c'
	return 'Andrei neagoie'
}

function sayMyName() {
	var a = 'a'
	return findName()
}

var resault = sayMyName()
console.log(resault)
*/

function sayMyName() {
	var a = 'a'
	return function findName() {
		var b = 'b'
		return function printName() {
			var c = 'c'
			console.log(a, b, c)
			console.log(d)

			return 'Andrei Neagoie'
		}
	}
}
var d = 'd'
var resault = sayMyName()()()
console.log(resault)
