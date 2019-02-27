function mostrar()
{
	var negativo=1;
	var positivo=0;
	var respuesta=true;
	var numero;

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

	if (numero >= 0)
	 {
	 	positivo += numero;
	 }
	 else
	 {
	 	negativo *= numero;
	 }
		respuesta = confirm("¿Desea continuar");
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN