/*
Luciano Rafael Vega Luna DIV E
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/

function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad > 17 || edad < 12)
	{
		alert("Usted no es adolesente");
	}

	alert("Fin de la funcion")

}//FIN DE LA FUNCIÓN

/* Otra manera:

if ( !(edad > 12 && edad < 18))
	{
		alert("Usted no es adolesente");
	}
*/