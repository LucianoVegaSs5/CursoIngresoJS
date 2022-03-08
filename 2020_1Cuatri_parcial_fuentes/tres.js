/*
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m")
 y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.


*/

function mostrar()
{
	var respuesta;
	var estadoCivil;
	var nombre;
	var edad;
	var sexo;
	var temperaturaCorporal;

	var flagPrimerIngresado = 1;
	var personaMasTemperatura;
	var personaMasTemperaturaNombre;

	var contadorViudoMayorDeEdad = 0;
	var contadorPersonasViudas = 0;
	var contadorPersonasSolteras = 0;
	var cantidadSolerosYViudos;

	var contadorPersonasTerceraEdad = 0;
	var promedioEdadHombresSolteros;
	var contadorHombresSolteros = 0;
	var acumuladorEdadSolteros = 0;

	do
	{
		nombre = prompt("Ingrese su nombre");

		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);

		while(isNaN(edad) || edad < 1)
		{
			edad = prompt("Error, ingrese una edad valida");
			edad = parseInt(edad);
		}

		sexo = prompt("Ingrese su sexo (f o m)");
		sexo = sexo.toLowerCase();

		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Error, ingrese un sexo valido (f o m)");
			sexo = sexp.toLowerCase();
		}

		estadoCivil = prompt("Ingrese su estado civil (soltero, casado o viudo)");
		estadoCivil = estadoCivil.toLowerCase();

		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("Error, ingrese un estado civil valido. (soltero, casado o viudo)");
			estadoCivil = toLowerCase();
		}

		temperaturaCorporal = prompt("Ingrese su temperatura corporal");
		temperaturaCorporal = parseFloat(temperaturaCorporal);

		while(isNaN(temperaturaCorporal))
		{
			temperaturaCorporal = prompt("Error, Ingrese su temperatura corporal");
			temperaturaCorporal = parseFloat(temperaturaCorporal);
		}

		if(personaMasTemperatura < temperaturaCorporal || flagPrimerIngresado == 1)
		{
			personaMasTemperatura = temperaturaCorporal;
			personaMasTemperaturaNombre = nombre;
			flagPrimerIngresado = 0;
		}

		switch(estadoCivil)
		{
			case "viudo":
				contadorPersonasViudas = contadorPersonasViudas + 1;
				if(edad > 17)
				{
					contadorViudoMayorDeEdad = contadorViudoMayorDeEdad + 1;
				}
				break;
			case "soltero":
				contadorPersonasSolteras = contadorPersonasSolteras + 1;
				if (sexo == "m")
				{
					contadorHombresSolteros = contadorHombresSolteros + 1;
					acumuladorEdadSolteros = acumuladorEdadSolteros + edad;
				}
				break;

		}

		if(edad > 60 && temperaturaCorporal > 38)
		{
			contadorPersonasTerceraEdad = contadorPersonasTerceraEdad + 1;
		}

		respuesta = prompt("¿Desea ingresar?");
		respuesta = respuesta.toLowerCase();


	}while(respuesta == "si");

	cantidadSolerosYViudos = contadorPersonasSolteras + contadorPersonasViudas;

	promedioEdadHombresSolteros = acumuladorEdadSolteros / contadorHombresSolteros;

	document.write("La persona con mas temperatura es " + personaMasTemperaturaNombre + "<br>");
	document.write("La cantidad de viudos mayores de edad es " + contadorViudoMayorDeEdad + " personas." + "<br>");
	document.write("La cantidad de de viudos y solteros es de " + cantidadSolerosYViudos + " personas. " + "<br>");
	document.write("La cantidad de personas de la tercera edad con temperatura mayor a 38 es " + contadorPersonasTerceraEdad + "<br>");
	document.write("El promedio de edad de hombres solteros es " + promedioEdadHombresSolteros);
}
