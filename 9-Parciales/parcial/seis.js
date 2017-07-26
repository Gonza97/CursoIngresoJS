function Mostrar()
{
    var importe;
    var contador = 0;
    var max;
    var min;
    importe = parseInt(importe);
    while(contador < 24)
    {           
         importe = prompt("Ingrese un numero")
         importe = parseInt(importe);
         if(importe > 0)
         {
             contador = contador+1;
         }
         else
         {
             alert("Ingrese un numero mayor a cero")
         }
         if(contador == 1)
         {
             max = importe;
             min = importe;
         }
         else if(importe > max)
         {
             max = importe;
         }
         else
         {
             min = importe;
         }
       
    }
     alert("Maximo: " + max);
     alert("Minimo: " + min);
    
    


}
