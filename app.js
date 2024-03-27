<<<<<<< HEAD
alert("bem vindo ao jogo do numero secreto");

let numeroSecreto = 3;
let numeroDigitado = parseInt(prompt("digite um numero de 1 a 5"));

if(numeroDigitado === numeroSecreto){
    alert('Parabéns voce acertou o numero secreto! :)');
}else if(numeroDigitado > numeroSecreto){
    alert ('Voce digitou um numero maior que o numero secreto');
} else {
    alert ('Voce digidou um numero menor que o numero secreto!');
}


=======
alert('Bem vindo ao jogo do número secreto');

let numeroSecreto = 3;
let numeroDigitado = parseInt(prompt('Digite um número de 1 a 5'));

if(numeroDigitado === numeroSecreto){
    alert('Parabéns, você acertou!');
} else if(numeroDigitado > numeroSecreto){
    alert('Você digitou um número maior que o número secreto');
} else {
    alert('Você digitou um número menor que o número secreto');
}
>>>>>>> cf6240998e1358a50cf71636d7744469164cfa22
