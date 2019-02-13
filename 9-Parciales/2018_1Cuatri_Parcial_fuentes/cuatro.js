function mostrar()
{
	var	sumaPrecios;
	var cantidadProductos;
	var descuentoCantidad;
	var descuentoPrecio;
	var metodoPago;
	var precioFinal;

	sumaPrecios = prompt("Ingrese el importe");
	sumaPrecios = parseInt(sumaPrecios);

	cantidadProductos = prompt("Ingrese la cantidad de productos comprados");
	cantidadProductos = parseInt(cantidadProductos);

	if (cantidadProductos >2)
	 {
	 	descuentoCantidad = sumaPrecios *10/100;
	 	precioFinal = sumaPrecios - descuentoCantidad;

		if (sumaPrecios >= 2000)
		{
		descuentoPrecio = precioFinal *15/100;
		precioFinal = precioFinal - descuentoPrecio;
		}
	 }
	metodoPago = prompt("Ingrese el metodo de pago");

	if (metodoPago == "Tarjeta")
	 {
	 	recargoTarjeta = precioFinal *10/100;
	 	precioFinal = precioFinal + recargoTarjeta;

	 }
	alert("El precio final a pagar es $" + precioFinal);
}