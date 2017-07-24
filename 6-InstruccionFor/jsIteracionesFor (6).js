function Mostrar()
{
   var pares = 0;
   var num; 
   num = prompt("Ingrese un numero");
   num = parseInt(num);
   for(i=1; i<=num ; i++)
   {
       if(i%2==0)
       {      
          pares++;
          alert("numero " + i);
       } 
   }
   alert(pares);
       
  

}//FIN DE LA FUNCIÓN