const array = [1, 2, 3, 4]
for (var i = 0; i < array.length; i++) {
	setTimeout(() => {
		console.log('I am at index ' + i)
	}, 3000)
}
// I am at index 4
// I am at index 4
// I am at index 4
// I am at index 4

// to solve:
// 1 - let keyword
for (let i = 0; i < array.length; i++) {
	setTimeout(() => {
		console.log('I am at index ' + array[i])
	}, 3000)
}

// I am at index 1
// I am at index 2
// I am at index 3
// I am at index 4

// closure
for (var i = 0; i < array.length; i++) {
	;(function(clouserI) {
		setTimeout(() => {
			console.log('I am at index ' + array[clouserI])
		}, 3000)
	})(i)
}
// I am at index 1
// I am at index 2
// I am at index 3
// I am at index 4