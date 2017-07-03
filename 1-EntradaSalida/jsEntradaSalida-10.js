/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
    var Import= document.getElementById("importe").value;
    var res= parseInt(Import) % parseInt(25);
    document.getElementById("resultado").value= res;

	
}
