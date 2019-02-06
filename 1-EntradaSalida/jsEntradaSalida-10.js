/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	/*
	Primer comando de consola
	*/

	var sueldoBase;
	var descuento;
	var sueldoDescuento;
	var porcentajeDescuento;

	sueldoBase = importe.value;
	sueldoBase = parseInt (sueldoBase);
	porcentajeDescuento  = 10;

	descuento = sueldoBase / porcentajeDescuento;

	sueldoDescuento = sueldoBase - descuento;


	alert(sueldoBase);
	console.log(descuento);
	resultado.value = ("El Sueldo con descuento es " + sueldoDescuento);
}

