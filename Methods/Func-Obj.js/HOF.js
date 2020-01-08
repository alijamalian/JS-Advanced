/*

// function

function letAdamLogin() {
	//make system slow
	let array = []
	for (let i = 0; i < 10000000; i++) {
		array.push(i)
	}
	return 'Access Granted to Adam'
}
console.log(letAdamLogin())

function letEvaLogin() {
	//make system slow
	let array = []
	for (let i = 0; i < 10000000; i++) {
		array.push(i)
	}
	return 'Access Granted to Eva'
}
console.log(letEvaLogin())
// problem: do not reply yourself , and we have to do for each user !!!!!!!
*/

/*
// ==> instead a function we use function to accept parameters /superpower

const giveAccessTo = name => 'Access Granted to ' + name

function letUserLogin(user) {
	//make system slow
	let array = []
	for (let i = 0; i < 10000000; i++) {
		array.push(i)
	}
	return giveAccessTo(user)
}
console.log(letUserLogin('someUser'))
*/

// Higher Order function
/*
const giveAccessTo = name => 'Access Granted to ' + name

function authenticate(verify) {
	let array = []
	for (let i = 0; i < verify; i++) {
		array.push(i)
	}
	return true
}

function letPerson(person, fn) {
	if (person.level === 'admin') {
		fn(500000)
	} else if (person.level === 'user') {
		fn(100000)
	}
	return giveAccessTo(person.name)
}
const resault = letPerson({ level: 'user', name: 'Tim' }, authenticate)
console.log(resault)
// we have power to tell it what to do user and plus function
*/

const multiplyBy = function(num1) {
	return function(num2) {
		return num1 * num2
	}
}
const multiplyByTwo = multiplyBy(2)
console.log(multiplyByTwo(8))
