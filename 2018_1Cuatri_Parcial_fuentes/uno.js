/* 
Luciano Rafael Vega Luna DIV E
Parcial 2018 Pto 1
*/
function mostrar()
{
	var perimetro;
	var ancho;
	var largo;

	ancho = prompt("ingrese ancho");
	ancho = parseInt(ancho)
	largo = prompt("ingrese largo");
	largo = parseInt(largo);

	while(isNaN(ancho) || isNaN(largo))
	{
		if(isNaN(ancho))
		{
			ancho = prompt("Reingrese un ancho valido");
			ancho = parseFloat(ancho);
		}
		else
		{
			largo = prompt("reingrese un largo valido");
			largo = parseFloat(largo);
		}	

	}

	perimetro = ancho * 2 + largo * 2;


	alert("El perimetro es de " + perimetro);
}
