/*
Luciano Rafael Vega Luna DIV E
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

/*
function mostrarAumento()
{
	// declaramos variables
	var importe;
	var descuento; 
	var resultado;

    // guardamos los datos desde el ID
	importe = document.getElementById("txtIdImporte").value

	importe = parseFloat(importe)

	// calculamos el descuento
    descuento = importe * 30 / 100;
    resultado = importe - descuento;

    //mostramos el resultado
    document.getElementById("txtIdResultado").value = resultado;
}

/*
10 bis 
lo anterior mas.
se debe pedir el % por prompt

mostrar por alert el importe, el descuento, el importe con Descuento
"su importe es 1000 , el Descuento es de 250 y su importe con descuento es 750"
*/


function mostrarAumento()
{

    // declaramos variables
	var importe;
	var descuentoPorcentual; 
	var resultado;
    var descuentoFinal;

    // guardamos los datos desde el ID
	importe = document.getElementById("txtIdImporte").value;
	importe = parseFloat(importe);

	descuentoPorcentual = prompt("Indique su descuento");
    descuentoFinal = importe * (descuentoPorcentual/100);

    resultado = importe - descuentoFinal;

	alert("Su importe es " + importe);
	alert("Su descuento es de " + descuentoFinal);
	alert("Su importe con descuento es " + resultado);

}
 


