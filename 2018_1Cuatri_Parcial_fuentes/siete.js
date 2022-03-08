/*
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/

function mostrar()
{	
	var nota;
	var sexo;

  	var cantidadAlumnos = 0; //contador
  	var acumuladorNotas = 0;
  	var promedioNotas;
  	
  	var primerAlumnoIngresado = 1; //flag
  	var notaMinima;
  	var sexoNotaMinima;

  	var contadorMasculinoNota = 0;



	while(cantidadAlumnos < 5)
	{
		nota = prompt("Ingrese la nota del alumno");
		nota = parseInt(nota);

		while(isNaN(nota) || (nota < 0 || nota >10))
		{
			nota = prompt("Error, reingrese una nota valida (0/10)");
			nota = parseInt(nota);
		}

		sexo = prompt("Ingrese el sexo del alumno (F/M)");
		sexo = sexo.toUpperCase();

		while(sexo != "F" && sexo != "M")
		{
			sexo = prompt("Error, reingrese un sexo valido (F/M)");
			sexo = sexo.toUpperCase();

		}

		if(sexo == "M" && nota > 5)
		{
			contadorMasculinoNota += 1;
		}	

		if(primerAlumnoIngresado == 1 || nota < notaMinima)
		{
				notaMinima = nota;
				sexoNotaMinima = sexo;
				primerAlumnoIngresado = 0;
		}

		acumuladorNotas = acumuladorNotas + nota;

		cantidadAlumnos = cantidadAlumnos + 1;

	}

	promedioNotas = acumuladorNotas/cantidadAlumnos;

	alert("El promedio de notas es: " + promedioNotas);
	alert("La nota mas baja es: " + notaMinima);
	alert("La cantidad de varones con notas mayor a 6 es " + contadorMasculinoNota + " alumnos." );


}
