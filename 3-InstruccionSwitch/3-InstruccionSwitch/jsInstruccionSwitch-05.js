/*
Luciano Rafael Vega Luna DIV E
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/
function mostrar()
{
	//tomo la hora
	var hora;
	var mensaje;
	
	hora = document.getElementById("txtIdHora").value;
	hora = parseInt(hora);

	switch(hora)
	{
		case 11:
		case 10:
		case 9:
		case 8:
		case 7:
			mensaje =  "Es de manñana";
			break;
		default:
			mensaje = "No es de mañana";
			break;
	}
	alert(mensaje);



}//FIN DE LA FUNCIÓN