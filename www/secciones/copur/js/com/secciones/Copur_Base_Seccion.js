function Copur_Base_Seccion(){

	var self = this;

	this.mostrar = function($time, $data){
	
	
		var _self = this

		var t = $time;
		if(typeof($time) == 'undefined') t = .3;
		
		Anima.to($(_self.main), 0,  {scale: 1})
		$(_self.main).show()
		Anima.to($(_self.main), t*copur_app.velocidad_anim, {
			  x:0,
			  scale: 1, 
			  opacity: 1
			  
		},0, function(){
				$(_self.main).css('pointer-events', 'auto');
			  });

	
		this._set($data)
		
	}

	this._set = function ($data){
		
	}

	this._remove = function(){
		

	}

	this.ocultar = function($time){

		
		
		var _self = this
		_self._remove()
		var t = $time; 
		if(typeof($time) ==  'undefined') t = .3;

		$(_self.main).css('pointer-events', 'none');

		Anima.to($(_self.main), t*copur_app.velocidad_anim, {
			 
			scale:1, 
			opacity: 0

		}, 0, function(){
					$(_self.main).hide()
				});

		
		
	}


}