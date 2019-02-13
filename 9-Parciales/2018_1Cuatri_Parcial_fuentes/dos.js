function mostrar()
{
  
	var precioEfectivo;
	var recargoTarjeta;
	var PrecioTarjeta;

	precioEfectivo = elNombre.value;
	precioEfectivo = parseInt(precioEfectivo);

	recargoTarjeta = precioEfectivo *10/100;

	PrecioTarjeta = precioEfectivo + recargoTarjeta;

	alert("El precio del producto en efectivo es de $" + precioEfectivo + ", con tarjeta tiene un recargo del 10%, que seria $" + recargoTarjeta + " de recargo, costandole de precio final $" + PrecioTarjeta);

}
