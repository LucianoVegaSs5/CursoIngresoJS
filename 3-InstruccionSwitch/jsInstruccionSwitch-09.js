/*
Vega Luna Luciano Rafael DIV E
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/
function mostrar()
{
	var estacion;
	var destino;
	var aumento;
	var precioBase;
	var precioFinal;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	destino = destino.toLowerCase();
	estacion = estacion.toLowerCase();

	precioBase = 15000;

	switch (estacion)
		{
			case "invierno":
				switch (destino)
				{
					case "bariloche":
						aumento = 20;
						break;
					case "cataratas":
					case "cordoba":
						aumento = -10;
						break;
					case "mar del plata":
						aumento = -20;
						break;
				}
			break;

			case "verano":
				switch(destino)
				{
					case "bariloche":
						aumento = -20;
						break;
					case "cordoba":
					case "cataratas":
						aumento = 10;
						break;
					case "mar del plata":
						aumento = 20;
						break;
				}
			break;

			case "otoño":
			case "primavera":
				switch(destino)
				{
					case "bariloche":
					case "cataratas":
					case "mar del plata":
						aumento = 10;
						break;
					case "cordoba":
						aumento = 0;
						break;					
				}
			break;
		}

// si aumento es un numero positivo hace un aumento
// si aumento es negativo, se hace una resta es decir un descuento

	precioFinal = precioBase + (precioBase * aumento/100);

	alert("El precio de la estadia en esta estacion de año es " + precioFinal );


}//FIN DE LA FUNCIÓN

/*
aumento= 0;
descuento = 0;

aumento = 10 o 20;
descuento = 10 o 20;
 
 aumento = precio * (aumento/100);
 descuento = precio *(aumento/100);

 precioFinal  = precio + aumento - descuento
 */