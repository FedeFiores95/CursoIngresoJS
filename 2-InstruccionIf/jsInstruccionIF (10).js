function mostrar()
{
	var notaExamen;
	var mensaje;
	  
	notaExamen= Math.floor((Math.random() * 10) + 1); //Genero el número RANDOM entre 1 y 10
	
	if (notaExamen<4)
	 {
	 	mensaje=alert(notaExamen + " Vamos, la proxima se puede");
	 }
	 else
	 {
	 	if (notaExamen<9)
	 	 {
	 	 	mensaje=alert(notaExamen + " Aprobó");

	 	 }
	 	 else{
	 	 	 	 	mensaje=alert(notaExamen + " Excelente!");

	 	 	 }

	 }

}//FIN DE LA FUNCIÓN