// 1 . Declare uma variável de nome weight

let weight

// 2. Que tipo de dado é a variável acima?

console.log(typeof weight)

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (interger)
        * stars: Number (float)
        * isSubscribed: Boolean
*/

let name = "Matheus"
let age = 23
let starts = 8.1
let isSubscribed = true

/* 
    4. A variável student abaixo é de que tipo de dado?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3

    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/

let student = {};

console.log(typeof student)

student = {
     name: "Matheus",
     age: 23,
     weight: 74.8,
     isSubscribed: true
}

console.log(student)

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

/* 
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja,
    somente o Array vazio
*/

let students = []

/* 6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4.
    (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

students = [
    student
]

console.log(students)

/*
    7.  Coloque no console o valor da posição zero do Array acima
*/

console.log(student[0])


/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/

const lucas = {
    name: "Lucas",
    age: 22,
    weight: 55.8,
    isSubscribed: false
}

students[1] = lucas

students = [
    students
]

console.log(students)

/* 
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? 
    Após sua resposta, rode o código e veja se você acertou?

    console.log(a)
    var a = 1;
*/

console.log(a)
var a = 1;