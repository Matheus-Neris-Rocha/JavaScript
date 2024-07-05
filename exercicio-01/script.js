/*
  Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** 
  e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

let number1 = Number(prompt("Digite o primeiro número"))
let number2 = Number(prompt("Digite o segundo número"))

let sum = number1 + number2
let sub = number1 - number2
let mult = number1 * number2
let div = number1 / number2
let rest = number1 % number2

let isequalNumber = number1 == number2 ? 'Os números inseridos são iguais' : 'Os números inseridos são diferentes'
let checkSum = ((number1 + number2) / 2) % 0 ? `A soma dos dois números é par: ${sum}` : `A soma dos dois números é ímpar: ${sum}`


alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplição dos dois números é: ${mult}`)
alert(`A divisão dos dois números é: ${div}`)
alert(`A resto da divisão dos dois números é: ${rest}`)
alert(checkSum)
alert(isequalNumber)



