
function mostrar()
{
	var pimerNumero;
	var segunNumero;
	var suma;
	var resta;

	primerNumero = prompt("ingrese el primer númmero");

	segunNumero = prompt("Ingrese el segundo numero");
	

	if(primerNumero > segunNumero)
	{
		primerNumero = parseInt(primerNumero);
		segunNumero = parseInt(segunNumero);

		resta = primerNumero - segunNumero;
		alert(resta);
	}
	else if (primerNumero < segunNumero)
	{
		primerNumero = parseInt(primerNumero);
		segunNumero = parseInt(segunNumero);

		suma = primerNumero + segunNumero;
		
		if(suma > 10)
		{
			alert("la suma es " + suma + " y supero el 10.");
		}
		else
		{
			alert(suma);
		}
	
	}

	else
	{
		alert(primerNumero + segunNumero);
	}
}

