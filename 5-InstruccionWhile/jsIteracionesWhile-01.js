/*
Luciano Rafael Vega Luna DIV E
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var i;

	i = 0;

	while( i < 10)
	{
		
		document.write("El numero para mostrar es :" +(i+1) + "<br>");
		i =  i + 1;
	}


}//FIN DE LA FUNCIÓN
 
 // i (contador)


 /* while(condicion) true o false(Para que entre a el while la condicion tiene que ser verdadera)
 {
 	sentencia que necesito que se repita

 	sentencia que modifica la la condicion o variable de controñ
 }
  "<br>" hace un salto en la sentencia
  */