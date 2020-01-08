/*
let view

function intiialize() {
	view = '⛰'
	console.log('view has been set!')
}
intiialize()
intiialize()
intiialize()
console.log(view)
*/

let view

function initialize() {
	let called = 0
	return function() {
		if (called > 0) {
			return
		} else {
			view = '⛰'
			called++
			console.log('view has been set!')
		}
	}
}
const stratOnce = initialize()
stratOnce()
stratOnce()
stratOnce()
console.log(view)
