console.log('1')
setTimeout(() => {
	console.log('2')
}, 4000)

console.log('3')

/* */
function achieveNirvana() {
	console.log('You are enlightend')
}

function c() {
	setTimeout(achieveNirvana, 3000)
}

function b() {
	c()
}

function a() {
	b()
}

a()
