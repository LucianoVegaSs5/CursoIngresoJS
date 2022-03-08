/*
Luciano Rafael Vega Luna DIV E
Al selecionar un destino, 
indicar el punto cardinal de nuestro pais en donde se encuentra
Norte, Sur, Este u Oeste
*/
function mostrar()
{
	var destino;
	var puntoCardinal;

	destino = document.getElementById("txtIdDestino").value
	destino = destino.toLowerCase();

	switch(destino)
	{
		case "bariloche":
			puntoCardinal = "Oeste";
			break;
		case "ushuaia":
			puntoCardinal = "Sur";
			break;
		case "mar del plata":
			puntoCardinal = "Este";
			break;
		case "cataratas":
			puntoCardinal = "Norte";
			break;

	}
	alert("Su destino queda en el " + puntoCardinal + " del país.");
}//FIN DE LA FUNCIÓN