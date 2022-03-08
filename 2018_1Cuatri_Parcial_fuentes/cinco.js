function mostrar()
{
	var planeta;

	planeta = prompt("Ingrese un planeta de nuestro sistema solar");
	planeta = planeta.toLowerCase()

	while(planeta != "tierra" && planeta != "mercurio" && planeta != "venus" && planeta != "marte" && planeta != "jupiter" && planeta != "saturno" && planeta != "urano" && planeta != "neptuno")
	{
		planeta = prompt("Reingrese un planeta valido del sistema solar");
		planeta = planeta.toLowerCase()
	}

	switch(planeta)
	{
		case "tierra":
			mensaje = "Aca vivimos";
			break;
		case "venus":
		case "mercurio":
			mensaje = "Aca hace mas frio";
			break;
		default:
			mensaje = "Aca hace mas calor";
			break;
	}
	alert(mensaje);

}
