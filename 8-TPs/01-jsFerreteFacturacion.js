/*
Luciano Rafael Vega Luna DIV E
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

	precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    resultado = precioUno + precioDos + precioTres;

    alert("El total de los precios es " + resultado);
	
}

function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var promedio;

	precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    promedio = (precioUno + precioDos + precioTres) / 3;

	alert("El promedio es " + promedio);
}

function PrecioFinal () 
{
    var precioUno;
	var precioDos;
	var precioTres;
	var precioFinal;
	var precioFinalIva;

	precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    precioFinal = precioUno + precioDos + precioTres;
    precioFinal = parseFloat(precioFinal);

    precioFinalIva = precioFinal + precioFinal * 21/100;

	alert("El precio final más el IVA es " + precioFinalIva)
}

// precio final (precioUno+precio"+precio3) * 1.21