
function mostrar()
{
	var personaje1;
	var personaje2;
	var edad1;
	var edad2;
	var sumaEdades;

	personaje1 = prompt("Ingrese el nombre del personaje 1");
	edad1 = prompt("Ingrese la edad del personaje 1");
	edad1 = parseInt(edad1);

	personaje2 = prompt("Ingrese el nombre del personaje 2");
	edad2 = prompt("Ingrese la edad del personaje 2");
	edad2 = parseInt(edad2);

	sumaEdades = edad1 + edad2;

	alert("Ustedes son " + personaje1 + " y " + personaje2 + ", sus edades son " + edad1 + " y " + edad2 + ", y la suma de sus edades es " + sumaEdades);

}

