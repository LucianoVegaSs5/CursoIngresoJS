/*
10 bis
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.(x)
2-Suma de los positivos.(x)
3-Cantidad de positivos. (x)
4-Cantidad de negativos. (x)
5-Cantidad de ceros.(X)
6-Cantidad de números pares.(x)
7-Promedio de positivos.(X)
8-Promedios de negativos.(X)
9-Diferencia entre positivos y negativos, (positivos-negativos).(X)
10-Marcar maximos y minimos.(x)
 */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var acumuladorNegativos;
	var contadorNegativos;
	var contadorCeros;
	var diferencia;
	var promedioPositivos;
	var promedioNegativos;
	var contadorPares;
	var ingresoPrimerNumero;
	var numeroMinimo;
	var numeroMaximo;

	acumuladorNegativos = 0;
	contadorNegativos = 0;

	acumuladorPositivos = 0;
	contadorPositivos = 0;

	contadorCeros = 0;

	contadorPares = 0;

	ingresoPrimerNumero = 1;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		//preguntamos si es negativo, preguntamos una sola vez
		if(numeroIngresado < 0)
		{
			//-- sumo los negativos
			acumuladorNegativos =  acumuladorNegativos + numeroIngresado;
			//-- cuento los negativos
			contadorNegativos =  contadorNegativos + 1;
		}

		//pregunto si es positivo, pregunto una sola vez
		else if (numeroIngresado > 0)
		{
			//-- sumo los positivos
			acumuladorPositivos = acumuladorPositivos + numeroIngresado;
			//--cuento los positivos
			contadorPositivos = contadorPositivos + 1;
		}
			//entonces es cero
		else
		{
			//--cuento los ceros
			contadorCeros =  contadorCeros + 1;
		}

		//preguntar si es par, pregunto una sola vez
		if( 0 ==(numeroIngresado % 2))
		{
			//cuento los pares
			contadorPares = contadorPares + 1;
		}

		if(numeroMinimo > numeroIngresado || ingresoPrimerNumero == 1)
		{
			numeroMinimo = numeroIngresado;
		}
		 if(numeroMaximo < numeroIngresado || ingresoPrimerNumero == 1)
		{
			numeroMaximo = numeroIngresado;
			ingresoPrimerNumero = 0;
		}


		respuesta = prompt("desea continuar?");
		respuesta = respuesta.toLowerCase();
		
		while(!(respuesta == "si" || respuesta == "no"))
		{
			respuesta = prompt("Error,¿Usted desea continuar?(si o no)");
			respuesta = respuesta.toLowerCase();
		}

	}//fin del while

	//promedio de positivos

	promedioPositivos = acumuladorPositivos / contadorPositivos; 

	if(isNaN(promedioPositivos))
	{
		promedioPositivos = 0;
	}

	//promedio de negativos

	promedioNegativos = acumuladorNegativos / contadorNegativos;

	if(isNaN(promedioNegativos))
	{
		promedioNegativos = 0;
	}

	//diferencia de positivos y negativos
	diferencia =  acumuladorPositivos + acumuladorNegativos;

	document.write("la suma de negativos es :"+ acumuladorNegativos + "<br>");
	document.write("la suma de positivos es :"+ acumuladorPositivos + "<br>");
	document.write("la cantidad de positivos es: " + contadorPositivos +  "<br>");
	document.write("la cantidad de negativos es: " + contadorNegativos +  "<br>");
	document.write("la cantidad de ceros es: "+ contadorCeros + "<br>");
	document.write("la cantidad de pares es: " + contadorPares + "<br>");
	document.write("el promedio de positivos es: " + promedioPositivos + "<br>");
	document.write("el promedio de negativos es: " + promedioNegativos + "<br>");
	document.write("la diferencia de positivos y negativos es: " + diferencia + "<br>")
	document.write("el numero minimo es: " + numeroMinimo + "<br>");
	document.write("el numero minimo es: " + numeroMaximo + "<br>");

}//FIN DE LA FUNCIÓN

