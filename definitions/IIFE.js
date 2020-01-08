//IIFE

;(function() {
	console.log('Ali')
})()

var z = 1
var script = (function() {
	function a() {
		return 5
	}
	return {
		a: a
	}
})()
var zz = 2
var zzy = 3
var z = 1000
function a() {
	return 'hahaha'
}

console.log(a())
console.log(script.a())
