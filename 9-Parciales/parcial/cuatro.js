function Mostrar()
{
    var primero = prompt("Ingrese un numero")
    var segundo = prompt("Ingrese un numero")
    var multi;
    var resta;
    var suma;
    primero = parseInt(primero);
    segundo = parseInt(segundo);
    if(primero == segundo)
    {
        multi = primero * segundo;
        document.write("<h1>Multiplicacion: </h1>" + multi);
    }
    if(primero > segundo)
    {
        resta = primero - segundo;
        document.write("<h1>Resta: </h1>" + resta);
    }
    if(primero < segundo)
    {
        suma = primero + segundo;
        document.write("<h1>suma: </h1>" + suma);
    }
    

    
}
