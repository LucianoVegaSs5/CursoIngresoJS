/*
Luciano Rafael Vega Luna DIV E
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//declaro la variable
	var nombre;
	var edad;

	//guardar los daos en las variables
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

	//muestro por alert
	alert("Usted se llama " + nombre + " y tiene " + edad + " años");
}

//txtIdNombre
//txtIdEdad