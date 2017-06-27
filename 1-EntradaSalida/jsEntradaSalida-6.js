/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var n1 = document.getElementById("numeroUno").value;
    var n2 = document.getElementById("numeroDos").value;
    var res = parseInt(n1) + parseInt(n2);
    alert(res);
    

}

