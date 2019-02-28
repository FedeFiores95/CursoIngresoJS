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
	var sumaPos = 0;
	var sumaNeg = 0;
	var contador = 0;
	var continuar = true;
	var cantPos = 0;

	while (continuar == true)
	{
		do
		{
		letra = prompt("Ingrese una letra");
			if (isNaN(letra) == false || letra.length != 1)
			 {
			 	alert("Ingrese solo una letra");
			 }
		}while (isNaN(letra) == false || letra.length != 1);

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
	 	if (numero == 0)
	 	 {
	 	 	cantCeros ++;
	 	 }
	 	if (numero > 0)
	 	 {
	 	 	sumaPos += numero;
	 	 	cantPos ++;
	 	 }
	 	 else
	 	  {
	 	  	sumaNeg += numero;
	 	  }
	 	if (contador == 0)
	 	 {
	 	 	letraMinimo = letra;
	 	 	letraMaximo = letra;
	 	 	numMinimo = numero;
	 	 	numMaximo = numero;
	 	 	contador = 1;
	 	 }
	 	 else
	 	 {
	 	 	if (numero > numMaximo)
	 	 	 {
	 	 	 	numMaximo = numero;
	 	 	 	letraMaximo = letra;
	 	 	 }
	 	 	if (numero < numMinimo)
	 	 	 {
	 	 	 	numMinimo = numero;
	 	 	 	letraMinimo = letra;
	 	 	 }
	 	 }

		continuar = confirm("¿Desea continuar?");
	}

	promedioPos = sumaPos/cantPos;

	alert(numero + " " + letra);
	alert("Cantidad par = " + cantPar + ". Cantidad Impar = " + cantImpar);
	alert("Cantidad de 0 = " + cantCeros);
	alert("Promedio de los positivos = " + promedioPos);
	alert("Suma de los negativos = " + sumaNeg);
	alert("Letra y numero maximos = " + letraMaximo + " " + numMaximo + ". Letra y numero minimos = " + letraMinimo + " " + numMinimo);

}
