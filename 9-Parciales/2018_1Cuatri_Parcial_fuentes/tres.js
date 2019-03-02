function mostrar()
{

	var precio;
	var porcentajeDescuento;
	var precioFinal;
	var descuento;

	precio = prompt("Ingrese el precio");
	precio = parseFloat(precio);

	porcentajeDescuento = prompt("Ingrese el porcentaje de descuento");
	porcentajeDescuento = parseFloat(porcentajeDescuento);

	descuento = precio * porcentajeDescuento / 100;

	precioFinal = precio - descuento;

	elPrecioFinal.value = precioFinal;

}
