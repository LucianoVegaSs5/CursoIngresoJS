/*
Luciano Rafael Vega Luna DIV E
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/

function mostrar()
{
	//tomo el mes
	var mensaje;
	var mes 
	mes = document.getElementById("txtIdMes").value;
	mes = mes.toLowerCase()

	switch(mes) //enteros, strings, caracteres ''
	{
		case "enero":
			mensaje = "que comiences bien el año!!!.";
			break;
		case "marzo":
			mensaje = "a clases!!!.";
			break;
		case "julio":
			mensaje = "se vienen las vacaciones!!!.";
			break;
		case "diciembre":
			mensaje = "Felices fiesta!!!.";
			break;
		default:
			mensaje = "No hay eventos en este mes";
			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN