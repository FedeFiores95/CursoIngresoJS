/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var precioLamparas;
 	var cantidadLamparas;
 	var descuento;
 	var marcaLampara;
 	var precioDescuento;

 	precioLamparas = 35;

 	cantidadLamparas = document.getElementById('Cantidad').value;
 	cantidadLamparas = parseInt(cantidadLamparas);

 	/*
	document.getElementById('Cantidad').value = Math.floor((Math.random() * 10) + 1);
	precioLamparas = document.getElementById('Cantidad');
	*/

	marcaLampara = marca.value;

	if (cantidadLamparas == 3)
	 {	
	 	console.log("cantidadLamparas == 3");
	 	
	 	if (marcaLampara == "ArgentinaLuz")
	 	 {
	 	 	descuento = precioLamparas * 15 / 100;

	 	 	precioLamparas = precioLamparas - descuento;

	 	 	console.log(precioLamparas + "== 3 ArgentinaLuz");

	 	 } // == 3 ArgentinaLuz

	 	else if (marcaLampara == "FelipeLamparas")
	 	 {
	 	 	descuento = precioLamparas * 10 / 100;

	 	 	precioLamparas = precioLamparas - descuento;

	 	 	console.log(precioLamparas + "== 3 FelipeLamparas");
	 	 } // == 3 FelipeLamparas

	 	 else 
	 	 {
	 	 	descuento = precioLamparas * 5 / 100;

	 	 	precioLamparas = precioLamparas - descuento;

	 	 	console.log(precioLamparas + "== 3 otra marca");
	 	 }// == 3 otra marca
	 } // cantidad lamparas == 3

	else if (cantidadLamparas == 4)
	 {
	 	console.log("cantidadLamparas == 4");

	 	if ((marcaLampara =="ArgentinaLuz") || (marcaLampara == "FelipeLamparas"))
	 	 {
	 	 	descuento = precioLamparas * 25 / 100;

	 	 	precioLamparas = precioLamparas - descuento;

	 	 	console.log(precioLamparas + " == 4 ArgentinaLuz || FelipeLamparas");
	 	 } // == 4 ArgentinaLuz || FelipeLamparas

	 	else
	 	 {
	 	 	descuento = precioLamparas * 20 / 100;

	 	 	precioLamparas = precioLamparas - descuento;

	 	 	console.log(precioLamparas + " == 4 otra marca");
	 	 } // == 4 otra marca
	 } // cantidadLamparas == 4

	else if (cantidadLamparas == 5)
	 {
	 	console.log("cantidadLamparas == 5");

	 	if (marcaLampara == "ArgentinaLuz")
	 	 {
	 	 	descuento = precioLamparas * 40 / 100;

	 	 	precioLamparas = precioLamparas - descuento;

	 	 	console.log(precioLamparas + " == 5 ArgentinaLuz");
	 	 } // == 5 ArgentinaLuz 
	 } // cantidadLamparas == 5

}
