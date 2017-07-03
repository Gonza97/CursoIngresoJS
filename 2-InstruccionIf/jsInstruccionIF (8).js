function Mostrar()
{
//tomo la edad
var edad= document.getElementById("edad").value;
var estado= document.getElementById("estadoCivil").value;
if(edad<18 && estado!="soltero")
{

}
else
{
    (edad>18 && estado!="Casado" && estado!="Divorciado")
    alert("Es soltero y no es menor");
}


	


}//FIN DE LA FUNCIÓN