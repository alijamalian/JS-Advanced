const obj = {
	name: 'Billy',
	sing() {
		console.log('a', this)
		var anotherFunc = function() {
			console.log('b', this)
		}
		anotherFunc()
	}
}

// ES6
const obj = {
	name: 'Billy',
	sing() {
		console.log('a', this)
		var anotherFunc = () => {
			console.log('b', this)
		}
		anotherFunc()
	}
}

// bind() Old Method before ES6
const obj = {
	name: 'Billy',
	sing() {
		console.log('a', this)

		var anotherFunc = function() {
			console.log('b', this)
		}
		return anotherFunc.bind(this)
	}
}

// self Old Method before ES6
const obj = {
	name: 'Billy',
	sing() {
		var self = this
		console.log('a', this)
		var anotherFunc = function() {
			console.log('b', self)
		}
		anotherFunc()
	}
}
