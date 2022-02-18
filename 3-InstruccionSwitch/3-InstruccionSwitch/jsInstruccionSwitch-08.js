/*
Luciano Rafael Vega Luna
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/function mostrar()
{
	var destino;
	var temperatura;

	destino = document.getElementById("txtIdDestino").value
	destino = destino.toLowerCase();

	switch(destino)
	{
		case "bariloche":
			temperatura = "Frio";
			break;
		case "ushuaia":
			temperatura = "Frio";
			break;
		case "mar del plata":
			temperatura = "Calor";
			break;
		case "cataratas":
			temperatura = "Calor";
			break;

	} 
	alert("En su destino hace " + temperatura +".");

}//FIN DE LA FUNCIÓN