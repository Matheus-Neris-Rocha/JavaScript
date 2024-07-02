// const e let são locais e só funcionam no escopo onde foi criada
let y = 1;

{
    let y = 0
    console.log('> existe y? ', y)
}

console.log('> existe y depois do bloco? ', y)

const x = 1

{ 
    const y = 1
    console.log('> existe y ', y)
}

console.log('> existe y depois do bloco? ', y)