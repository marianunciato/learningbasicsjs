// parametros de função

                //2     //2
function soma(numero1, numero2) {
    return numero1 + numero2;
}

console.log(soma(2, 2))
console.log(soma(245, 20))
console.log(soma(-500,60))

// parametros x argumentos

// ordem dos parametros

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}.`;
}

// console.log(nomeIdade("Maria Eduarda", 19))

function soma(numero1, numero2) {
    return numero1 + numero2;
}

function multiplica(numero1 = 1, numero2 = 2) {
    return numero1 * numero2;
}


console.log(multiplica(soma(4, 5)))