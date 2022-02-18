/*
Luciano Rafael Vega Luna DIV E
Al ingresar una edad debemos informar si la persona es mayor de edad, 
sino informar que es un menor de edad.
*/

function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad)

	if(edad >= 18)
	{
		alert("Usted es mayor de edad");
	}

	else 
	{
		alert("Usted es menor de edad");
	};
    alert("Fin de la funcion");

}//FIN DE LA FUNCIÓN