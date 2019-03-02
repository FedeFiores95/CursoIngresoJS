/* Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los resto, 
de lo contrario los sumo. 
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y supero el 10". */

function mostrar()
{
	var	numeroUno;
	var numeroDos;
	var suma;

	numeroUno = prompt("Ingrese el primero numero");
	numeroUno = parseInt(numeroUno);

	numeroDos = prompt("Ingrese el segundo numero");
	numeroDos = parseInt(numeroDos);

	if (numeroUno == numeroDos)
	 {
	 	alert(numeroUno + " y " + numeroDos);
	 }
	 else
	 	{
	 		if (numeroUno > numeroDos)
	 		 {
	 		 	alert(numeroUno - numeroDos);
	 		 }
	 		 else
	 		 	{
	 		 		suma = numeroUno + numeroDos;
	 		 		alert(suma);
	 		 			if (suma>10)
	 		 			 {
	 		 			 	alert("La suma es " + suma + " y supero al 10");
	 		 			 }
	 		 	}
	 	}
}