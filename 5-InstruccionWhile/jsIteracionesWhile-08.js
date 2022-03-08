/*
Luciano Rafael Vega Luna DIV E
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;

	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta ==  "si")
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado >= 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else 
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}

		respuesta = prompt("¿Usted quiere agregar un numero?");
		respuesta = respuesta.toLowerCase();
		
		while(!(respuesta == "si" || respuesta == "no"))
		{
			respuesta = prompt("Error,¿Usted quiere agregar un numero?(si o no)");
			respuesta = respuesta.toLowerCase();
		}
	}

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN