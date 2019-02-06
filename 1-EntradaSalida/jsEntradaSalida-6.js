/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/


/*
function sumar()
{

	var numero1 = numeroUno.value;
	var numero2 = numeroDos.value;

	parseInt(numeroUno.value);
	parseInt(numeroDos.value);

	alert(numero1+numero2);

}
*/

/*
function sumar()
{

	var numero1 = numeroUno.value;
	var numero2 = numeroDos.value;

	parseInt(numero1);
	parseInt(numero2);

	alert(numero1+numero2);

}
*/

function sumar()
{

	var numero1 = parseInt(numeroUno.value);
	var numero2 = parseInt(numeroDos.value);
	var resultado = numero1+numero2;

//	alert("La suma es "+numero1+numero2);

	alert("La suma es "+resultado);

}
