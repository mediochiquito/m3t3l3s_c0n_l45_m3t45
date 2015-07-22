function BotonImgVerdeOver($element, $callback, $callback_onover, $callback_onoout){
	
	var self = this
	this.main = $($element);
	$(this.main).css("cursor", "pointer");
	
	var habil = true;
	var seleccionandolo = false;

	if(app.esMobile){
		
		$(this.main).bind("touchend", do_mouseout);
		$(this.main).bind("touchstart", do_mouseover);
		$(this.main).bind("touchend", do_click);

	}else{
		
		$(this.main).bind("click",    do_click);
		$(this.main).bind("mouseout", do_mouseout);
		$(this.main).bind("mouseover", do_mouseover);

	}

	function do_click(evt){
		$(self.main).css('color', '')
		if(habil) $callback(evt);
	}
	
	function do_mouseover(evt){
		
		if(habil){

			$(self.main).addClass('botonVerdeOver')
			

			
			setTimeout(function(){
				seleccionandolo = false;
				do_mouseout()
			}, 3000);

		}

	}
	
	function do_mouseout(evt){
		
		if(!seleccionandolo && habil){
			$(self.main).removeClass('botonVerdeOver')
			
		}

	}
	
	this.habil = function($b){
		
		habil =  $b;
		
		if($b) {
			$(this.main).css("cursor", "pointer");
			$(self.main).animate({opacity:1}, 0);
		}
		else{
		   $(this.main).css("cursor", "default");
		   $(self.main).animate({opacity:.3}, 0);
		}


	}



}