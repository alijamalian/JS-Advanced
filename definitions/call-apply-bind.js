const wizard = {
	name: 'Merlin',
	health: 5,
	heal(num1, num2) {
		return (this.health += num1 + num2)
	}
}

const archer = {
	name: 'Robin Hood',
	health: 30
}

// wizard.heal.call(archer, 50, 30)
// wizard.heal.apply(archer, [50, 30])

console.log(archer.health)
const healArcher = wizard.heal.bind(archer, 50, 30)
healArcher()
console.log(archer.health)
