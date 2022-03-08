/*
Bienvenidos (SWITCH +IF).
Se ingrEsa una hora.
Si Está entre las 6 y las 11 mostrar:"Es de mañana",
si Es dEsde las 12 a las 19: "Es de tarde",
de lo contrario informar que Es de noche.
Informar si la hora no Es válida.
Si Es de noche y la hora Es menor a 24 mostrar se debe agregar el mensaje : "a dormir".

*/

function mostrar()
{
	var hora;

	hora = document.getElementById("laHora").value;
	hora = parseFloat(hora);

	while(hora > 24 || hora < 0)
	{
		hora = prompt("Error, reingrEse una hora valida(0 al 24)");
		hora = parseFloat(hora);
	}

	switch(hora)
	{
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana";
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			mensaje = "Es de tarde";
			break;
		default:
			mensaje = "Es de noche"
			if(hora < 24)
			{
				mensaje = "A dormir"
			}
			break;

	}

	alert(mensaje);
}
