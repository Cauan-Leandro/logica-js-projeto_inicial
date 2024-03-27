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


