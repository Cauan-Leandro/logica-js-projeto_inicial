//crie um programa em que o usuario digita sua idade e aparece um alerta se ele e maior ou menor
let idade = parseInt (prompt (`Digite sua idade`));
let maioridade = 18;

if (idade === maioridade) {
    alert (`Acesso permitido`);

}else if (idade < maioridade){
    alert(`Acesso negado! voce ainda não tem idade suficiente para entrar no site!`);
}
