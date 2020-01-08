console.log('1-------')

var teddy = 'bear'
function sing() {
	console.log('oh la la la')
}

/* -------------------*/
var favouritFood = 'grapes'

var foodThoughts = function() {
	console.log('Original favourit food: ' + favouritFood)

	var favouritFood = 'sushi'

	console.log('New favourit food: ' + favouritFood)
}
foodThoughts()

/* -----------------------*/
function bigBrother() {
	function littleBrother() {
		return 'it is me!'
	}
	return littleBrother()
	function littleBrother() {
		return 'no me!'
	}
}

var resault = bigBrother()
console.log(resault)
