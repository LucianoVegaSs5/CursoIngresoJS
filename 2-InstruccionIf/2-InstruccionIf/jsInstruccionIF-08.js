/*
Luciano Rafael Vega Luna DIV E
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/

function mostrar()
{
	var edad;
	var estadoCivil;

	estadoCivil = document.getElementById("estadoCivil").value;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad > 17 && estadoCivil == "Soltero")
		{
			alert("Es soltero y no es menor");
		}


}//FIN DE LA FUNCIÓN

//txtIdEdad
//estadoCivil