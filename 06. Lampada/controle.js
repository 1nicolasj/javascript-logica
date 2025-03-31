/**
*JS - Lâmpada em JS 
*@author Nicolas José
*/
function ON(){
	document.getElementById("lamp").src= "images/on.jpg";
}

function OFF(){
	document.getElementById("lamp").src= "images/off.jpg";
}

function BLINK(){
	var intervalo = 0;
	var contador = 0;
		while(contador < 10) {
			intervalo += 300;
			setTimeout("document.getElementById('lamp').src='images/on.jpg';", intervalo);
			intervalo += 300;
			setTimeout("document.getElementById('lamp').src='images/off.jpg';", intervalo);
			contador++;
	}
}