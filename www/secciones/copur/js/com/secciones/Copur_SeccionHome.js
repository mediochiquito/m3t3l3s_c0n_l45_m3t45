function Copur_SeccionHome()
{
	
	//his.main.id = 'SeccionForm0';
	this.main = document.getElementById('copur-SeccionHome');



	new BotonImgVerdeOver($('#copur-home-btn-quiero-donar'), function(){

		if(window.innerWidth  <= 640)  app.navigateToSeccion('copur-SeccionDonar')
		else copur_app.secciones.go(copur_app.secciones._Copur_SeccionDonar);	

	});



	new BotonImgVerdeOver($('#copur-home-btn-quiero-profiles'), function(){
		
		if(window.innerWidth  <= 640) app.navigateToSeccion('copur-SeccionProfiles')
		else copur_app.secciones.go(copur_app.secciones._Copur_SeccionProfiles);
	
	});

		


}

Copur_SeccionHome.prototype = new Copur_Base_Seccion();