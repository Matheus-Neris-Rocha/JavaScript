// throw

function sayMyName(name = '') {
    if(name === '') {
        throw new Error("Nome é obrigatório")
    }

    console.log(name)
}

// try...catch
try {
    console.log(sayMyName())
} catch(e) {
    console.log(e)
}

console.log('após ao try/catch')