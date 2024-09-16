// 1 -

const exibeSaudacao = function (nome) {
    return `Bem vindo, ${nome}`;
}

console.log(exibeSaudacao('Maiara'));
console.log(exibeSaudacao('Gustavo'));

// 2 - 

const verificarIdade = function (idade){
    if (idade >= 18) {
        return `Você e maior de idade`
    } else {
        return `Você e menor de idade`
    }
}

console.log(verificarIdade(18));
console.log(verificarIdade(13));


