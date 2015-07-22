function SeccionConnect()
{
	this.main = document.getElementById('contour-SeccionConnect')

	new BotonImg($('#contour-connect-btn'), function(){
		
		// app.secciones.go(app.secciones._SeccionConnectOk, .3);

		var url = 'https://api.instagram.com/oauth/authorize/?client_id='+contour_app.INSTA_CLIENT_ID+'&'+
				   'redirect_uri=' + encodeURIComponent(contour_app.SERVER + 'secciones/contour/')+'&response_type=code'

		var newWindow = window.open(url, 'name', 'height=450,width=650');

	});

	
	
}

SeccionConnect.prototype = new Base_Seccion();