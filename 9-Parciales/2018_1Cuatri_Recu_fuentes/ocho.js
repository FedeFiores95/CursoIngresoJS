function mostrar()
{
	var letra;
	var numero;
	var letraMaximo;
	var letraMinimo;
	var numMaximo;
	var numMinimo;
	var cantPar = 0;
	var cantImpar = 0;
	var cantCeros = 0;
	var promedioPos;
	var sumaNeg = 0;
	var contador = 0;
	var continuar = true;

	while (continuar == true)
	{
		do
		{
		letra = prompt("Ingrese una letra");
			if (isNaN(letra) == false)
			 {
			 	alert("Ingrese solo letras");
			 }
		}while (isNaN(letra) == false);

		do
		{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

			if (isNaN(numero) || numero < (-100) || numero > 100)
			 {
			 	alert("Ingrese solo numeros del -100 al 100")
			 }
		} while(isNaN(numero) || numero < (-100) || numero > 100);

		if (numero%2 == 0)
	 	{
	 		cantPar ++;
	 	}
	 	else
	 	{
	 		cantImpar++;
	 	}

		continuar = confirm("¿Desea continuar?");
	}

	alert(numero + " " + letra);

	alert("Cantidad par = " + cantPar + ". Cantidad Impar = " + cantImpar);
}
