/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahrenheit;
	var resultado;

	fahrenheit = temperatura.value;
	fahrenheit = parseInt(fahrenheit);
	resultado	= (fahrenheit - 32) * 5 / 9;

	alert(fahrenheit + " Fº = " + resultado + " Cº");

	
}

function CentigradosFahrenheit () 
{
	var centigrados;
	var resultado;

	centigrados = temperatura.value;
	centigrados = parseInt(centigrados);

	resultado 	= (centigrados * 9 / 5) + 32;

	alert(centigrados + " Cº = " + resultado + " Fº");

}
