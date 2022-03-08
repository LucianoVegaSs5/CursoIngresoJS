/*
Realizar el algoritmo que permita iterar el ingreso de dos datos,
 una letra y un número entre -100 y 100 (validar) hasta que
 el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
*/

function mostrar()
{
	var letra;
	var numero;
	var respuesta;

	var contadorPares = 0;
	var contadorImpares = 0;
	var contadorCeros = 0;
	var contadorNumerosPositivos = 0;
	var acumuladorNumerosPositivos = 0;
	var acumuladorNumerosNegativos = 0;

	var flagPrimeroNumero = 1;
	var numeroMaximo;
	var letraMaxima;
	var numeroMinimo;
	var letraMinima;

	do
	{	
		letra = prompt("Ingrese una letra");

		while(!(isNaN(letra)))
		{
			letra = prompt("Error, porfavor ingrese una letra");
		}

		numero = prompt("Ingrese un numero entre -100 y 100");
		numero = parseInt(numero);

		while(isNaN(numero) || numero > 100 || numero < -100)
		{
			numero = prompt("Error, ingrese un numero entre -100 y 100");
			numero = parseInt(numero);
		}

		if((0 ==(numero % 2) && numero != 0))
		{
			contadorPares = contadorPares + 1;
		}
		else
		{
			contadorImpares = contadorImpares + 1;
		}

		if(numero > 0)
		{
			contadorNumerosPositivos + 1;
			acumuladorNumerosPositivos = acumuladorNumerosPositivos + numero;
		}
		else if(numero == 0)
		{
			contadorCeros = contadorCeros + 1;
		}
		else 
		{
			acumuladorNumerosNegativos = acumuladorNumerosNegativos + numero;
		}

		if(numero > numeroMaximo || flagPrimeroNumero == 1)
		{
			numeroMaximo = numero;
			letraMaxima = letra;
		}

		if(numero < numeroMinimo || flagPrimeroNumero == 1)
		{
			numeroMinimo = numero;
			letraMinima = letra;
			flagPrimeroNumero = 0;
		}

		respuesta = prompt("¿Desea continuar? (si/no)")
		respuesta = respuesta.toLowerCase();

	}while(respuesta == "si");

	document.write("La cantidad de numeros pares es " + contadorPares + "<br>");
	document.write("La cantidad de numeros impares es " + contadorImpares + "<br>");
	document.write("La cantidad de ceros es " + contadorCeros + "<br>");
	document.write("El promedio de numeros positivos es " + acumuladorNumerosPositivos/contadorNumerosPositivos + "<br>");
	document.write("La suma de todos los numeros negativos es " + acumuladorNumerosNegativos + "<br>");
	document.write("El numero Maximo es " + numeroMaximo + " y su letra es " + letraMaxima + "<br>");
	document.write("El numero Minimo es " + numeroMinimo + " y su letra es " + letraMinima + "<br>");

}
