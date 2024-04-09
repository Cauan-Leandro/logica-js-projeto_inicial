function gerarTabela(){
    let linha = parseInt(prompt('Digite os numeros de linhas para sua tabela'))
    let colunas = parseInt(prompt('Digite o numero de colunas para sua tabela'))

    let tabela= []
    for(let i = 0; i < linhas; i++)
        tabela[i] = []
        for(let j = 0; j < colunas; j++){
            tabela[i][j] = gerarNumeroAleatorio(100)
        }
        return tabela;
}
console.table(gerarTabela());