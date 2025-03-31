/**
 * JS - Calculadora Flex
 * @author Nicolas José
 */
var etanol,gasolina;

function calcular(){
    etanol = parseFloat(frmFlex.txtEtanol.value.replace("," , "."));
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace("," , "."));
    if(etanol < 0.7 * gasolina){
        document.getElementById("status").src="etanol.png";
    } else if( etanol == 0.7 * gasolina){
        document.getElementById("status").src="neutro.png";
    } else{
        document.getElementById("status").src="gasolina.png";
    }
}

function resetar(){
    document.getElementById("status").src="neutro.png";
}