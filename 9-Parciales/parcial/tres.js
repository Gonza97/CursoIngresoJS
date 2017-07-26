function Mostrar()
{
    var largo = document.getElementById("largo").value;
    var ancho = document.getElementById("ancho").value;
    var alambre;
    var total;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    alambre = largo * ancho;
    total = alambre * 3;
    alert(total);


}
