//-Crie um Array multimensional com 3 arrays de 3 elementos cada. Entre com os valores de forma aleatória e apresente os valores.

let tabelaTres = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

function aleatorizar(tabelaTres){
    for(let i = 0; i < tabelaTres.lenght; i++)
        for(let j = o; j < tabelaTres[i].lenght; j++){
             tabelaTres[i][j] = gerarNumeroAleatorio(100)
            }
    return tabelaTres;   
} 

function gerarNumeroAleatorio(renge){
    return Math.floor(Math.random() * renge + 1);
}
console.table(aleatorizar(tabelaTres));