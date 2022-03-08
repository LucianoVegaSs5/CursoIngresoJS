/*
Luciano Rafael Vega Luna DIV E
tpnro 12
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos 
validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla
a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edad;
 	var sexo;
 	var estadoCivil;
 	var sueldoBruto;
 	var legajo;
 	var nacionalidad;


	edad = prompt("ingrese su edad entre 18 y 90 años.");

 	while(isNaN(edad) || !(edad > 17 && edad < 91))
 	{
 		edad = prompt("Error, ingrese su edad entre 18 y 90 años.");
 		edad = parseInt(edad);

 	}
 	document.getElementById("txtIdEdad").value = "Edad " + edad;

 	sexo = prompt("Ingrese su sexo (M o F) ");
 	sexo = sexo.toUpperCase();

 	while(!(sexo == "F" || sexo == "M" ))
 	{
 		sexo = prompt("Error, reingrese su sexo (F o M)");
		sexo = sexo.toUpperCase();
 	}
 	if(sexo == "F")
 	{
 		document.getElementById("txtIdSexo").value = "Su sexo es Femenino"
 	}
 	else
 	{
 		document.getElementById("txtIdSexo").value = "Su sexo es Masculino"
 	}

 	estadoCivil = prompt("Ingrese su estado civil: 1(soltero), 2(casado), 3(divorciados), 4(viudo)");
 	estadoCivil = parseInt(estadoCivil);

 	while(isNaN(estadoCivil) || (estadoCivil != 1 && estadoCivil != 2 && estadoCivil != 3 && estadoCivil != 4) )
 	{
 		estadoCivil = prompt("Error, reingrese su estado civil: soltero), 2(casado), 3(divorciados), 4(viudo)");
 		estadoCivil = parseInt(estadoCivil);
 	}

 	switch(estadoCivil)
 	{
 		case 1:
 			estadoCivil = " soltero"
 			break;
 		case 2:
 			estadoCivil = " casado"
 			break;
 		case 3:
 			estadoCivil = " divorciado"
 			break;
 		default:
 			estadoCivil = " viudo"
 			break;
 	}

 	document.getElementById("txtIdEstadoCivil").value = "Usted es" + estadoCivil;

 	sueldoBruto = prompt("Ingrese su sueldo no menor a 8000");
 	sueldoBruto = parseInt(sueldoBruto);

 	while(isNaN(sueldoBruto) || sueldoBruto < 8000)
 	{
 		sueldoBruto = prompt("Error, reingrese su sueldo no menor a 8000");
 		sueldoBruto = parseFloat(sueldoBruto); 
 	}

 	document.getElementById("txtIdSueldo").value = "su sueldo bruto es " + sueldoBruto;

 	legajo = prompt("Ingrese su legajo de 4 cifras sin 0 a la izquierda");
 	legajo = parseInt(legajo);

 	while(isNaN(legajo) || (legajo < 1000 || legajo > 10000))
 	{
 		legajo = prompt("Error, reingrese un legajo valido");
 		legajo = parseInt(legajo);
 	}

 	document.getElementById("txtIdLegajo").value = "Su legajo es " + legajo;

 	nacionalidad = prompt("Ingrese su nacionalidad:  A para argentinos, E para extranjeros, N para nacionalizados");
	nacionalidad = nacionalidad.toUpperCase();

 	while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
 	{
 		nacionalidad = prompt("Error, reingrese su nacionalidad: A para argentinos, E para extranjeros, N para nacionalizados");
 		nacionalidad = nacionalidad.toUpperCase();
 	}	

 	switch(nacionalidad)
 		{
 			case "A":
 				nacionalidad = "argentino";
 				break;
 			case "E":
 				nacionalidad = "extranjero";
 				break;
 			default:
 				nacionalidad = "nacionalizado";
 				break;
 		}

 	document.getElementById("txtIdNacionalidad").value = "Su nacionalidad es " + nacionalidad;
}
