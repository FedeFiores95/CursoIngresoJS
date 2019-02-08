/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro;
	var alambre;

	largo = largoTerreno.value;
	ancho = anchoTerreno.value;

	perimetro = largo * ancho;

	alambre = perimetro * 3;

	alert("Hay que comprar " + alambre + " metros de alambre");
}

function Circulo () 
{
	var radio;
	var diametro;
	var alambre;

	radio = radioTerreno.value;
	diametro = radio * 2;
	
	alambre = diametro * 3;

	alert("Hay que comprar " + alambre + " metros de alambre");
}

function Materiales () 
{
	
	var cemento = 2;
	var cal 	= 3;
	var largo;
	var ancho;
	var perimetro;
	var cementoTotal;
	var calTotal;

	largo = largoTerreno.value;
	ancho = anchoTerreno.value;
	perimetro = largo * ancho;

	cementoTotal = perimetro * cemento;
	calTotal	 = perimetro * cal;

	alert("Se necesitan " + cemento + " bolsas de cemento y " + cal " bolsas de cal");


}