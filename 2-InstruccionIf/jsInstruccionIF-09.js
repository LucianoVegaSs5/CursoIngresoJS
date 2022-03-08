/*
Luciano Rafael Vega Luna DIV E 
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
Curso de ingreso UTN FRA
*/

function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var aleatorio;

	aleatorio = Math.random() * (10 - 1) + 1;	
	aleatorio = parseInt(aleatorio);
	alert(aleatorio);

}//FIN DE LA FUNCIÓN

// generar un numero ramdon
// Math.floor(Math.random() * max) + min