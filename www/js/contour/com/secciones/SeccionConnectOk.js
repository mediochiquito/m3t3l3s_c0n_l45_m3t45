function SeccionConnectOk()
{
	
	//his.main.id = 'SeccionForm0';
	this.main = document.getElementById('contour-SeccionConnectOk');

	this._set = function (){

		setTimeout(function (){

			contour_app.secciones.go(contour_app.secciones._SeccionEditor);

		}, 2000)

	}

}

SeccionConnectOk.prototype = new Base_Seccion();