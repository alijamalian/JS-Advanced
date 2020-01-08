function one() {
	return 1
}
one()

const obj = {
	two() {
		// two: function(){
		return 2
	}
}

obj.two()

function three() {
	return 3
}

three.call()

// Function Constructor
//const four = new Function('return 4')
const four = new Function('num', 'return num')

console.log(four(4))
