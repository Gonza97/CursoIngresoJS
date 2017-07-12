function Mostrar()
{
	/*Al presionar el botón pedir números hasta que el usuario quiera, mostar:
		1-Suma de los negativos.
		2-Suma de los positivos. 
		3-Cantidad de positivos. 
		4-Cantidad de negativos. 
		5-Cantidad de ceros. 

		6-Cantidad de números pares. 
		7-Promedio de positivos. 
		8-Promedios de negativos. 
		9-Diferencia entre positivos y negativos, (positvos-negativos).
     */
	var sumaNegativos=0;
	var sumaPositivos=0;

	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadCeros=0;
	var cantidadPares=0;

	var promedioPositivos=0;
	var promedioNegativos=0;

	var difPositivosNegativos=0;

	var contador=0;
	var numero;
	//declarar contadores y variables 
	
	var respuesta=true;

	while(respuesta!=false)
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);

		while(isNaN(numero))
		{
			numero=prompt("ERROR: ingrese numero");
			numero=parseInt(numero);
		}

		if(numero >0)
		{
			cantidadPositivos++;
			sumaPositivos= sumaPositivos+numero;
		}
		else if(numero< 0)
		{
			cantidadNegativos++;
			sumaNegativos= sumaNegativos+numero;		
		}
		else
		{
			cantidadCeros++;
		}

		if(numero % 2== 0)
		{
			cantidadPares++;
		}

		respuesta=confirm("¿desea seguir?");
	}
	promedioPositivos= cantidadPositivos / sumaPositivos;
	promedioNegativos= cantidadNegativos / sumaNegativos;

	difPositivosNegativos= sumaNegativos + sumaPositivos;
	if(difPositivosNegativos<0)
	{
		difPositivosNegativos= difPositivosNegativos * -1;
	}
	else
	{		
	}
	if(cantidadNegativos>0)
	{
		promedioNegativos= difPositivosNegativos / cantidadNegativos;
	}
	else
	{
		alert("No ingreso numeros negativos")
	}
	if(cantidadPositivos>0)
	{
		promedioPositivos= difPositivosNegativos / cantidadPositivos;
	}
	else
	{
		alert("No ingreso numeros positivos");
	}

	


	document.write("<h1>La suma de negativos: </h1>" + sumaNegativos);
	document.write("<h1>La suma de positivos: </h1>" + sumaPositivos);
	document.write("<h1>La cantidad de negativos: </h1>" + cantidadNegativos);
	document.write("<h1>La cantidad de positivos: </h1>" + cantidadPositivos);
	document.write("<h1>La cantidad de ceros: </h1>" + cantidadCeros);
	document.write("<h1>La cantidad de numeros pares: </h1>" + cantidadPares);
	document.write("<h1>Promedio de positivos: </h1>" + promedioPositivos);
	document.write("<h1>Promedio de negativos: </h1>" + promedioNegativos);
	document.write("<h1>Diferencia entre neg y pos: </h1>" + difPositivosNegativos);



	




}//FIN DE LA FUNCIÓN