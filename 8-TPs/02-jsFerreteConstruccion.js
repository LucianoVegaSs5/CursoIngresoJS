/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	//declaramos variables
	var largo;
	var ancho;
	var perimetro;
	var alambre;

    //guardamos datos del ID
	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;

	largo = parseFloat(largo);
	ancho = parseFloat(ancho);

    //hacemos la formula
    // formula del perimetro de un rectangulo= b2+h2
	perimetro = ancho * 2 + largo * 2;
    alambre = perimetro * 3;

    //mostramos el mensaje por el alert
	alert("Se necesitan " + alambre + " metros de alambre")

}

function Circulo () 
{
	//declaramos las variables
    var radio;
    var perimetro; 
    var alambre;

    //guardamos datos desde el id
    radio = document.getElementById("txtIdRadio").value
    radio = parseFloat(radio)

    // calculamos
	perimetro = radio * 3.14 *2;
	perimetro = parseFloat(perimetro)

	alambre = perimetro * 3;

	alert("Se necesitan " + alambre +" metros de alambre")
}

function Materiales () 
{
	var areaTerreno;
	var bolsasCemento;
	var bolsasCal;
	var anchoTerreno;
	var largoTerreno;

	largoTerreno = document.getElementById("txtIdLargo").value;
	anchoTerreno = document.getElementById("txtIdAncho").value;

	largoTerreno = parseFloat(largoTerreno);
	anchoTerreno = parseFloat(anchoTerreno);

	areaTerreno = anchoTerreno *  largoTerreno;

	bolsasCemento = areaTerreno * 2;
	bolsasCal = areaTerreno * 3;

	alert("Se necesitan comprar " + bolsasCal + " bolsas de cal y " + bolsasCemento + " bolsas de cemento");


}