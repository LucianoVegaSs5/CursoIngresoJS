/*
Luciano Rafael Vega Luna DIV E
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var ingresoPrimerNumero;
	//iniciar variables
	
	respuesta = "si";
	ingresoPrimerNumero = 1;

	while(respuesta ==  "si")
	{
		do
		{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		}while(isNaN(numeroIngresado) == true);

		if(numeroMinimo > numeroIngresado || ingresoPrimerNumero == 1)
		{
			numeroMinimo = numeroIngresado;
		}
		 if(numeroMaximo < numeroIngresado || ingresoPrimerNumero == 1)
		{
			numeroMaximo = numeroIngresado;
			ingresoPrimerNumero = 0;
		}

		respuesta = prompt("¿Usted quiere agregar un numero?");
		respuesta = respuesta.toLowerCase();
		
		while(!(respuesta == "si" || respuesta == "no"))
		{
			respuesta = prompt("Error,¿Usted quiere agregar un numero?(si o no)");
			respuesta = respuesta.toLowerCase();
		}
	}
	
	document.getElementById("txtIdMinimo").value = numeroMinimo;
	document.getElementById("txtIdMaximo").value = numeroMaximo;

}
/*
function mostrar()
{	// declarar variables
	
	//var banderaDelPrimero;
	var numeroIngresado;
	var respuesta;
	var numeroMaximo;
	var numeroMinimo;
	var ingresoPrimerNumero;

	respuesta="si";
	ingresoPrimerNumero=false;//bandera o flag

	numeroMinimo;
	numeroMaximo;

	while(respuesta == "si")
	{
		do
		{
			numeroIngresado=prompt("Ingrese un numero");
			numeroIngresado=parseInt(numeroIngresado);
		
		}while(isNaN(numeroIngresado)==true);
		

		
		if(numeroMaximo<numeroIngresado || ingresoPrimerNumero == false)
		{	
			numeroMaximo=numeroIngresado;	
		}
		
		if(numeroMinimo>numeroIngresado || ingresoPrimerNumero==false)
		{   
			numeroMinimo=numeroIngresado;
			ingresoPrimerNumero=true;//bajo la bandera
		}
		

		respuesta = prompt("desea continuar ingresando numeros?si/no");
	}

	document.write("el numero maximo es: " + numeroMaximo + "<br>");
	document.write("el numero minimo es: " + numeroMinimo + "<br>");

	

	
}//FIN DE LA FUNCIÓN




function mostrar()
{	// declarar variables
	
	//var banderaDelPrimero;
	var numeroIngresado;
	var respuesta;
	var numeroMaximo;
	var numeroMinimo;
	var ingresoPrimerNumero;

	respuesta="si";
	ingresoPrimerNumero=1;//bandera o flag

	numeroMinimo;
	numeroMaximo;

	while(respuesta == "si")
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		
		if(ingresoPrimerNumero==1)
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			ingresoPrimerNumero=0;//bajar la bandera
		}
		else
		{
			if(numeroMaximo<numeroIngresado)
			{	
				numeroMaximo=numeroIngresado;
			}
			
			if(numeroMinimo>numeroIngresado)
			{   
				numeroMinimo=numeroIngresado;
			}
		}

		respuesta = prompt("desea continuar ingresando numeros?si/no");
	}

	document.write("el numero maximo es: " + numeroMaximo + "<br>");
	document.write("el numero minimo es: " + numeroMinimo + "<br>");

	
}//FIN DE LA FUNCIÓN.
*/