## let e const 
```js
// const e let são locais e só funcionam no escopo onde foi criada
console.log('> existe y antes do bloco? ', y)

{
    let y = 0
}

console.log('> existe x depois do bloco? ', y)
```