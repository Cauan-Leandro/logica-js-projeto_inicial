//crie um programa que o usuario entra com dois valores e o sistema soma e imprime em um alert

let primeiro = parseInt (prompt (`Digite o primeiro numero para a soma`));
let segundo = parseInt (prompt (`Digite o segundo numero para a soma`));
let terceiro = parseInt (prompt (`Digite o terceiro numero para a soma`));

//soma dos valores
let soma = (primeiro + segundo + terceiro);
let multiplicação  = (primeiro * segundo * terceiro);
alert (`Seu resultado é ${soma}`);
alert (`Seu resultado é ${multiplicação}`);