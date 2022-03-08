/*Luciano Rafael VegA Luna DIV E
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	numeroIngresado = parseInt(numeroIngresado);

	while(isNaN(numeroIngresado) || (numeroIngresado < 0 || numeroIngresado > 9))
	{
		numeroIngresado =  prompt("Error, reingrese el numero entre 0 y 9.");
		numeroIngresado = parseInt(numeroIngresado);
	}
	
	document.getElementById("txtIdNumero").value =  numeroIngresado + "es valido";
	
}//FIN DE LA FUNCIÓN

//isNaN = Is a Non a Number
//en este caso si la variable no es un numero entra al while, por eso se usa.