/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

	var numeroSecreto;
	var numeroIntentos;
	var numeroIngresado;

function comenzar()
{

	numeroSecreto = Math.floor(Math.random() * 100) + 1;
	alert("El juego comenzó! Tienes que adivinar el numero");
}

function verificar()
{
	numeroIntentos = 0;

	while(numeroIngresado != numeroSecreto)
	{
		if(numeroIngresado > numeroSecreto)
		{
			alert("se pasó...");
		}
		if(numeroIngresado < numeroSecreto)
		{
			alert("falta...");
	}
 
		numeroIntentos = numeroIntentos + 1;

		numeroIngresado = prompt("Pruebe de nuevo");
		numeroIngresado = parseInt(numeroIngresado);

	}

	if(numeroIngresado == numeroSecreto);
	{
		alert("Usted es ganador!!! y tan solo en " + numeroIntentos + " intentos!.");
	}	

	document.getElementById("txtIdNumero").value = numeroIngresado;

	document.getElementById("txtIdIntentos").value = numeroIntentos;

}

//num Ramdom con max y min =  
//Math.floor(Math.random() * 100) + 1 