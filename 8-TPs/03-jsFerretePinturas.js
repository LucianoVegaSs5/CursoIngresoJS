/* 
Luciano Rafael Vega Luna DIV E
Tp Nro 3 FerretePinturas
3.Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaInicial;
	var temperaturaFinal;

	temperaturaInicial = document.getElementById("txtIdTemperatura").value;
	temperaturaInicial = parseFloat(temperaturaInicial);


	temperaturaFinal = (temperaturaInicial - 32) * 5/9;

	alert(temperaturaInicial + " Fahrenheit son " + temperaturaFinal + " centigrados." )
	
}

function CentigradosFahrenheit () 
{
	var temperaturaInicial;
	var temperaturaFinal;

	temperaturaInicial = document.getElementById("txtIdTemperatura").value;
	temperaturaInicial = parseFloat(temperaturaInicial);

	temperaturaFinal = (temperaturaInicial * 9/5) + 32;

	alert(temperaturaInicial + "centigrados son " + temperaturaFinal + " fahrenheit.");

}