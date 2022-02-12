/*
Luciano Rafael Vega Luna DIV E
Tp nro 4FerreteIluminacion
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

 /*
function CalcularPrecio () 
{
 	var cantidadDeLamparas;
    var marca;
    var ImporteFinal;
    var importeSinDescuento;
    var impuesto;

    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    cantidadDeLamparas = parseInt(cantidadDeLamparas);
    importeSinDescuento = cantidadDeLamparas * 35;
    
    console.log(importeSinDescuento);

    if (cantidadDeLamparas >= 6)//Inciso A
    {
        importeFinal = importeSinDescuento - importeSinDescuento * (50/100);
    }

    else if (cantidadDeLamparas == 3)//inciso D
    {
        if( marca == "ArgentinaLuz" )
        {
        importeFinal = importeSinDescuento - importeSinDescuento * (15/100);
        }
        else if (marca == "FelipeLamparas")
        {
        importeFinal = importeSinDescuento - importeSinDescuento * (10/100); 
        }
        else 
        {
        importeFinal = importeSinDescuento - importeSinDescuento * (5/100); 
        } 
    }  


    else if (cantidadDeLamparas == 4 )//Inciso C
    {
        if ( marca == "ArgentinaLuz" ||  marca == "FelipeLamparas" )
        {
        importeFinal = importeSinDescuento - importeSinDescuento * (25/100); 
        }
        else 
        {
        importeFinal = importeSinDescuento - importeSinDescuento * (20/100); 
        }
    }

    else if (cantidadDeLamparas == 5) //Inciso B
    {
        if( marca == "ArgentinaLuz" )
        {
        importeFinal = importeSinDescuento - (importeSinDescuento * (40/100));
        }
        else
        {
        importeFinal = importeSinDescuento - importeSinDescuento * (30/100); 
        }
    }   
    else 
    {
        importeFinal = importeSinDescuento;
    }

    if (importeFinal > 120) //inciso E
    {
        impuesto = importeFinal * (10/100);
        importeFinal = importeFinal - impuesto; 
        alert("Usted pago " + importeFinal + " de IIBB, siendo " + impuesto + " el impuesto que se pagó.");
    }

    document.getElementById("txtIdprecioDescuento").value = importeFinal;
}

*/
function CalcularPrecio () 
{
    var cantidadLamparas;
    var marca;
    var precioConDescuento;
    var precioLampara;
    var descuento;
    var precio;


    cantidadLamparas=document.getElementById("txtIdCantidad").value;
    marca=document.getElementById("Marca").value;
    

    cantidadLamparas=parseInt(cantidadLamparas);
    
    precioLampara= 35
    console.log(precioConDescuento);


    //punto a
    
    if(cantidadLamparas >= 6)

        {  
      descuento = 50/100;
    

  

        }


else if (cantidadLamparas == 5)

        { 
    
    if (marca == "ArgentinaLuz" )

        {  descuento = 40/100;  

        }   

else  
   
        {    

        descuento= 30/100;

        } 


        } 


   else if (cantidadLamparas == 4)
    
     { 


    
     if (marca== "ArgentinaLuz" || marca==  "FelipeLamparas") 

    { descuento = 25/200

    }  
   


    else 
        {  
            descuento= 20/100;

                } 

        }   



 else if (cantidadLamparas==3)


        { 
    if(marca=="ArgentinaLuz")
        {  descuento = 15/100 ;

        }

   else if(marca=="felipelamparas")

        { 

     descuento = 10/100 

        }


        }

        else

            {  descuento = 5/100

                }



     precioConDescuento= (cantidadLamparas  * precioLampara);


    document.getElementById("txtIdprecioDescuento").value= precioConDescuento;

                }