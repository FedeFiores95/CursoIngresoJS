function mostrar()
{
	var respuesta=true;
	var sumaPos=0;
	var sumaNeg=0;
	var cantPos=0;
	var cantNeg=0;
	var diferencia;

	while(respuesta == true)
	 {
		do  {
			numero = prompt("Ingrese un número");
			numero = parseInt(numero);

			if (isNaN(numero))
			 {
			 	alert("No es un número");
			 }
		} while (isNaN(numero)); //pedir numero

		if (numero >= 0)
		 {
		 	sumaPos += numero;
		 	cantPos ++;
		 }
		else 
		 {
		 	sumaNeg += numero;
		 	cantNeg ++;
		 }
		 respuesta = confirm("¿Desea continuar?");
	 }//respuesta == true
diferencia = sumaPos+=sumaNeg;
document.write("Suma de los positivos = " + sumaPos + " <br>Suma de los negativos = " + sumaNeg +
"<br> Cantidad de positivos = " + cantPos + "<br> Cantidad de negativos = " + cantNeg +
"<br> Promedio positivos = " + sumaPos/cantPos + "<br> Promedio negativos = " + sumaNeg/sumaNeg +
"<br> Diferencia = " + diferencia);


}//FIN DE LA FUNCIÓN