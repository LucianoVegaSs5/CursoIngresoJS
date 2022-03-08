/*
Luciano Rafael Vega Luna DIV E
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, 
informar si "Se viaja" o "No se viaja" a ese lugar
en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
en Verano: Se viaja a Mar del plata y Cataratas solamente
en Otoño: Se viaja a todos los destinos.
primavera: solo no se viaja a Bariloche
*/
function mostrar()
{
	var estacion;
	var destino;
	var viaje;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	destino = destino.toLowerCase();
	estacion = estacion.toLowerCase();

	switch(estacion)
	{
		case "invierno":
			switch(destino)
			{	
				case "bariloche":
				viaje = "se viaja";
				break;
				default:
				viaje = "no se viaja";
				break;
			}
		break;
		case "verano":
			switch(destino)
			{
				case "cataratas":
				case "mar del plata":
					viaje = "se viaja";
					break;
				default:
					viaje = "no se viaja";
					break;
			}
		break;		
		case "otoño":
			switch(destino)
			{
				case "destinoInexistene":		
					viaje = "no se viaja";
					break;
				default:
					viaje = "se viaja";
					break;
			}
		break;
		default:
			switch(destino)
			{
				case "bariloche":
				 	viaje = "no se viaja";
				 	break;
				 default:
				 	viaje = "se viaja";
			}
		break;

		
	}
	alert("En esta época del año " + viaje +"." )


}//FIN DE LA FUNCIÓN

//Se puede poner solo el default, para que todas las variables den el mismo proceso:

/*case "otoño":
			switch(destino)
			{
				default:
					viaje = "se viaja";
					break;
			}
*/