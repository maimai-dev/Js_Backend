// 1 - 

let saldo = 100;
let deposito = 30;
let saque = 10;

let operacao = 100 + 30 - 10;
console.log(operacao);

// 3 -

const usuarioLogado = true;
const permissoes = false;

if(usuarioLogado && permissoes === true){
    console.log('pode acessar');
}else{
    console.log('nao pode');   
}

// 4 - 

const teste2 = false;
const teste1 = true;

if (teste1 || teste2 === true) {
    console.log('Verdade');
}else{
    console.log('mentira');
}

// 5 - 

const idadeUsuario = 14;
const idadeMinima = 18;

if (idadeUsuario === idadeMinima) {
    console.log('Pode ir ao show');
} else {
    console.log('Não pode ir ao show');
}