function Mostrar()
{
    var num = prompt("Ingrese un numero");
    var primo = true;
    for( i=2 ; i<num ; i++)
    {
        if(num%i==0)
        {
            primo = false
            break;
        }

    }
    if(!primo)
    {
        alert("No es primo");
    }
    else
    {
        alert("Es primo");
    }
    



}//FIN DE LA FUNCIÓN