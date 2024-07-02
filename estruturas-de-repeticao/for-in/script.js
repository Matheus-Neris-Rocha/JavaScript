// Estrutura de repetição
// for...in

let person = {
    name: 'Matheus',
    age: 23,
    weight: 80.0
}

for(let property in person) {
    console.log(property)
    console.log(person.name)
}