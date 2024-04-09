function calcularSomaListaNumeros() {
    let inputLista = prompt("Digite uma lista de números separados por vírgula:");

    if (inputLista === null || inputLista.trim() === "") {
        alert("Nenhum número foi inserido.");
        return;
    }

    let numeros = inputLista.split(",");

    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        let numero = parseFloat(numeros[i]);
        if (!isNaN(numero)) {
            soma += numero;
        }
    }

    alert("A soma dos números na lista é: " + soma);
}

calcularSomaListaNumeros();