/*
Luciano Rafael Vega Luna DIV E
Tp nro 4FerreteIluminacion
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del descuento con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el descuento que se pagó. 

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

/*
function CalcularPrecio ()

{
    var cantidadDeLamparas;
    var descuento;
    var importeSinDescuento;
    var importeFinal;
    var marca;
    var impuesto;

    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    cantidadDeLamparas = parseInt(cantidadDeLamparas);
    importeSinDescuento = cantidadDeLamparas * 35;
    
    console.log(importeSinDescuento);

    if (cantidadDeLamparas >= 6)//Inciso A
    {
        descuento = 50/100;
    }

    else if (cantidadDeLamparas == 3)//inciso D
    {
        switch(marca)
        {
            case "ArgentinaLuz":
                descuento = 15/100;
                break;
            case "FelipeLamparas":
                descuento = 10/100;
                break;
            default:
                descuento = 5/100;
                break;
        }
    }
    else if (cantidadDeLamparas == 4 )
        {
            switch(marca)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 25/100;
                    break;
                default:
                    descuento = 20/100;
                    break;
            }
        }
    else if(cantidadDeLamparas == 5) 
    {
        switch(marca)
        {
            case "ArgentinaLuz":
                descuento = 40/100;
                break;
            default:
                descuento = 30/100;
        }

    }
    else
    {
        descuento = 0;
    }

    importeFinal = importeSinDescuento - importeSinDescuento * descuento;   

    if(importeFinal > 120) //inciso E
    {
        impuesto = importeFinal * (10/100);
        importeFinal = importeFinal - descuento; 
        alert("Usted pago " + importeFinal + " de IIBB, siendo " + impuesto + " el impuesto que se pagó.");
    }

    document.getElementById("txtIdprecioDescuento").value = importeFinal;
}
*/

function CalcularPrecio ()

{
    var cantidadDeLamparas;
    var descuento;
    var importeSinDescuento;
    var importeFinal;
    var marca;
    var impuesto;

    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    cantidadDeLamparas = parseInt(cantidadDeLamparas);
    importeSinDescuento = cantidadDeLamparas * 35;
    
    console.log(importeSinDescuento);


    switch(cantidadDeLamparas)
        {
            case 5: //Inciso B
                switch(marca)
                {
                    case "ArgentinaLuz":
                        descuento = 40/100;
                        break;
                     default:
                        descuento = 30/100;
                        break;        
                }
            break;
            case 4://Inciso C
                switch(marca)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        descuento = 25/100;
                        break;
                    default:
                        descuento = 20/100;
                        break;
                }
            break;
            case 3://Inciso D
                switch(marca)
                    {
                        case "ArgentinaLuz":
                            descuento = 15/100;
                            break;
                        case "FelipeLamparas":
                            descuento = 10/100;
                            break;
                        default:
                            descuento = 5/100;
                            break;
                    }
            break;
            case 2:
            case 1:
                descuento = 0;
                break;
            default: //inciso A
                descuento = 50/100;
                break;                         
        }

    importeFinal = importeSinDescuento - importeSinDescuento * descuento;

    if(importeFinal > 120) //inciso E
    {
        impuesto = importeFinal * (10/100);
        importeFinal = importeFinal - impuesto; 
        alert("Usted pago " + importeFinal + " de IIBB, siendo " + impuesto + " el impuesto que se pagó.");
    }
    console.log(descuento)

    document.getElementById("txtIdprecioDescuento").value = importeFinal;
}
