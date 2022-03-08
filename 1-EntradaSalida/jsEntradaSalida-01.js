/*
Luciano Rafael Vega Luna DIV E
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
  //Abre una ventana emergente con el mensaje
	alert("Esto funciona de maravilla");

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
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
	var tipoProducto;
	var precioProducto;
	var cantidadProducto;
	var marca;
	var fabricante;

	var contadorProductos = 0;
	var primerProducto = 0;
	var productoMasUnidades;
	var promedioProductoMasUnidades;

	var acumuladorAlcohol = 0;
	var acumuladorJabon = 0;
	var acumuladorBarbijo = 0;
	var contadorBarbijo = 0;
	var contadorJabon = 0;
	var contadorAlchol = 0;

	var flagPrimerAlcohol = 1;
	var alcoholMasBarato;
	var cantidadUnidadesAlochol;
	var alcoholFabricante;

	do
	{
		tipoProducto = prompt("Ingrese el producto: barbijo , jabón o alcohol");
		tipoProducto = tipoProducto.toLowerCase();

		while(tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol")
		{
			tipoProducto = prompt("Error, reingrese el producto: barbijo , jabón o alcohol");
			tipoProducto = tipoProducto.toLowerCase();
		}

		precioProducto = prompt("Ingrese el precio del producto");
		precioProducto = parseFloat(precioProducto);

		while(isNaN(precioProducto) || precioProducto > 300 || precioProducto < 100)
		{
			precioProducto = prompt("Error, ingrese un precio entre 100 y 300");
			precioProducto = parseFloat(precioProducto);
		}

		cantidadProducto = prompt("Ingrese la cantidad mayor a 0 y menor a 1000");
		cantidadProducto = parseInt(cantidadProducto);

		while(isNaN(cantidadProducto) || cantidadProducto > 1000 || cantidadProducto < 1)
		{

		cantidadProducto = prompt("Error, ingrese la cantidad mayor a 0 y menor a 1000");
		cantidadProducto = parseInt(cantidadProducto);

		}

		marca = prompt("Ingrese la marca del producto");

		fabricante = prompt("Ingrese el fabricante del producto");

		if(flagPrimerAlcohol == 1 || alcholMasBarato > precioProducto)
		{
			alcholMasBarato = precioProducto;
			cantidadUnidadesAlcohol = cantidadProducto;
			alcholFabricante = fabricante;
			flagPrimerAlcohol = 0;
		}

		switch(tipoProducto)
		{
			case "barbijo":
				acumuladorBarbijo = acumuladorBarbijo + cantidadProducto;
				contadorBarbijo = contadorBarbijo + 1;
				break;
			case "alcohol":
				acumuladorAlcohol = acumuladorAlcohol + cantidadProducto;
				contadorAlchol = contadorAlchol+ 1;
				break;
			case "jabon":
				acumuladorJabon = acumuladorJabon + cantidadProducto;
				contadorJabon = contadorJabon + 1;
				break;
		}

		contadorProductos = contadorProductos + 1;

	}while(contadorProductos < 5);

	if(acumuladorJabon > acumuladorAlcohol && acumuladorJabon > acumuladorBarbijo)
	{
		productoMasUnidades = "Jabon";
		promedioProductoMasUnidades = acumuladorJabon/contadorJabon;
	}
	else if(acumuladorAlcohol > acumuladorBarbijo)
	{
		productoMasUnidades = "alcohol";
		promedioProductoMasUnidades = acumuladorAlcohol/contadorAlchol;
	}
	else
	{
		productoMasUnidades = "barbijo"
		promedioProductoMasUnidades = acumuladorBarbijo/contadorBarbijo;
	}


	document.write("El alcohol mas barato salio " + alcoholMasBarato + ", sus unidades fueron " + cantidadUnidadesAlcohol + " y su fabricamte es " + alcoholFabricante + "<br>");
	document.write("El producto con mas unidades es "+ productoMasUnidades + " y su promedio por compra es " + promedioProductoMasUnidades + "<br>" );
	document.write("Las unidades de jabon que hay en total son " + acumuladorJabon + "<br>");
}

/* para que promedio no de isNaN
	if(isNaN(promedio))

	{
		promedio = 0;
	}
	*/

+/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Luciano Rafael Vega Luna DIV E
EJERCICIO 3 

3. Llegan vuelos con vacunas de distintos lugares del mundo
Mientras el usuario quiera se debe registrar de cada vuelo:
-Origen (“Asia”, “Europa”, “América”)
-Cantidad de vacunas (entre 500000 y 2500000)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
a- El origen que envió menor cantidad de vacunas (x)
b- El total sin descuentos a pagar por los gastos de los viajes
c- Si en total se recibieron mas de 10 millones de vacunas se hace
un descuento de 25%, Si se recibieron entre 5 y 10 millones (inclusive) el
descuento es del 15% con menor cantidad no hay descuento.
Informar si hubo descuento de cuanto fue y el importe final con
Descuento.
*/
 


function mostrar() 
{
	var origen;
	var cantidadVacunas;
	var costoDelVuelo;
	var respuesta;

	var origenMenor;
	var origenMenorCantidad;

	var acumuladorOrigenAsia;
	var acumuladorOrigenAmerica;
	var acumuladorOrigenEuropa;
	var acumuladorDeCosto;
	var acumuladorVacunasTotales;
	var primerOrigen = 1;

	var mensaje;
	var descuento;

	acumuladorVacunasTotales = 0;

	acumuladorOrigenAsia = 0;
	acumuladorOrigenEuropa = 0;
	acumuladorOrigenAmerica = 0;

	acumuladorDeCosto = 0;

	respuesta = "si";

	while(respuesta == "si")
	{
		origen = prompt("ingrese el origen de las vacunas");
		origen = origen.toUpperCase();

		while(origen != "ASIA" && origen != "AMERICA" && origen != "EUROPA")
		{
			origen = prompt("Error, Ingrese un origen valido");
			origen = origen.toUpperCase();
		}

		cantidadVacunas = prompt("Ingrese la cantidad total de vacunas exportadas");
		cantidadVacunas = parseInt(cantidadVacunas);

		while(cantidadVacunas > 2500000 || cantidadVacunas < 500000)
		{
			cantidadVacunas = prompt("Error, reingrese una cantidad de vacunas validas (500000/2500000)")
			cantidadVacunas = parseInt(cantidadVacunas);
		}

		costoDelVuelo = prompt("Ingrese el costo del vuelo");
		costoDelVuelo = parseFloat(costoDelVuelo);

		while(costoDelVuelo > 5000000 || costoDelVuelo < 1000000)
		{
			costoDelVuelo = prompt("Error, reingrese un costo del vuelo valido (1000000/5000000)");
			costoDelVuelo = parseFloat(costoDelVuelo);
		}

		switch(origen)
		{
			case "EUROPA":
				acumuladorOrigenEuropa = acumuladorOrigenEuropa + cantidadVacunas;
				break;
			case "ASIA":
				acumuladorOrigenAsia = acumuladorOrigenAsia + cantidadVacunas;
				break;
			case "AMERICA":
				acumuladorOrigenAmerica = acumuladorOrigenAmerica + cantidadVacunas; 
				break;
		}

		if(cantidadVacunas <= origenMenorCantidad || primerOrigen == 1)
		{
			origenMenorCantidad = cantidadVacunas;
			origenMenor = origen;
			primerOrigen = 0;

		}

		acumuladorVacunasTotales = acumuladorVacunasTotales + cantidadVacunas;

		acumuladorDeCosto = acumuladorDeCosto + costoDelVuelo;

		respuesta = prompt("¿Quiere continuar?");

	}

	if(acumuladorVacunasTotales > 10000000)
	{
		descuento = acumuladorDeCosto - acumuladorDeCosto * (20/100);
		mensaje = "El total a pagar es de " + descuento + ", con un descuento del 20%.";
	}
	else if(acumuladorVacunasTotales > 5000000 && acumuladorVacunasTotales < 10000000)
	{
		descuento = acumuladorDeCosto - acumuladorDeCosto * (15/100);
		mensaje = "El total a pagar es de " + descuento + ", con un descuento del 15%.";
	}
	else
	{
		mensaje = "El total a pagar es de " + acumuladorDeCosto;
	}

	document.write("El vuelo que envio menor vacunas fue " + origenMenor + " con la cantidad de " + origenMenorCantidad + " vacunas." + "<br>");
	document.write("El total de gastos a pagar de los vuelos es " + acumuladorDeCosto + "<br>");
	document.write(mensaje + "<br>");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Luciano Rafael Vega Luna DIV E
Practica parcial pto1	

1. Una empresa de venta de cosméticos necesita un programa que permita la carga de productos
vendidos,
junto a los datos del vendedor. Se requiere ingresar los siguientes campos:
• Vendedor: Juan, María, Lucrecia
• Tipo producto: Perfume, Shampoo o Maquillaje
• Importe de la venta (Numero mayor que cero)
No hay un límite total de ventas, y cada vendedor puede realizar varias ventas.
Una vez finalizada la carga de productos vendidos se debe calcular la comisión del vendedor.
Si la suma de las ventas realizadas por cada vendedor está entre 5000 y 10000, la comisión será del 15%.
Si la comisión supera los 10000, la comisión será del 20%. En caso contrario la comisión será del 5%.
Se debe mostrar:
a. Promedio de ventas por cada vendedor.
b. Cantidad de perfumes que vendió María
c. El importe más barato junto con el vendedor que lo vendió.
d. El nombre del vendedor con menor comisión.
*/

function mostrar()
{
	var vendedor;
	var tipoProducto;
	var importeVenta;
	var respuesta;

	var comisionJuan;
	var comisionMaria;
	var comisionLucrecia;
	var vendedorMasBarato;
	var importeMasBarato;
	var comisionMasBaja;

	var flagPrimerVendedor = 1

	var acumuladorVentaMaria = 0;
	var contadorVentaMaria = 0;
	var acumuladorVentaJuan = 0;
	var contadorVentaJuan = 0;
	var acumuladorVentaLucrecia = 0;
	var contadorVentaLucrecia = 0;
	var contadorPerfumesMaria = 0;

	do
	{
		vendedor = prompt("Ingrese el nombre del vendedor. Juan - María - Lucrecia");
		vendedor = vendedor.toLowerCase();

		while(vendedor != "juan" && vendedor != "lucrecia" && vendedor != "maria")
		{
			vendedor = prompt("Error, Ingrese un nombre de vendedor valido. Juan - María - Lucrecia");
			vendedor = vendedor.toLowerCase();
		}

		tipoProducto = prompt("Ingrese el producto. Perfume - Shampoo - Maquillaje");
		tipoProducto = tipoProducto.toLowerCase();

		while(tipoProducto != "perfume" && tipoProducto != "shampoo" && tipoProducto != "maquillaje")
		{
			tipoProducto = prompt("Error, ingrese un producto valido. Perfume - Shampoo - Maquillaje ");
			tipoProducto = tipoProducto.toLowerCase();
		}

		importeVenta = prompt("Ingrese el importe de la venta");
		importeVenta = parseInt(importeVenta);

		while(importeVenta < 0)
		{
			importeVenta = prompt("Error, ingrese un importe mayor a 0");
			importeVenta = parseInt(importeVenta);
		}

		switch(vendedor)
		{
			case "juan":
				acumuladorVentaJuan = acumuladorVentaJuan + importeVenta;
				contadorVentaJuan = contadorVentaJuan + 1;
				break;
			case "maria":
				acumuladorVentaMaria = acumuladorVentaMaria + importeVenta;
				contadorVentaMaria = contadorVentaMaria + 1;
				if(tipoProducto == "perfume")
				{
					contadorPerfumesMaria = contadorVentaMaria + 1;
				}
				break;
			case "lucrecia":
				acumuladorVentaLucrecia = acumuladorVentaLucrecia + importeVenta;
				contadorVentaLucrecia = contadorVentaLucrecia + 1;
		}

		if(importeVenta < importeMasBarato || flagPrimerVendedor == 1)
		{
			vendedorMasBarato = vendedor;
			importeMasBarato = importeVenta;
			flagPrimerVendedor = 0;
		}

		respuesta = prompt("¿Quiere continuar? (si/no)");
		respuesta = respuesta.toLowerCase();

	}while(respuesta == "si")

	if(acumuladorVentaJuan > 10000)
	{
		comisionJuan = acumuladorVentaJuan * (20/100);
	}
	else if (acumuladorVentaJuan > 5000)
	{
		comisionJuan = acumuladorVentaJuan * (15/100);
	}
	else
	{
		comisionJuan = acumuladorVentaJuan * (5/100);
	}

	if(acumuladorVentaMaria > 10000)
	{
		comisionMaria = acumuladorVentaMaria * (20/100);
	}
	else if(acumuladorVentaMaria > 5000)
	{
		comisionMaria = acumuladorVentaMaria * (15/100);
	}
	else
	{
		comisionMaria = acumuladorVentaMaria * (5/100);
	}

	if(acumuladorVentaLucrecia > 10000)
	{
		comisionLucrecia = acumuladorVentaLucrecia * (20/100);
	}
	else if (acumuladorVentaLucrecia > 5000)
	{
		comisionLucrecia = acumuladorVentaLucrecia * (15/100);
	}
	else
	{
		comisionLucrecia = acumuladorVentaLucrecia * (5/100);
	}

	if(comisionLucrecia < comisionJuan && comisionLucrecia < comisionMaria)
	{
		comisionMasBaja = "Lucrecia";
	}
	else if(comisionJuan < comisionMaria)
	{
		comisionMasBaja = "Juan";
	}
	else
	{
		comisionMaria = "Maria";
	}


	document.write("El promedio de Juan es " + acumuladorVentaJuan/contadorVentaJuan + "<br>");
	document.write("El promedio de Maria es " + acumuladorVentaMaria/contadorVentaMaria + "<br>");
	document.write("El promedio de Lucrecia es " + acumuladorVentaLucrecia/contadorVentaLucrecia + "<br>");
	document.write("La cantidad de perfumes que vendio Maria es de " + contadorPerfumesMaria + " perfumes." + "<br>");
	document.write("El vendedor con el importe mas barato es " + vendedorMasBarato + " y su importe es " + importeMasBarato + "<br>");
	document.write("El vendedor con la comision mas baja es "+ comisionMasBaja + "<br>");
}

////////////////////////////////////////////////////// POR EL PROFE ////////////////////////////////////////////////////////////////////////////////////////////
/*
1.	Una empresa de venta de cosméticos necesita un programa que permita la carga de productos vendidos,
 junto a los datos del vendedor. Se requiere ingresar los siguientes campos:
•	Vendedor: Juan, María, Lucrecia
•	Tipo producto: Perfume, Shampoo o Maquillaje
•	Importe de la venta (Numero mayor que cero)
No hay un límite total de ventas, y cada vendedor puede realizar varias ventas.
Una vez finalizada la carga de productos vendidos se debe calcular la comisión del vendedor.
Si la suma de las ventas realizadas por cada vendedor está entre 5000 y 10000, la comisión será del 15%.
Si la comisión supera los 10000, la comisión será del 20%. En caso contrario la comisión será del 5%.
Se debe mostrar:
a.	Promedio de ventas por cada vendedor.
b.	Cantidad de perfumes que vendió María
c.	El importe mas barato junto con el vendedor que lo vendió.
d.	El nombre del vendedor con menor comisión.



function mostrar()
{

	//declaro variables
	var respuesta="si";
	var vendedor;
	var tipoProducto;
	var importe;
	var importeMasBarato;
	var vendedorMasBarato;
	
	var comisionJuan;
	var comisionLucrecia;
	var comisionMaria;
	var vendedorMenorComision;
	var banderaDelPrimerImporte=0;
	var contadorVentasLucrecia=0;
	var contadorVentasJuan=0;
	var contadorVentasMaria=0;
	var acumuloImporteLucrecia=0;
	var acumuloImporteJuan=0;
	var acumuloImporteMaria=0;
	var contadorPerfume=0;


	while(respuesta=="si")
	{

		//validaciones
        //(Juan - Maria - Lucrecia)
        vendedor=prompt("ingrese el vendedor(Juan - Maria - Lucrecia)");
        vendedor=vendedor.toLowerCase();
       
        while(vendedor!="juan" && vendedor!="maria" && vendedor != "lucrecia")
        {
        	vendedor=prompt("Error, ingrese el vendedor(Juan - Maria - Lucrecia)");
        	vendedor=vendedor.toLowerCase();
        }

        //(Perfume - Shampoo - Maquillaje)
        tipoProducto=prompt("ingrese el tipo de tipo producto(Perfume - Shampoo - Maquillaje)");
        tipoProducto=tipoProducto.toLowerCase();
       
        while(tipoProducto!="perfume" && tipoProducto!="shampoo" && tipoProducto!= "maquillaje")
        {
        	tipoProducto=prompt("Error, ingrese el tipo de tipo producto(Perfume - Shampoo - Maquillaje)");
        	tipoProducto=tipoProducto.toLowerCase();
    	}

        //Importe (mayor que 0)
        
        importe=parseInt(prompt("Ingrese el importe de la venta"));

        while(importe<1)
        {
        	importe=parseInt(prompt("Error, Ingrese el importe de la venta"));
        }

		switch(vendedor)
		{
			case "juan":
				contadorVentasJuan++;
				acumuloImporteJuan=acumuloImporteJuan+importe; 
			break;
			case "maria":
				contadorVentasMaria++;
				acumuloImporteMaria = acumuloImporteMaria + importe;
				if(tipoProducto =="perfume")
				{
					contadorPerfume++;
				}
			break;
			case "lucrecia":
				contadorVentasLucrecia++;
				acumuloImporteLucrecia=acumuloImporteLucrecia+importe;
			break;
		}



		if(importe < importeMasBarato || banderaDelPrimerImporte==0)
		{
			importeMasBarato = importe;
			vendedorMasBarato = vendedor;
			banderaDelPrimerImporte = 1;
		}


		respuesta=prompt("Desea seguir ingresando datos?si-no");

	}


	/*Si la suma de las ventas realizadas por cada vendedor está entre 5000 y 10000, 
	la comisión será del 15%. 
	Si la comisión supera los 10000, la comisión será del 20%. En caso contrario la comisión 
	será del 5%.
	

	if(acumuloImporteJuan>10000)
	{ 
		comisionJuan = acumuloImporteJuan*0.2;
	}
	else
	{
		if(acumuloImporteJuan>5000)
		{
			comisionJuan = acumuloImporteJuan * 0.15;
		}
		else
		{
			comisionJuan = acumuloImporteJuan * 0.05;
		}
	}
	if(acumuloImporteMaria>10000)
	{ 
		comisionMaria = acumuloImporteMaria*0.2;
	}
	else
	{
		if(acumuloImporteMaria>5000)
		{
			comisionMaria = acumuloImporteMaria * 0.15;
		}
		else
		{
			comisionMaria = acumuloImporteMaria * 0.05
		}
	}
	if(acumuloImporteLucrecia>10000)
	{ 
		comisionLucrecia = acumuloImporteLucrecia*0.2;
	}
	else
	{
		if(acumuloImporteLucrecia>5000)
		{
			comisionLucrecia = acumuloImporteLucrecia * 0.15;
		}
		else
		{
			comisionLucrecia = acumuloImporteLucrecia * 0.05;
		}
	}

	//a)Promedio de ventas por cada vendedor.
	document.write("El Promedio de ventas de Maria es: "+ (acumuloImporteMaria/contadorVentasMaria) + "<br>");
	document.write("El Promedio de ventas de Juan es: "+ (acumuloImporteJuan/contadorVentasJuan) + "<br>");
	document.write("El Promedio de ventas de Lucrecia es: "+ (acumuloImporteLucrecia/contadorVentasLucrecia) + "<br>");

	//b)Cantidad de perfumes que vendió María
	document.write("La cantidad de perfumes que vendio Maria es: "+ contadorPerfume + "<br>");

	//c)El importe mas barato junto con el vendedor que lo vendió.
	document.write("El importe mas barato es: $"+ importeMasBarato +" y el vendedor que lo vendió es "+vendedorMasBarato+ "<br>");

	//d)El nombre del vendedor con menor comisión.

	if(comisionJuan<comisionMaria && comisionJuan<comisionLucrecia)
	{
		vendedorMenorComision= "Juan";
	}
	else
	{
		if(comisionMaria<comisionLucrecia)
		{
			vendedorMenorComision="Maria";
		}
		else
		{
			vendedorMenorComision="Lucrecia";
		}
	}

	document.write("El vendedor con menor comision es: "+vendedorMenorComision);

}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Luciano Rafael Vega Luna DIV E
practica parcial ejercicio 2
2. Se necesita llevar el registro de un vacunatorio. Para ello se podrá registrar los datos de las
personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
Nombre
Edad (mayor o igual a 12)
Vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
Dosis (“P” en caso de ser la primera dosis o “S” en caso de ser la segunda dosis)
Genero (Femenino, Masculino)
Informar:
a- Promedio de edad de los que se vacunaron con la china.
b- Nombre y vacuna del masculino más joven.
c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
d- Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
e- Vacuna más inoculada
*/

function mostrar()
{
	var nombre;
	var edad;
	var vacuna;
	var dosis;
	var genero;
	var respuesta;

	var masculinoMasJovenEdad;
	var masculinoMasJovenVacuna;
	var masculinoMasJovenNombre;
	var menoresDeEdadAmericana;
	var vacunasTotales;
	var vacunasPrimerasDosis;
	var vacunaMasInoculada;

	var contadorVacunarRusa = 0;
	var contadorPrimeraDosis = 0;
	var contadorVacunaChina = 0;
	var contadorVacunaAmericana = 0;
	var contadorMenorEdadAmericana = 0;
	var acumuladorEdadAmericana = 0;

	var primerMasculinoJoven = 0;

	do{
		nombre = prompt("Ingrese su nombre");

		edad = prompt("Ingrese su edad, mayor a 12");
		edad = parseInt(edad);

		while(edad < 12)
		{
			edad = prompt("Error, reingrese una edad mayor a 12");
			edad = parseInt(edad);
		}

		if(edad > 17)
		{
			vacuna = prompt("Ingrese la vacuna deseada ( rusa - china - americana)");
			vacuna = vacuna.toLowerCase();
		}
		else
		{
			vacuna = "americana";
		}

		while(vacuna != "rusa" && vacuna != "americana" && vacuna != "china")
		{
			vacuna = prompt("Error, ingrese una vacuna valida (rusa - china - americana)")
			vacuna = vacuna.toLowerCase();
		}

		dosis = prompt("Indique si es su primera(P) o segunda(S) dosis.");
		dosis = dosis.toUpperCase();

		while(dosis != "P" && dosis != "S")
		{
			dosis = prompt("Error, vuelva a indicar si es su primera(S) o segunda(S) dosis.")
			dosis = dosis.toUpperCase()
		}

		switch(dosis)
		{
			case "P":
		 		dosis = "primera dosis";
		 		contadorPrimeraDosis = contadorPrimeraDosis + 1;
			 	break;
			case "S":
			 	dosis = "segunda dosis";
			 	break;
		}

		genero = prompt("Indique su genero (masculino / femenino).");
		genero = genero.toLowerCase();

		while(genero != "femenino" && genero != "masculino")
		{
			genero = prompt("Error, vuelva a indicar su genero (masculino / femenino).")
			genero = genero.toLowerCase();
		}

		switch(vacuna)
		{
			case "china":
		 		contadorVacunaChina = contadorVacunaChina + 1;
				break;
			case "americana":
				contadorVacunaAmericana = contadorVacunaAmericana + 1;
				acumuladorEdadAmericana = acumuladorEdadAmericana + edad;
				if(edad < 18)
				{
					contadorMenorEdadAmericana = contadorMenorEdadAmericana + 1;
				}
				break;
			case "rusa":
				contadorVacunarRusa = contadorVacunarRusa + 1;
		}

		if(edad < masculinoMasJovenEdad && genero == "masculino" || primerMasculinoJoven == 0)
		{
			masculinoMasJovenEdad = edad;
			masculinoMasJovenNombre = nombre;
			masculinoMasJovenVacuna = vacuna;
			primerMasculinoJoven = 1;
		}

		respuesta = prompt("¿Desea vacunarse? (si / no)");
		respuesta = respuesta.toLowerCase();

	}while(respuesta == "si");

	menoresDeEdadAmericana = (contadorMenorEdadAmericana * 100) / contadorVacunaAmericana; 

	vacunasTotales = contadorVacunaAmericana + contadorVacunaChina + contadorVacunarRusa;

	vacunasPrimerasDosis = (contadorPrimeraDosis * 100) / vacunasTotales;

	if(contadorVacunaAmericana < contadorVacunarRusa && contadorVacunaAmericana < contadorVacunaChina)
	{
		vacunaMasInoculada = "americana";
	}
	else if(contadorVacunarRusa < contadorVacunaChina)
	{
		vacunaMasInoculada = "rusa";
	}
	else
	{
		vacunaMasInoculada = "china"
	}


	alert(nombre +" / "+ edad + " / " + vacuna + " / " + dosis + " / " + genero + " / " + respuesta );

	document.write("El promedio de edad de los vacunados con la vacuna americana es " + parseInt(acumuladorEdadAmericana/contadorVacunaAmericana) + "." + "<br>");
	document.write("El masculino mas joven es " + masculinoMasJovenNombre + " y su vacuna fue " + masculinoMasJovenVacuna + "." + "<br>");
	document.write("De las personas que recibieron la vacuna americana el " + parseInt(menoresDeEdadAmericana) + "% es menor de edad." + "<br>");
	document.write("El porcentaje de personas que recibieron la primera dosis es " + vacunasPrimerasDosis + "%." + "<br>")
	document.write("La vacuna mas inoculada es la vacuna " + vacunaMasInoculada + "<br>");
}