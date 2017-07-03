/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
    var n1= document.getElementById("numeroUno").value;
    var n2= document.getElementById("numeroDos").value;
    var res= parseInt(n1) + parseInt(n2);
    alert("La suma es: " + res);



}

function restar()
{
    var n1= document.getElementById("numeroUno").value;
    var n2= document.getElementById("numeroDos").value;
    var res= parseInt(n1) - parseInt(n2);
    alert("La resta es: " + res);
	
}

function multiplicar()
{
    var n1= document.getElementById("numeroUno").value;
    var n2= document.getElementById("numeroDos").value;
    var res= parseInt(n1) * parseInt(n2);
    alert("La multiplicación es: " + res);
	
}

function dividir()
{
    var n1= document.getElementById("numeroUno").value;
    var n2= document.getElementById("numeroDos").value;
    var res= parseInt(n1) / parseInt(n2);
    alert("la division es : " + res);


	
}

