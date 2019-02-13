function mostrar()
{
var suEdad;
var suEstadoCivil;

suEdad = edad.value; //tomo la edad  
suEstadoCivil = estadoCivil.value; //tomo el estado civil

if ((suEdad>17) && (suEstadoCivil == "Soltero")) //si no es menor y es soltero
 {
 	alert("Usted no es menor y es soltero");
 }
	

}//FIN DE LA FUNCIÓN