function mostrar()
{
//tomo la edad  
var suEdad;
var suEstadoCivil;

suEdad = edad.value;
suEstadoCivil = estadoCivil.value;

if ((suEdad<18) && (suEstadoCivil != "Soltero"))
 {
 	alert("Es muy pequeño para NO ser soltero.");
 }
	


}//FIN DE LA FUNCIÓN