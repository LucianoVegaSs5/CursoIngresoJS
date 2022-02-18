/*
Luciano Rafael Vega Luna DIV E
Al ingresar una edad debemos informar si la persona es adolescente,
 edad entre 13 y 17 años (inclusive) .
*/

function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if ( edad > 12 && edad < 18)
	{
		alert("Usted es adolesente");
	}

	alert("Fin de la funcion")

}//FIN DE LA FUNCIÓN

/*
operadores relacionales:
==, >=, <=, !=,

operadores logicos;
!, &&, ||,

otra manera de resolverlo =
if ( !(edad<13 || edad >17))
{
	alert("Usted es adolesente")
}

*/