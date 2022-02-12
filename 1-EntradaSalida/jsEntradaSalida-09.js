/*
Luciano Rafael Vega Luna DIV E 
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/


/*
function mostrarAumento()
{

    // declaramos las las variables
	var sueldo;
	var aumento;
	var resultado;

    //guardamos el sueldo del id
    sueldo = document.getElementById("txtIdSueldo").value

    // parseamos el valor (con parseFloat porque un sueldo puede tener decimales)
    sueldo = parseFloat(sueldo);
    
    aumento = sueldo * 0.1;
    resultado = sueldo + aumento;

    //mostramos el resultado
    document.getElementById("txtIdResultado").value = resultado;
 }





// otras maneras de sacarlo :
//resultado = sueldo + sueldo * (10/100);
 //resultado = sueldo * 1.1;

 //aumento = 10/100;
 //resultado = sueldo + (sueldo * aumento);

 /*
9 bis 
lo anterior mas.
se debe pedir el % por prompt
*/

function mostrarAumento()
{

    // declaramos las las variables
    var sueldo;
    var aumento;
    var resultado;

    //guardamos el sueldo del id
    sueldo = document.getElementById("txtIdSueldo").value
    sueldo = parseFloat(sueldo);

    //guardamos el aumento por el promt
    aumento = prompt("ingrese su aumento");
    aumento = parseInt(aumento);
    
    //procesamos el resultado
    resultado = (aumento/100) * sueldo + sueldo;

    //mostramos el resultado
    document.getElementById("txtIdResultado").value = resultado;


 }