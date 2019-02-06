/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
/*
	var numero1 = parseInt(numeroDividendo.value);
	var numero2 = parseInt(numeroDivisor.value);
	var resultado = numero1 % numero2;

	alert("El resto es "+resultado);
*/
	var numero1;
	var numero2;
	var resultado;

	numero1 = numeroDividendo.value;
	numero2 = numeroDivisor.value;
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	resultado = numero1 % numero2;

	alert("El resto es "+resultado);

}
