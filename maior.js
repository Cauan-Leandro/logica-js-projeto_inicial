//Escreva uma função que aceite dois números como entrada e retorne o maior número.

const maiorNumero = () => {
    // Solicita que o usuário insira o primeiro número
    let num1 = parseInt(prompt("Digite o primeiro número:"));

    // Solicita que o usuário insira o segundo número
    let num2 = parseInt(prompt("Digite o segundo número:"));

    // Retorna o maior número entre num1 e num2
    return Math.max(num1, num2);
};

// Chama a função e armazena o resultado em uma variável
let numeroMaior = maiorNumero();

// Exibe o maior número
console.log("O maior número é:", numeroMaior);