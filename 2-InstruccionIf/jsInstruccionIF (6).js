function mostrar()
{
//tomo la edad  
var suEdad;
suEdad = edad.value;
suEdad = parseInt(suEdad);

if (suEdad >= 18)
 {
	alert("Usted es mayor de edad");
 }
if (suEdad >= 13 && suEdad <= 17)
 {
	alert("Usted es un/a adolescente");
 }
if (suEdad <= 12)
 {
 	alert("Usted es un/a niño/a");
 }
}//FIN DE LA FUNCIÓN