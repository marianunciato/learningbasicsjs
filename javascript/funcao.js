// let x = "";
// console.log(x);
// x = "oi";

// DECLARAÇÃO DE FUNÇÃO

// 1) declara a função

function imprimeTexto(texto) {
    console.log(texto)
}

// 2) executa a função (1 ou + vezes)

imprimeTexto("texto");
imprimeTexto("outro texto");

// três formas de escrever funções

function soma() {
    
    // return tem que ser a ultima coisa entes de fechar o bloco (se não as coisas a seguir não serão executadas)   
    return 2 + 2;
}

console.log(soma())