// 1. functions can be assigned to variables and properties of objects
var stuff = function() {}

// 	2. we can also pass functions as arguments into a function.

function a(fn) {
	fn()
}
a(function() {
	console.log('hi there')
})

// we can return function as a values from other functions.
function b() {
	return function c() {
		console.log('bye')
	}
}

var d = b()
d()
