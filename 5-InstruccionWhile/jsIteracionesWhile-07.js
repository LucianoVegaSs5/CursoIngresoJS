/*
Luciano Rafael Vega Luna DIV E
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	var promedio;

	contador = 0;
	acumulador = 0;
	respuesta = "si";

	while(respuesta == "si")
	{

		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador =  acumulador + numeroIngresado;
		contador = contador + 1;

		respuesta = prompt("¿Usted quiere agregar un numero?");
		respuesta = respuesta.toLowerCase();
		
		while(!(respuesta == "si" || respuesta == "no"))
		{
			respuesta = prompt("Error,¿Usted quiere agregar un numero?(si o no)");
			respuesta = respuesta.toLowerCase();
		}

	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;

}//FIN DE LA FUNCIÓN