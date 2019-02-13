function mostrar()
{
	var notaExamen;
	var mensaje;
	  
	notaExamen= Math.floor((Math.random() * 10) + 1); //Genero el número RANDOM entre 1 y 10
	console.log(notaExamen); 
	
	if (notaExamen<4)
	 {
	 	mensaje=console.log("Vamos, la proxima se puede");
	 }
	 else
	 {
	 	if (notaExamen<9)
	 	 {
	 	 	mensaje=console.log("Aprobó");

	 	 }
	 	 else{
	 	 	 	 	mensaje=console.log("Excelente!");

	 	 	 }

	 }

}//FIN DE LA FUNCIÓN