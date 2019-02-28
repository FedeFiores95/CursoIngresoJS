function mostrar()
{
	var animal;
	var pesoAnimal;
	var tempHabitat;
	var continuar=true;
	var cantTempPares = 0;
	var contador = 0;
	var animalMasPesado;
	var tempAnimalMasPesado;
	var cantAnimalesBajoCero = 0;
	var sumaPesoAnimales = 0;
	var	pesoAnimalMasPesadoBajoCero;
	var pesoAnimalMenosPesadoBajoCero;
	var cantAnimales = 0;
	var pesoAnimalMasPesado;

	while (continuar==true)
	 {
	 	do
	 	 {
	 	 	animal = prompt("Nombre del animal");
	 	 }while(isNaN(animal) == false);

	 	do
	 	 {
	 	 	pesoAnimal = prompt("Peso del animal (Solo un numero entre 1 y 1000)");
	 	 	pesoAnimal = parseInt(pesoAnimal);

	 	 	if (isNaN(pesoAnimal) || pesoAnimal < 1 || pesoAnimal > 1000)
	 	 	 {
	 	 	 	alert("Ingrese solo un numero entre 1 y 1000");
	 	 	 }
	 	 }while(isNaN(pesoAnimal) || pesoAnimal < 1 || pesoAnimal > 1000);

	 	do
	 	 {
	 	 	tempHabitat = prompt("Temperatura del habitat del animal (Solo un numero entre -30 y 30)");
	 	 	tempHabitat = parseInt(tempHabitat);

	 	 	if (isNaN(tempHabitat) || tempHabitat < (-30) || tempHabitat > 30)
	 	 	 {
	 	 	 	alert("Ingrese solo un numero entre -30 y 30");
	 	 	 }
	 	 }while(isNaN(tempHabitat) || tempHabitat < (-30) || tempHabitat > 30);

		if (tempHabitat%2 == 0)
		 {
	 		cantTempPares ++;
	 	 }

		if (contador == 0)
		 {
	 		animalMasPesado = animal;
	 		tempAnimalMasPesado = tempHabitat;
	 		pesoAnimalMasPesado = pesoAnimal;
		 }
		else
		 {
		 	if (pesoAnimalMasPesado < pesoAnimal)
		 	 {
		 	 	animalMasPesado = animal;
		 	 	tempAnimalMasPesado = tempHabitat;
		 	 }
		 }

		if (contador == 0 && tempHabitat < 0)
		 {
	 		pesoAnimalMasPesadoBajoCero = pesoAnimal;
	 		pesoAnimalMenosPesadoBajoCero = pesoAnimal;
		 }

		if (contador != 0 && tempHabitat < 0)
		 {
		 	if (pesoAnimalMasPesadoBajoCero < pesoAnimal)
		 	 {
		 	 	pesoAnimalMasPesadoBajoCero = pesoAnimal;
		 	 }
		 	if (pesoAnimalMenosPesadoBajoCero > pesoAnimal)
		 	 {
		 	 	pesoAnimalMenosPesadoBajoCero = pesoAnimal;
		 	 }
		 }

		if (tempHabitat < 0)
		 {
		 	cantAnimalesBajoCero ++;
		 }

		cantAnimales ++;

		sumaPesoAnimales += pesoAnimal;

	 	contador = 1;

	 	continuar = confirm("¿Desea continuar?");
	 }

	promedioPesoAnimales= sumaPesoAnimales/cantAnimales;

	document.write("Cantidad de temperaturas pares = " + cantTempPares);
	document.write("<br>El animal mas pesado es " + animalMasPesado + " y vive a " + tempAnimalMasPesado + "°");
	document.write("<br>Hay " + cantAnimalesBajoCero + " animales que viven a temperaturas bajo cero");
	document.write("<br>El promedio de peso de todos los animales es " + promedioPesoAnimales);
	document.write("<br>El animal que vive a temperatura bajo cero mas pesado pesa " + pesoAnimalMasPesadoBajoCero + " kilos. Y el peso del animal que vive a temperatura bajo cero mas liviano es de " + pesoAnimalMenosPesadoBajoCero + " kilos.");

}
