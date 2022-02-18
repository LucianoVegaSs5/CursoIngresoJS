/*
Luciano Rafael Vega Luna DIV E
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/
function mostrar()
{
	var mensaje;
	var mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje = "Este mes tiene 31 días.";
			break;
		case "Febrero":
			mensaje = "Este mes tiene 28 días.";
			break;
		default:
			mensaje = "Este mes tiene 30 días.";
			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN