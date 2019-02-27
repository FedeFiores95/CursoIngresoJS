function mostrar()
{
	var nota;
	var sumaNotas = 0;
	var contador = 0;
	var sexo;
	var cantVMasSeis = 0;
	var promedio;
	var sexoNotaMasBaja;
	var notaMasBaja;

	while(contador < 5)
	{
		do  {
		nota = prompt("Ingrese la nota");
		nota = parseInt(nota);

			if (isNaN(nota))
		 	{
		 		alert("No es un número");
			}
			if (nota < 0 || nota > 10)
			{
				alert("Ingrese un número del 1 al 10");
			}
			} while (isNaN(nota) || nota < 0 || nota > 10);	

		do
		{
		sexo = prompt("Ingrese su sexo (f = femenino, m = masculino)")

			if (isNaN(sexo) == false || sexo != "f" && sexo != "m")
			 {
			 	alert("Ingrese solo f o m (f = femenino, m = masculino) " + sexo );
			 }
		}while (isNaN(sexo) == false || sexo != "f" && sexo != "m");

		if (sexo == "m" && nota >=6)
		 {
		 	cantVMasSeis ++;
		 }

		if (contador==0)
		 {
		 	notaMasBaja = nota;
		 	sexoNotaMasBaja = sexo;
		 }
		 else
		 {
		 	if (nota < notaMasBaja)
		 	 {
				notaMasBaja = nota;
		 		sexoNotaMasBaja = sexo;
		 	 }
		 }
		sumaNotas += nota;
		contador ++;
	}

	promedio = sumaNotas/contador;

	alert("Promedio de todas las notas = " + promedio + ". La nota mas baja = " + notaMasBaja + ". Sexo nota mas baja = " + sexoNotaMasBaja + ". Cantidad de varones con nota mayor a 6 = " + cantVMasSeis);
}
