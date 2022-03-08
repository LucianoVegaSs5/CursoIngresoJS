/*
Luciano Rafale Vega Luna DIV E
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/

/*
Julio y Agosto: "Abrigate que hace frio."
Septiembre hasta febereo: "Ya pasamos el fio, ahora hace calor!!!."
Marzo a Junio: "Falta para el invierno."
*/


function mostrar()
{
	//tomo el mes
	var mes;
	var mensaje;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		case "Enero":
		case "Feberero":
			mensaje = "Ya pasamos el fio, ahora hace calor!!!.";
			break;
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio.";
			break;
		default:
			mensaje = "Falta para el invierno.";
			break;
	}
	alert(mensaje);


}//FIN DE LA FUNCIÓN