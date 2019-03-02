/*
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar), 
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos.	
f) El peso máximo y el mínimo.
*/

function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var respuesta;
	var cantTemperaturasPares = 0;
	var flagPesoMaximo = false;
	var pesoMaximo;
	var marcaMaximo;

	do
	 {
	 	marca = prompt("Ingrese la marca del producto");
	 	peso = prompt("Ingrese el peso");
	 	while(isNaN(peso) || peso < 1 || peso > 100)
	 	 {
	 	 	peso = prompt("Reingrese el peso");
	 	 }
	 	temperatura = prompt("ingrese la temperatura");
	 	while(isNaN(temperatura) || temperatura < -30 || temperatura > 30)
	 	 {
	 	 	temperatura = prompt("Reingrese la temperatura");
	 	 }

	 	if (temperatura%2 == 0)
	 	 {
	 	 	cantTemperaturasPares ++;
	 	 }
	 	
	 	if (flagPeso == false)
	 	 {
	 	 	marcaMaximo = marca;
	 	 	pesoMaximo = peso;
	 	 	pesoMinimo =peso;

	 	 	flagPeso=true
	 	 }
	 	 else
	 	  {
	 	  	if (peso > pesoMaximo)
	 	  	 {
	 	  	 	pesoMaximo = peso;
	 	  	 	marcaMaximo = marca;
	 	  	 }
	 	  	if (peso < pesoMinimo)
	 	  	 {
	 	  	 	pesoMinimo = peso;
	 	  	 }
	 	  }
	 	respuesta = confirm("¿Desea ingresar otro producto?");
	 }	while(respuesta == true);
document.write("La cantidad de temperaturas pares es " + cantTemperaturasPares);
}