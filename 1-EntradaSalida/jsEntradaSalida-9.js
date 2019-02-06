/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

/*
	var sueldo = parseInt(sueldo.value);
	var resultado;

	resultado=(sueldo*1.1);

	resultado.value =resultado;
*/

	var sueldo = parseInt(sueldo.value);
	var resultado = sueldo*1.1

	alert("el resultado es "+resultado)

}
