/*
Luciano Rafael Vega Luna DIV E
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//declaramos variable
	var dividendo;
	var divisor;
    var resto;
    var resultado
    var resto;

    //guardamos datos del id
    dividendo = document.getElementById("txtIdNumeroDividendo").value;
    divisor =  document.getElementById("txtIdNumeroDivisor").value;

    //los convertimos en enteros
    dividendo = parseInt(dividendo)
    divisor = parseInt(divisor)

    resultado =  dividendo / divisor;

    // % modulo
    resto = dividendo % divisor;
    alert("El resto de la división es " + resto) 

}
