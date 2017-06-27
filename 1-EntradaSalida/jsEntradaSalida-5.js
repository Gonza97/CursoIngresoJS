/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{
    var nombre  = document.getElementById("elNombre").value;
    var edad = document.getElementById("laEdad").value;
    var msj1 = ("Usted se llama");
    var msj2 = ("y tiene");
    var msj3 = ("años");
    var msjt = msj1.concat(nombre) + " " + msj2.concat(edad) + " " + ("años");
    alert(msjt);

    
   
   


    
    


    
    

	
}

