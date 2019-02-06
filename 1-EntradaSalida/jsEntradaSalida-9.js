/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldoBase;
	var sueldoConAumento;
	var aumento;

	sueldo1 = sueldo.value;
	sueldo1 = parseInt(sueldo1);
	aumento = 1.1;

	sueldoConAumento= sueldo1 * aumento;



		resultado.value = sueldoConAumento;

}
