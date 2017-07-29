//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var num1 = prompt("Ingrese un numero");
	var num2 = prompt("Ingrese otro numero");
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	var multiplicacion;
	var resta;
	var suma;
	if(num1 == num2)
	{
		multiplicacion = num1 * num2;
		document.write("<h1> multiplicacion </h1>" + multiplicacion);
	}
	else if(num1 > num2)
	{
		resta = num1 - num2;
		document.write("<h1> Resta </h1>" + resta);
	}
	else
	{	
		suma = num1 + num2;
		document.write("<h1> Suma </h1>" + suma);
	}
	
}

