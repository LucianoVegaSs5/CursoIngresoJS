/*
Luciano Rafael Vega Luna DIV E
Parcial 2018 pto3
*/
function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;

	precio = prompt("Ingrese el precio");
	precio = parseFloat(precio);

	while(isNaN(precio))
	{
		precio = prompt("Error, reingrese un precio valido");
		precio = parseFloat(precio); 
	}

	descuento = prompt("Ingrese el porcentaje de descuento");
	descuento = parseFloat(descuento);

	while(isNaN(descuento) || descuento > 100 || descuento < 0)
	{
		descuento = prompt("Error, reingrese un descuento valido (1% al 100%)");
		descuento = parseFloat(descuento);
	}

	precioFinal = precio - precio *(descuento/100);

	document.getElementById("elPrecioFinal").value = precioFinal;

}
