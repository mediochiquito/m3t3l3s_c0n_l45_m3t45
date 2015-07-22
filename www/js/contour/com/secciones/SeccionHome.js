function SeccionHome()
{
	
	//his.main.id = 'SeccionForm0';
	this.main = document.getElementById('contour-SeccionHome');

	new BotonImg($('#contour-home-btn-llenala'), function(){
		
		
		contour_app.secciones.go(contour_app.secciones._SeccionConnect);

	});

		


}

SeccionHome.prototype = new Base_Seccion();