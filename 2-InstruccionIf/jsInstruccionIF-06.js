/*

*/

function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad >= 18 )
	{
		alert("Usted es mayor de edad");

	} 

	else if (edad < 18 && edad >= 13 ) 
	{ 
	 		alert("Usted es adolesente");
	} 

    else 
	{
		alert("Usted es menor de edad");
	}

}//FIN DE LA FUNCIÓN


/*
otra manera 

if (edad >= 18)
{
	alert("Usted es mator de edad"):
}
else if (edad > 12)
{
	alert("Usted es un niño");
}
else 
{
	"alert("Usted es un adolesente");
}