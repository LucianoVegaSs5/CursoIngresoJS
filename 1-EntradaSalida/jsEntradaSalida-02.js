/*
Luciano Rafael Vega Luna DIV E
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    //Declaro variable
	var nombreIngresado;
	//Guardo nombre en la variable
	nombreIngresado = prompt ("Ingrese su nombre");
    //muestro el nombre
	alert("Su nombre es " + nombreIngresado);
}

/*

declaro variable
entrada:
-prompt: muestra una ventana emergente y pide un dato

proceso:

salida:
-alert

*/
/*
Luciano Rafael Vega Luna DIV E
parcial Ingreso 2022
ejercicio 3
Una agencia de autos nos contrata para generarle un software que permita el ingreso de sus autos, sin limite de
ingresos, al comenzar la carga de datos debemos pedir:
- Marca.
- El Peso en kg. del auto que ingresa (tiene que estar entre 917 y 3900).
- El importe del auto en pesos (mayor a 600000).
- Validar que tipo de auto es sedan o coupé.
Debemos informar:
a) Mostrar el promedio total del importe de todos los autos que ingresaron.
b) Mostrar La marca y el importe del auto más liviano que sea sedan.
c) El auto mas pesado que sea coupé.
*/

 function mostrar()
 {
 	var marcaAuto;
 	var pesoAuto;
 	var importeAuto;
 	var tipoAuto;
 	var respuesta;

 	var contadorAuto = 0;
 	var acumuladorImporteAuto = 0;
 	var promedioTotalAuto;

 	var autoLivianoSedanMarca;
 	var autoLivianoSedanImporte;
 	var autoLivianoSedanPeso;
 	var flagPrimerAutoSedan = 1;

 	var autoMasPesadoCoupe;
 	var flagPrimerAutoCoupe = 1;

 	do
 	{
 		marcaAuto = prompt("Ingrese la marca del auto");

 		pesoAuto = prompt("Ingrese el peso del auto (917 y 3900)");
 		pesoAuto = parseInt(pesoAuto);

 		while(pesoAuto > 3900 || pesoAuto < 917 )
 		{
 			pesoAuto = prompt("Error, Ingrese el peso del auto (917 y 3900)");
 			pesoAuto = parseInt(pesoAuto);
 		}	

 		importeAuto = prompt("Ingrese el importe del auto mayor a 600000");
 		importeAuto = parseInt(importeAuto);

 		while(importeAuto < 600000)
 		{
 			importeAuto = prompt("Error; ingrese un importe mayor a 600000");
 			importeAuto = parseInt(importeAuto);
 		}

 		tipoAuto = prompt("Ingresar el tipo de auto (coupe o sedan)");
 		tipoAuto = tipoAuto.toLowerCase();

 		while(tipoAuto != "sedan" && tipoAuto != "coupe")
 		{
 			tipoAuto = prompt("Error, ingresar un tipo de auto valido (coupe o sedan)");
 			tipoAuto = tipoAuto.toLowerCase();
 		}

 		contadorAuto = contadorAuto + 1;
 		acumuladorImporteAuto = acumuladorImporteAuto + importeAuto;

 		if(tipoAuto == "sedan")
 		{
			if(flagPrimerAutoSedan == 1 || autoLivianoSedanPeso > pesoAuto)
			{
				autoLivianoSedanPeso = pesoAuto;
				autoLivianoSedanMarca = marcaAuto;
				autoLivianoSedanImporte = importeAuto;
				flagPrimerAutoSedan = 0;
			}
		}

		if(tipo == "coupe")
		{
			if(flagPrimerAutoCoupe == 1 || pesoAuto > autoMasPesadoCoupe )
			{
				autoMasPesadoCoupe = pesoAuto;
				flagPrimerAutoCoupe = 0;
			}

		}


 		respuesta = prompt("¿Desea continuar?");
 		respuesta = respuesta.toLowerCase();

 	}while(respuesta ==  "si");

 	promedioTotalAuto = acumuladorImporteAuto / contadorAuto;

 	document.write("El promedio de importe de los autos que ingresaron es " + promedioTotalAuto + "<br>");
 	document.write("El auto mas liviano sedan: su marca es " + autoLivianoSedanMarca + ", su importe " + autoLivianoSedanImporte + "<br>");
 	document.write("El auto mas pesado coupe pesa " + autoMasPesadoCoupe + " kilos.");

 }
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
La aerolínea UTN viajes nos pide generar un software para vender sus packs de viajes, la carga de datos pedirá lo
siguiente:
- Nombre del piloto.
- Destino (“Ushuaia”, “Córdoba” o ”Jujuy”).
- Cantidad de personas en el avión (tiene que ser mayor a 0 y menor 250).
- Tipo de clase en la que viaja (promocional, turista, ejecutiva).
Debemos informar:
a) La clase con más pasajeros.
b) El nombre del piloto que lleva más pasajeros a Ushuaia.
c) El promedio de personas que usan la clase Ejecutiva.
*/

function mostrar()
{
	var nombrePiloto;
	var destino;
	var cantidadPersonas;
	var clase;
	var respuesta;

	var acumuladorClaseTurista = 0;
	var acumuladorClaseEjecutiva = 0;
	var acumuladorClasePromocional = 0;
	var claseMasPasajeros;
	var promedioClaseEjecutiva;
	var acumuladorPasajerosTotales;

	var piolotoMasPasajerosUs;
	var vueloMasPasajerUs;
	var flagPrimerVuelo = 1;

	do
	{
		nombrePiloto = prompt("Ingrese nombre del piloto");

		destino = prompt("Ingrese el destino (Ushuaia, cordoba o jujuy");
		destino = destino.toLowerCase();

		while(destino != "ushuaia" && destino != "cordoba" && destino != "jujuy")
		{
			destino = prompt("Error, ingrese el destino de nuevo (Ushuaia, cordoba o jujuy");
			destino = destino.toLowerCase();
		}

		cantidadPersonas = prompt("Ingrese la cantidad de personas abordo");
		cantidadPersonas = parseInt(cantidadPersonas);

		while(cantidadPersonas > 250 || cantidadPersonas < 0)
		{			
			cantidadPersonas = prompt("Error, ingrese la cantidad de personas abordo entre 0 y 250");
			cantidadPersonas = parseInt(cantidadPersonas);0
		}

		clase = prompt("Ingrese la clase (promocional - turista - ejecutiva)");
		clase = clase.toLowerCase()

		while(clase != "turista" && clase != "promocional" && clase != "ejecutiva")
		{
			clase = prompt("Error, ingrese una clase valida (promocional . turista . ejecutiva)")
			clase = clase.toLowerCase();
		}

		
		if( destino == "ushuaia")
		{
			if(vueloMasPasajerUs > cantidadPersonas || flagPrimerVuelo == 1)
			{
				vueloMasPasajerUs = cantidadPersonas;
				piolotoMasPasajerosUs = nombrePiloto;
				flagPrimerVuelo = 0;
			}
		}

		switch(clase)
		{
			case "promocional":
				acumuladorClasePromocional = acumuladorClasePromocional + cantidadPersonas;
				break;
			case "turista":
				acumuladorClaseTurista = acumuladorClaseTurista + cantidadPersonas;
				break;
			case "ejecutiva":
				acumuladorClaseEjecutiva = acumuladorClaseEjecutiva + cantidadPersonas;
				break
		}

		respuesta = prompt("¿Desea continuar?");
		respuesta = respuesta.toLowerCase();

	}while(respuesta == "si");

	if(acumuladorClaseEjecutiva > acumuladorClaseTurista && acumuladorClaseEjecutiva > acumuladorClasePromocional)
	{
		claseMasPasajeros = "ejecutiva";
	}
	else if(acumuladorClaseTurista > acumuladorClasePromocional)
	{
		claseMasPasajeros = "turista";
	}
	else
	{
		claseMasPasajeros = "promocional";
	}

	acumuladorPasajerosTotales = acumuladorClasePromocional + acumuladorClaseEjecutiva + acumuladorClaseEjecutiva;

	promedioClaseEjecutiva = acumuladorClaseEjecutiva /  acumuladorPasajerosTotales * 100 ; // el 100 es para saber el porcentaje

	document.write("La clase con mas pasajeros es la clase " + claseMasPasajeros + "<br>");
	document.write("El piloto con mas pasajeros a Ushuaia es " + piolotoMasPasajerosUs + "<br>");
	document.write("El promedio de personas que viaja en la clase ejecutiva es " + promedioClaseEjecutiva);

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*	
Luciano Rafael Vega Luna
Parcial Ingreso 2022
Ejercicio 1
Una reconocida empresa de desarrollo nos contratara para realizar un nuevo proyecto, necesitamos crear un
software para el Hospital Garrahan que nos pide recopilar la información del ingreso de niños en la semana, para eso
debemos tomar los siguientes datos:
- El nombre del niño:
- El turno de ingreso (validar: mañana, tarde y noche).
- Temperatura corporal con la que ingresa en ºC (validar que este entre 37 a 41 inclusive).
- Edad (entre 0 y 15 años inclusive).
Debemos informar:
a) La cantidad total de niños que ingresaron en la semana.
b) De los tres turnos debemos informar cual fue el turno que mayor cantidad de niños menores de 12 años
recibió.
c) El nombre del niño con más temperatura en la semana.
*/

function mostrar()
{
	var nombreNiño;
	var turnoIngreso;
	var temperaturaCorporal;
	var edadNiño;
	var respueta;

	var cantidadNiñosSemana = 0;

	var contadorTurnoNoche12 = 0;
	var contadorTurnoMañana12 = 0;
	var contadorTurnoTarde12 = 0;
	var turnoMenorNiños12;

	var flagPrimerNiño = 1;
	var niñoMasTempertaturaNombre;
	var niñoMasTempertatura;

	do
	{
		nombreNiño = prompt("Ingrese el nombre del niño");

		turnoIngreso = prompt("Indique su turno (mañana, tarde, noche)");
		turnoIngreso = turnoIngreso.toLowerCase();

		while(turnoIngreso != "mañana" && turnoIngreso != "tarde" && turnoIngreso != "noche")
		{
			turnoIngreso = prompt("Error, indique un turno valido (mañana, tarde, noche)");
			turnoIngreso = turnoIngreso.toLowerCase();
		}

		temperaturaCorporal = prompt("Ingrese su temperatura corporal");
		temperaturaCorporal = parseInt(temperaturaCorporal);

		while(temperaturaCorporal > 41 || temperaturaCorporal < 37)
		{
			temperaturaCorporal = prompt("Error, ingrese su temperatura corporal (entre 37 y 41");
			temperaturaCorporal = parseInt(temperaturaCorporal);
		}

		edadNiño = prompt("Ingrese la edad del niño");
		edadNiño = parseInt(edadNiño);

		while(edadNiño > 15 || edadNiño < 0)
		{
			edadNiño = prompt("Error, ingrese la edad del niño (entre 0 y 15)");
			edadNiño = parseInt(edadNiño);
		}

		if(edadNiño < 12)
		{
			switch(turnoIngreso)
			{
				case "noche":
						contadorTurnoNoche12 = contadorTurnoNoche12 + 1;
					break;
				case "mañana":
						contadorTurnoMañana12 = contadorTurnoMañana12 + 1;
					break;
				case "tarde":
						contadorTurnoTarde12 = contadorTurnoTarde12 + 1;
					break;
			}
		}

		if(temperaturaCorporal > niñoMasTempertatura || flagPrimerNiño == 1)
		{
			niñoMasTempertaturaNombre = nombreNiño;
			niñoMasTempertatura = temperaturaCorporal;
			flagPrimerNiño = 0;
		}

		cantidadNiñosSemana ++;


		respuesta = prompt("¿Desea ingresar?")

	}while(respuesta == "si")

	if(contadorTurnoTarde12 > contadorTurnoMañana12 && contadorTurnoTarde12 > contadorTurnoNoche12)
	{
		turnoMenorNiños12 = "turno tarde";
	}
	else if(contadorTurnoMañana12 > contadorTurnoNoche12)
	{
		turnoMenorNiños12 = "turno mañana";
	}
	else
	{
		turnoMenorNiños12 = "turno noche";
	}

	document.write("La cantidad de niños que ingresaron en la semana es " + cantidadNiñosSemana + " niños." + "<br>");
	document.write("El turno con mayor numero de ingreso de niños menores a 12 es " + turnoMenorNiños12 + "<br>");
	document.write("El nombre del niño con mas temperatura es " + niñoMasTempertaturaNombre);

}
//a por cada vuelta es un niño, 
//no es necesrio un contador para cada turno exceptuando que tengas condicion como menores a 12 