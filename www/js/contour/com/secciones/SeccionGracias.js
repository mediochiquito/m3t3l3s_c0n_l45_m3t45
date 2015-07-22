function SeccionGracias()
{
	
	this.main = document.getElementById('contour-SeccionGracias')

	new BotonImg($('#contour-gracias-shares-btn-share-fb'), function(){
		
		window.open('http://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(contour_app.SERVER + '?p=contour') ,'sharer','toolbar=0,status=0,width=570,height=436');

	});
	new BotonImg($('#contour-gracias-shares-btn-share-tw'), function(){

		 window.open('http://twitter.com/home?status=' + encodeURIComponent('Comparte tus momentos felices con Coca-Cola aquí: ' + contour_app.SERVER), 'sharer twitter' ,'toolbar=0,status=0,width=626,height=436');

	})



	new BotonImg($('#contour-gracias-btn-unamas'), function(){
		
		contour_app.secciones.go(contour_app.secciones._SeccionEditor, .3, {'reset':true})


	});

	
}

SeccionGracias.prototype = new Base_Seccion();