/*
   Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

   "Paciente X possui o IMC de: Y"

   Onde X é o nome do paciente e Y é o IMC desse paciente

   Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura)*/

const patients = [{
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

function IMC (weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {
    return `
        Paciente ${patient.name} possiu o IMC de 
        ${IMC(patient.weight, patient.height)}
    `
}

for (let patient of patients) {
    let IMCmessage = printPatientIMC(patient)
    alert(IMCmessage)
}

