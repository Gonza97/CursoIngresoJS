function Mostrar()
{
  var importe = prompt("Ingrese importe del producto");
  var iva = 1.21
  var suma;
  importe = parseInt(importe);
  suma = importe * iva;
  document.getElementById("importeFinal").value = suma;

  
}
