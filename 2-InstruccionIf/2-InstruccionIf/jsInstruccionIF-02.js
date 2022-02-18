/*
Al ingresar una edad debemos informar solo si la persona es mayor de edad
*/


function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if( edad >= 18)
	{
		alert("Sos mayor de edad")
	}
	alert( "Fin de la funcion")

}//FIN DE LA FUNCIÓN