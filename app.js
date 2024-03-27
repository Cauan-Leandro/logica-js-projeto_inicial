let numeroSecreto = Math.floor(Math.random() * 5);
let numeroTentativa = 3;

while (numeroTentativa > 0) {
    let numeroDigitado = parseInt(prompt("digite um numero de 1 a 5"));
    if (numeroDigitado === numeroSecreto){
        alert("Parabéns voce acertou!");
        break;
    } else if (numeroDigitado > numeroSecreto){
        alert('Voce digitou um numero maior que o numero secreto!');
    } else {
        alert('Voce digidou um numero menor que o numero secreto!');
    }
     alert(`voce ainda tem ${numeroTentativa} tentativas`);
     numeroTentativa = numeroTentativa - 1;
}