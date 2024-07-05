/*
  Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

  Mensagem: A média do(a) aluno(a) X é: XX 
    Parabéns, aluno(X)! Você foi aprovado(a) no curso!

      A média do(a) aluno(a) X é: XX
      Não foi dessa vez, aluno(x)!Tente novamente!
*/


let students = [
  {
    name: "Matheus",
    note1: 6.75,
    note2: 10
  },
  {
    name: "Pedro",
    note1: 2,
    note2: 4
  },
  {
    name: "Aline",
    note1: 6,
    note2: 7
  },
  {
    name: "Luana",
    note1: 2,
    note2: 0
  },
]

function calcAverage(note1, note2) {
  return (note1 + note2) / 2
}

function printAvaregeApproved(student, average) {
  return `
    A média do(a) aluno(a) ${student.name} é: ${average}
    Parabéns, ${student.name}! Você foi aprovado(a) no curso!
  `
}

function printAvaregedisapproved(student, average) {
  return `
    A média do(a) aluno(a) ${student.name} é: ${average}
    Não foi dessa vez, ${student.name}! Tente novamente!
  `   
}

for(student of students) {
  let average = calcAverage(student.note1, student.note2).toFixed(2);
  let ptintMessage = average > 7 ? `${printAvaregeApproved(student,average)}` : `${printAvaregedisapproved(student,average)}`
  alert(ptintMessage)
}