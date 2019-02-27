function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta=true;
	var numero;
	var maximo;
	var minimo;

while (respuesta == true) 
	{
	do  {
			numero = prompt("Ingrese un número");
			numero = parseInt(numero);

			if (isNaN(numero))
			 {
			 	alert("No es un número");
			 }
		} while (isNaN(numero));
		if (contador == 0)
		 {
		 	maximo = numero;
		 	minimo = numero;
		 	contador = 1;
		 }
		 else 
		 {
		 	if (numero > maximo)
		 	 {
		 	 	maximo = numero;
		 	 }
		 	if (numero < minimo)
		 	 {
		 	 	minimo = numero;
		 	 }
		 }
		respuesta = confirm("¿Desea continuar");
	}
document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;
}//FIN DE LA FUNCIÓN