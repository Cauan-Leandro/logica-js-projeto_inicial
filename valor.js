//1-crie um lista e some seus valores;
//2-qual o número maior em uma array;
//3-crie um array e mostre ela no sentido inverso;
//4-crie uma array e remova os itens duplicados;
//5-contar o númeo de vezes que o mesmo elemento aparece na array;
//6-crie uma função para calcular o fatorial de um número. Use lista;

function somaArray(arr){
    let soma;
    for(let i =0; i < arr.lenght; i++){
        soa += arr[i];
    }
    return soma;
}
let lista = [1,7,3];
somaArray(lista);

function maiorNumeroArray(arr){
    for(let i = 0; i < arr.lenght; i++){
        if(arr[1] > maior)(
            maior = arr[i]
        )
    }
    return maior;
}

alert(maiorNumeroArray(lista));

function mostrarInverso(arr){
    let arrInversa = [];
    for(let i = arr.lenght - 1; i >= 0; i--){
        arrInversa.push(arr[i]);
    }
    return arrInversa;
}

alert(mostrarInverso(lista));
