/*	
Luciano Rafael Vega Luna
Parcial Ingreso 2022
Ejercicio Extra
 Nos piden hacer un programa para saber la cantidad de tropas rusas que llevaron al combate entre rusia y ucrania
 Nos pide:
 -Nombre del grupo
 -Tanques que llevaron(entre 10 y 50)
 -cantidad de soldados (min 10000)
 -pais(ucrania-rusia-eeuu)
Debemos informar:
-que pais envio mas tanques
-que porcentaje de soldados pose eeuu
-mostrar el nombre del grupo con mas soldados de rusia
*/

function mostrar()
{
	var nombreGrupo;
	var tanques;
	var soldados;
	var pais;
	var respuesta;

	var paisMasTanquesCantidad;
	var paisMasTanquesNombre;
	var flagprimerPais = 1;

	var acumuladorTanquesRusia = 0;
	var acumuladorTanquesUcrania = 0;
	var acumuladorTanquesEeuu = 0;
	
	var promedioSoldadoesEeuu;
	var acumuladorSoldadosEeuu = 0;
	var contadorEeuu = 0;

	var primerGrupoRusia = 1;
	var grupoMayoCantidadNombre;
	var grupoMayoCantidad;

	do
	{

		nombreGrupo = prompt("Ingrese el nombre del grupo");

		tanques = prompt("Ingrese la cantidad de tanques(entre 10 y 50)");
		tanques = parseInt(tanques);

		while(tanques > 50 && tanques < 10)
		{
			tanques = prompt("Error, ingrese la cantidad de tanques(entre 10 y 50)");
			tanques = parseInt(tanques);
		}

		soldados = prompt("Ingrese la cantidad de soldados (min 1000)");
		soldados = parseInt(soldados);

		while(soldados < 1000)
		{
			soldados = prompt("Error, ingrese la cantidad de soldados(min 1000)");
			soldados = parseInt(soldados);
		}

		pais = prompt("Ingrese pais (Rusia, Ucrania, EEUU)");
		pais = pais.toLowerCase();

		while(pais != "rusia" && pais != "ucrania" && pais != "eeuu")
		{
			pais = prompt("Error, ingrese un pais valido (Rusia, Ucrania, EEUU)");
			pais = pais.toLowerCase();
		}

		switch(pais)
		{
			case "rusia":
				acumuladorTanquesRusia += tanques;
				if(primerGrupoRusia == 1 || soldados > grupoMayoCantidad)
				{
					grupoMayoCantidad = soldados;
					grupoMayoCantidadNombre = nombreGrupo;
					primerGrupoRusia = 0;
				}
				break;
			case "eeuu":
				acumuladorTanquesEeuu += tanques;
				acumuladorSoldadosEeuu += soldados;
				contadorEeuu ++;
				break;
			case "ucrania":
				acumuladorTanquesUcrania += tanques; 
				break;
		}

		if(flagprimerPais == 1 || tanques > paisMasTanquesCantidad)
		{
			paisMasTanquesCantidad = tanques;
			paisMasTanquesNombre = pais;
			flagprimerPais = 0;
		}

		respuesta = prompt("¿Desea seguir?");
		respuesta = respuesta.toLowerCase();

	}while(respuesta == "si");

	promedioSoldadoesEeuu = acumuladorSoldadosEeuu / contadorEeuu;

	document.write("El pais con mas cantidad de tanques es " + paisMasTanquesNombre + "<br>");
	document.write("El promedio de soldados de EEUU es " + promedioSoldadoesEeuu + "<br>" );
	document.write("El grupo con mas soldados de Rusia es " + grupoMayoCantidadNombre);
}

