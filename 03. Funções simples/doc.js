/**
 * JS: Função simples
 * @author Nicolas José
 */

function ola(){
    var nome;
    nome = prompt("Informe o seu nome: ");
    alert("Olá, " + nome);
}

function soma(){
    x = parseFloat(frmSoma.txtX.value);
    y = parseFloat(frmSoma.txtY.value); 
    var soma = x+y;
    alert("Soma: " + soma);
}