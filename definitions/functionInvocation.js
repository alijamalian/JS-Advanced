// function Expression
var canada = () => {
	console.log('cold')
}

// Function Declaration
function india() {
	console.log(arguments)

	console.log('warm')
}

// canada()
india()
/*
//-----------------
function marry(person1, person2) {
	console.log('arguments: ', arguments)
	console.log(Array.from(arguments))

	return `${person1} is now married to ${person2}`
}

resault = marry('Tom', 'Tina')
console.log(resault)

//-----------------//
function marry2(...args) {
	console.log('arguments: ', arguments)
	console.log(Array.from(arguments))

	return `${args[0]} is now married to ${args[1]}`
}

resault2 = marry2('Tom', 'Tina')
console.log(resault2)
*/
