/*
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.
*/

function mostrar()
{
	var marcaProducto;
	var temperatura;
	var peso;
	var respuesta;

	var contadorTemperaturaPar = 0;
	var contadorTemperatura = 0;

	var productoMasPesadoPeso;
	var productoMasLivianoPeso;
	var productoMasPesadoMarca;
	var acumuladorPeso = 0;
	var contadorPeso = 0;
	var flagPrimerProducto = 1;

	do
	{
		marcaProducto = prompt("Ingrese la marca del producto");

		peso = prompt("Ingrese el peso del producto");
		peso = parseFloat(peso);

		while(isNaN(peso) || peso > 100 || peso < 1)
		{
			peso = prompt("Error, ingrese un peso entre 1 y 100");
			peso = parseFloat(peso);
		}

		acumuladorPeso = acumuladorPeso + peso;
		contadorPeso = contadorPeso + 1;

		temperatura = prompt("Ingrese la temperatura del producto");
		temperatura = parseInt(temperatura);

		while(isNaN(temperatura) || temperatura < -31 || temperatura > 31)
		{
			temperatura = prompt("Error, Ingrese la temperatura del producto entre -30 y 30");
			temperatura = parseFloat(temperatura);
		}

		if(0 ==(temperatura % 2))
		{
			contadorTemperaturaPar = contadorTemperaturaPar + 1;
		}

		if(peso < productoMasLivianoPeso || flagPrimerProducto == 1)
		{
			productoMasLivianoPeso = peso;
		}

		if(peso > productoMasPesadoPeso || flagPrimerProducto == 1)
		{
			productoMasPesadoPeso = peso;
			productoMasPesadoMarca = marcaProducto;
			flagPrimerProducto = 0;
		}

		if(temperatura < 0)
		{
			contadorTemperatura = contadorTemperatura + 1;
		}

		respuesta = prompt("¿Desea continuar?");
		respuesta = respuesta.toLowerCase();

	}while(respuesta == "si")

	document.write("Las temperaturas pares son " + contadorTemperaturaPar + "<br>");
	document.write("El producto mas pesado es de la marca " + productoMasPesadoMarca + "<br>");
	document.write("La cantidad de prodcutos con temperatura menor a 0 es " + contadorTemperatura + "<br>");
	document.write("El promedio de peso de los prodcutos es " + acumuladorPeso/contadorPeso + "<br>");
	document.write("El peso maximo es " + productoMasPesadoPeso + "<br>");
	document.write("El peso minimo es " + productoMasLivianoPeso + "<br>");



}
