/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var Sueldo= document.getElementById("sueldo").value;
    var res= parseInt(Sueldo) * 1.10;
    document.getElementById("resultado").value = res;

    
    
    

    
    

	
}
