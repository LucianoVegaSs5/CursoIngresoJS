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

/*
Esteban Marcelo
E/S ej 5 bis
Debemos lograr tomar apellido, nombre(separados) 
y edad por prompt y mostrarlos concatenados 
por alert.
ej.: "Usted se llama José y tiene 66 años" */
 /*function mostrar()
{	
	//declaramos variables
	let nombreIngresado;
	let apellido;
	let edad;

	//tomo los datos
	apellido = prompt("ingrese su apellido");
	nombreIngresado = prompt("ingrese su nombre");
	edad = prompt("ingrese su edad");


	//mostrarlo por alert
	alert ("su apellido y nombre es: " + apellido + " " + nombreIngresado +" y su edad es: " + edad + " años");

}


//txtIdNombre
//txtIdEdad

