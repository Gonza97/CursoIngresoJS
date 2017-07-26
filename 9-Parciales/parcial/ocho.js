function Mostrar()
{
    var num;
    var contador = 0;
    var suma = 0;
    var promedio;
    var contadorpares = 0;
    var respuesta = true
    while(respuesta == true)
    {
        num = prompt("Ingrese un numero");
        num = parseInt(num);
    
      if(num > 0)
      {
          suma = suma + num;
          contador = contador+1;
          respuesta = confirm("Quiere seguir ingresando numeros");         
      }
      else if(!(num > 0))
      {
          num = prompt("ERROR: ingrese un numero");         
      }
      if(num % 2 == 0)
      {
          contadorpares= contadorpares+1;
      }
      
      
      if(contador == 1)
      {
          max = num;
          min = num;
      }
      else if(num > min)
      {
          max = num;
      }
      else
      {
          min = num
      }
    } 
       promedio = suma / contador;
        document.write("<h1>Cantidad de numeros pares: </h1>" + contadorpares);
        document.write("<h1>Promedio: </h1>" + promedio);
        document.write("<h1>Numero maximo: </h1>" + max);
        document.write("<h1>Numero minimo: </h1>" + min);

}
