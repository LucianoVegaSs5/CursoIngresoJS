/*
Luciano Rafael Vega Luna DIV E
Parcial 2020 pto 1
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

function mostrar()
{
	var producto;
	var precioProducto;
	var unidadesProducto;
	var marcaYFabricanteProducto;
	var contadorProductos;

	contadorProductos = 0;

	
	while(contadorProductos < 5)
	{
		producto = prompt("Ingrese el producto");
		producto = producto.toLowerCase()
	
		while (producto != "jabon" && producto != "barbijo" && producto =! "alchol")
		{	
			producto = prompt("Error, reingrese el producto (jabon,alchol o barbijo)");
			producto = producto.toLowerCase();
		}


		precioProducto = prompt("Ingrese el precio del producto");
		precioProducto = parseFloat(precioProducto);

		while(isNaN(precioProducto) || precioProducto > 100 || precioProducto > 300);
		{
			precioProducto = prompt("Error, reingrese el precio del producto entre $100 y $300");
			precioProducto = parseFloat(precioProducto);
		}

		unidadesProducto = prompt("Ingrese las unidades que desea");
		unidadesProducto = parseInt(unidadesProducto);

		while(isNaN(unidadesProducto) || unidades < 1 || unidades > 1000);
		{
			unidadesProducto = prompt("Error, reingrese las unidades que desea (1/1000)");
			unidadesProducto = parseInt(unidadesProducto);
		}

		marcaYFabricanteProducto = prompt("Ingrese la marca y el fabricante del producto")

		contadorProductos = contadorProductos + 1 ;

	}while(contadorProductos > 5)

	//salidas

	document.write(producto + "<br>");
	document.write(precioProducto + "<br>");
	document.write(unidadesProducto + "<br>");
	document.write(marcaYFabricanteProducto + "<br>")
}
