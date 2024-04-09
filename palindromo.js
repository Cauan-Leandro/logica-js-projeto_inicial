function verificarPalindromo() {
    // Solicita que o usuário insira uma palavra
    let palavra = prompt("Digite uma palavra para verificar se é um palíndromo:");

    // Converte a palavra para minúsculas e remove espaços em branco
    palavra = palavra.toLowerCase().replace(/\s/g, '');

    // Converte a palavra em um array de caracteres
    let caracteres = palavra.split('');

    // Inverte o array de caracteres
    let caracteresInvertidos = caracteres.slice().reverse();

    // Verifica se o array de caracteres original é igual ao array invertido
    return caracteres.join('') === caracteresInvertidos.join('');
}

// Chama a função e armazena o resultado em uma variável
let resultado = verificarPalindromo();

// Exibe o resultado
if (resultado) {
    console.log("A palavra é um palíndromo.");
} else {
    console.log("A palavra não é um palíndromo.");
}