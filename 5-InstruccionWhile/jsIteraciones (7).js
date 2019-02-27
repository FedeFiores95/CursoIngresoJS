function mostrar()
{
	var contador=0;
	var acumulador=0;
	var respuesta = true;
	var numero;

while (respuesta == true) 
	{
	do  {
			numero = prompt("Ingrese un número para suma");
			parseInt(numero);

			if (isNaN(numero))
			 {
			 	alert("No es un número");
			 }

		} while (isNaN(numero));

		contador ++ ;
		acumulador += numero;
		respuesta = confirm("¿Desea continuar con la suma");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN