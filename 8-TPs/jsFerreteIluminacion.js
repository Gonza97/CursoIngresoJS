/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var marcas= document.getElementById("Marca").value;
    var precio= parseInt(35);
    var cant= document.getElementById("Cantidad").value;
    var res
    if(cant>=6)
    {
        cant= parseInt(cant);
        res= (cant * precio) *0.50;      
        document.getElementById("precioDescuento").value= res;
    }
   else if(cant==5 && marcas=="ArgentinaLuz")
   {
       res= (cant * precio) * 0.40;
       document.getElementById("precioDescuento").value= res;
   }
   else if(cant==4 && marcas=="ArgentinaLuz" && marcas=="FelipeLamparas")
   {
       res= (cant * precio) * 0.25;
       document.getElementById("precioDescuento").value= res;
   }
   else if(cant==4)
   {
       res= (cant * precio) * 0.20;
    document.getElementById("precioDescuento").value= res;
   }
   else if(cant==3 && marcas=="ArgentinaLuz")
   {
       res= (cant * precio) * 0.15;
   }
   else if(cant==3 && marcas=="FelipeLamparas")
   {
       res= (cant * precio) * 0.10;
       document.getElementById("precioDescuento").value= res;      
   }
   else if(cant==3)
   {
       res= (cant * precio) * 0.05;
       document.getElementById("precioDescuento").value= res;
   }
   if("")




       
   
    
   


}
