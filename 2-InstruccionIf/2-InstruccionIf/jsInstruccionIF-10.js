/*
Luciano Rafael Vega Luna DIV E
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	var nota;

	nota = Math.floor(Math.random() * (11 - 1) + 1);

	console.log(nota);

	if (nota >= 9)
	{
		alert("EXCELENTE");
	}
	else if (nota >= 4)
	{
		alert("APROBÓ");
	}
	else 
	{
		alert("Vamos, la proxima se puede");
	}


}//FIN DE LA FUNCIÓN

//Hacer el tp 4