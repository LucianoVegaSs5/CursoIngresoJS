/*
Luciano Rafael Vega Luna DIV E
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

//declarar variables
	var numUno;
	var numDos;
	var resultado;

function sumar()
{	
	
	//guardamos dato
	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;

	//parseInt para convertir el valor txt a un valor numerico
	//proceso
	numUno = parseInt(numUno);
	numDos = parseInt(numDos);

	//sumamos las vaiables y mostramos el resultado
	resultado = numUno + numDos
    alert("La suma es " + resultado); 	
}

function restar()
{

	//guardamos dato
	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;

	//parseInt para convertir el valor txt a un valor numerico
	//proceso
	numUno = parseInt(numUno);
	numDos = parseInt(numDos);

	//restamos las vaiables y mostramos el resultado
	 resultado = numUno - numDos
    alert("La resta es " + resultado);
    	
}

function multiplicar()
{ 

	//guardamos dato
	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;

	//parseInt para convertir el valor txt a un valor numerico
	//proceso
	numUno = parseInt(numUno);
	numDos = parseInt(numDos);

	//multiplicamos las vaiables y mostramos el resultado
	resultado = numUno * numDos
    alert("La multiplicación es " + resultado); 
}

function dividir()
{

	//guardamos dato
	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;

	//parseInt para convertir el valor txt a un valor numerico
	//proceso
	numUno = parseInt(numUno);
	numDos = parseInt(numDos);

	//dividimos las vaiables y mostramos el resultado
	resultado = numUno / numDos
    alert("La división es " + resultado);	
}

