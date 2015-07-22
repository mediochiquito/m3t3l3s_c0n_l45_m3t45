function Copur_Secciones(){ 
	
	var self = this;

  	this._Copur_SeccionHome = new Copur_SeccionHome();
	//this._Copur_SeccionHome.ocultar(0);

  	this._Copur_SeccionVideo = new Copur_SeccionVideo();
	//this._Copur_SeccionVideo.ocultar(0);

  	this._Copur_SeccionProfiles = new Copur_SeccionProfiles();
	//this._Copur_SeccionProfiles.ocultar(0);

  	this._Copur_SeccionDonar = new Copur_SeccionDonar();
	//this._Copur_SeccionDonar.ocultar(0);

	var despazada = false;
	var historia = new Array();
	var obj_seccion_actual = null;	
	var cambiando_historia = false;

	this.get_obj_seccion_actual = function (){
		return obj_seccion_actual;
	}

	this.back = function (){
		
		switch(obj_seccion_actual){

			case self._Copur_SeccionHome: 		 
				
			 	break;

			case self._Copur_SeccionVideo: 	

				break;

			case self._Copur_SeccionProfiles: 	

				break;

			case self._Copur_SeccionDonar: 	

				break;
		}
		
	}


	this.next = function (){
		
		switch(obj_seccion_actual){

			case self._Copur_SeccionHome: 		 
				this.go(self._Copur_SeccionVideo, .3)
			 	break;

			case self._Copur_SeccionVideo: 	
				this.go(self._Copur_SeccionProfiles, .3)
				break;

			case self._Copur_SeccionProfiles: 	
				this.go(self._Copur_SeccionDonar, .3)
				break;

		}
		
	}

	this.back = function (){
		
		switch(obj_seccion_actual){

			case self._Copur_SeccionVideo: 	
				this.go(self._Copur_SeccionHome, .3)
				break;

			case self._Copur_SeccionProfiles: 	
				this.go(self._Copur_SeccionVideo, .3)
				break;

			case self._Copur_SeccionDonar: 	
				this.go(self._Copur_SeccionProfiles, .3)
				break;
		}
		
	}

	this.go = function($base_seccion, $time, $data, $guardar_historia){

		var guardar_historia = true;
		if(typeof($guardar_historia) != 'undefined') guardar_historia =  $guardar_historia;

		if($base_seccion == self._Copur_SeccionHome) $('#copur-selector-flecha-back').hide()
		else $('#copur-selector-flecha-back').show()

		copur_app.flecha_izq.habil(false)
		copur_app.flecha_der.habil(false)

		switch($base_seccion){

			case self._Copur_SeccionHome:
				Anima.to($('#copur-secciones'), .5, {x: '0%'})
				copur_app.flecha_der.habil(true)
			 	break;

			case self._Copur_SeccionVideo: 	
				Anima.to($('#copur-secciones'), .5, {x: '-100%'})
				copur_app.flecha_der.habil(true)
				copur_app.flecha_izq.habil(true)
				break;

			case self._Copur_SeccionProfiles: 	
				Anima.to($('#copur-secciones'), .5, {x: '-200%'})
				copur_app.flecha_der.habil(true)
				copur_app.flecha_izq.habil(true)
				break;

			case self._Copur_SeccionDonar: 
				Anima.to($('#copur-secciones'), .5, {x: '-300%'})
				copur_app.flecha_izq.habil(true)
				break;

		}

		if($base_seccion==obj_seccion_actual) return;

		obj_seccion_actual = $base_seccion

	}


}

