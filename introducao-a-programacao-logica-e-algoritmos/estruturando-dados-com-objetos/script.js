/*
   Crie uma lista de pacientes

   Cada paciente dentro da lista, deverá conter

   nome
   idade
   peso
   altura

   Escreva um lista contento o nome dos pacientes suas idades, alturas e pesos
*/

const patients = [
    {
        name: "Matheus",
        age: 23,
        weight: 72,
        height: 190
    },
    {
        name: "Lucas",
        age: 24,
        weight: 80,
        height: 170
    },
    {
        name: "Pedro",
        age: 29,
        weight: 59,
        height: 160
    },
    {
        name: "Luana",
        age: 21,
        weight: 62,
        height: 165
    }
]

let patientInfo = ""

for(let patient of patients) {
    patientInfo += `${patient.name} tem ${patient.age} anos e pesa ${patient.weight} kg \n`
}

alert(patientInfo)

