/*
Luciano Rafael Vega Luna DIV E
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declarar variables
	var numUno;
	var numDos;
	var resultado;

	//guardamos dato
	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;

	//parseInt para convertir el valor txt a un valor numerico
	numUno = parseInt(numUno);
	numDos = parseInt(numDos);

	//sumamos las vaiables y mostramos el resultado
	 resultado = numUno + numDos
    alert( " La suma es " + resultado);
    
 }

//txtIdNumeroUno
//txtIdNumeroDos
/* 
parseInt: valor de numeros enteros
parseFloat: valor de numeros decimales

operadores:
"-", "+", "*", "/","%"

entrada
-pormpt
-id

procesos:

salida:
-document.write()
-alert
-id
*/