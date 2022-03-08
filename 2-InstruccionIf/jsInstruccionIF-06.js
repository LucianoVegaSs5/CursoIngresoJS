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

/*
Luciano Rafael Vega Luna DIV E
Ejercicio 6 bis(usar if else):
Al ingresar por prompt una edad debemos informar si
la persona es anciano(mas de 70), mayor de edad (entre 70 y 18 años),
adolescente (entre 13 y 17 años), niño (menor a 13 años), bebe (0 a 3 años).
mostrar por ID el resultado.
*/

function mostrar()
{
	var edad;
	var mensaje;

	edad = prompt("Ingrese su edad");
	edad = parseInt(edad);
	
	if(edad > 70)
	{
		mensaje = "Usted es un anciano";
	}
	else 
	{
		if(edad > 17)
		{
			mensaje = "Usted es un adulto";
		}
		else
		{
			if(edad >12)
			{
				mensaje = "Usted es un adolescente";
			}
			else
			{
				if(edad>3)
				{
					mensaje = "Usted es un niño";
				}
				else
				{
					mensaje = "Usted es un bebe";
				}
			}
		}
	}
	
	document.getElementById("txtIdEdad").value = mensaje;
}