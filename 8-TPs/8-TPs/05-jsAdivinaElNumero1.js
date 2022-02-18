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
	var diferencia;

function comenzar()
{

	numeroSecreto = Math.floor(Math.random() * 100) + 1 
	alert(numeroSecreto );
	

}

function verificar()
{
	numeroIntentos = 0;
	numeroIngresado = document.getElementById("txtIdNumero").value;
	numeroIngresado = parseInt(numeroIngresado);

	if(numeroIngresado == numeroSecreto)
	{
		alert("Usted es un ganador!!! y en solo " + numeroIntentos + " intentos.");
	}
	else if(numeroIngresado > numeroSecreto) 
	{
		diferencia = numeroIngresado - numeroSecreto;
		alert("Se paso por "+ diferencia + " número/s.");
	}
	else
	{
		diferencia = numeroSecreto - numeroIngresado;
		alert("faltan "+ diferencia + " numero/s.");
	}

	while(numeroIngresado != numeroSecreto)
	{
		numeroIntentos =  numeroIntentos + 1;
	}
	document.getElementById("txtIdIntentos").value = numeroIntentos;


}

//num Ramdom con max y min =  
//Math.floor(Math.random() * 100) + 1 