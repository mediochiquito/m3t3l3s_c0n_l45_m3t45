function Secciones(){ 
	
	var self = this

  	//  this.main = document.createElement('div')
  	//	this.main.id = 'secciones'

  	this._SeccionHome = new SeccionHome();
	this._SeccionHome.ocultar(0);

  	this._SeccionConnect = new SeccionConnect();
	this._SeccionConnect.ocultar(0);

	this._SeccionConnectOk = new SeccionConnectOk();
	this._SeccionConnectOk.ocultar(0);

	this._SeccionEditor = new SeccionEditor();
	this._SeccionEditor.ocultar(0);
	
	this._SeccionRegistro = new SeccionRegistro();
	this._SeccionRegistro.ocultar(0);

	this._SeccionGracias = new SeccionGracias();
	this._SeccionGracias.ocultar(0);

	
	var despazada = false;
	var historia = new Array();
	var obj_seccion_actual = null;	
	var cambiando_historia = false;

	this.get_obj_seccion_actual = function (){
		return obj_seccion_actual;
	}

	this.back = function (){
		
		
		switch(obj_seccion_actual){

			case self._SeccionHome: 		 
				
			 	break;

			case self._SeccionConnect: 	
				
				contour_app.secciones.go(contour_app.secciones._SeccionHome)
				break;

			case self._SeccionConnectOk: 
				
				contour_app.secciones.go(contour_app.secciones._SeccionConnect)
				break;


			case self._SeccionEditor: 	
				
				contour_app.secciones.go(contour_app.secciones._SeccionConnect)
				break;

			case self._SeccionRegistro: 
				
				contour_app.secciones.go(contour_app.secciones._SeccionEditor)
				break;	





		}
		
	}

	this.go = function($base_seccion, $time, $data, $guardar_historia){

		var guardar_historia = true;
		if(typeof($guardar_historia) != 'undefined') guardar_historia =  $guardar_historia;



		if($base_seccion == self._SeccionHome || $base_seccion == self._SeccionGracias) $('#contour-selector-flecha-back').hide()
		else $('#contour-selector-flecha-back').show()


		$('#contour-secciones').removeClass('bg_desktop')
		$('#contour-secciones').removeClass('bg_desktop_vacio')
		$('#contour-secciones').removeClass('bg_connectOK')
		$('#contour').removeClass('contour_alto_min')
		
		switch($base_seccion){

			case self._SeccionHome: 		 
				$('#contour-secciones').addClass('bg_desktop')
			 	break;

			case self._SeccionConnect: 	
				$('#contour-secciones').addClass('bg_desktop_vacio')
				break;

			case self._SeccionConnectOk: 	
				$('#contour-secciones').addClass('bg_connectOK')	  	
				break;


			case self._SeccionEditor: 
			setTimeout(function(){

				$('#contour').addClass('contour_alto_min');
			}, 1000)
				
				break;

			case self._SeccionRegistro: 
				$('#contour-secciones').addClass('bg_desktop_vacio')
				break;

			case self._SeccionGracias: 
				$('#contour-secciones').addClass('bg_connectOK')
				break;


		}

		if($base_seccion==obj_seccion_actual) return;
		
		var d = new Date()
		$(this.main).css({ display: 'block'});
		
		try{
			if($base_seccion != obj_seccion_actual)
				obj_seccion_actual.ocultar($time);
		}catch(e){}
		
		if(guardar_historia) historia.push([$base_seccion, $data]);
		
		setTimeout(function(){ 
			$base_seccion.mostrar($time, $data);
		}, 500)
		
		obj_seccion_actual = $base_seccion

	}

	this._close_all = function(){
		
		$(document).trigger('CERRANDO_TODAS_LAS_SECCIONES');
		obj_seccion_actual.ocultar();
		obj_seccion_actual = null;

	}

}

