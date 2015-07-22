function BotonAnim($element, $callback, $anim){
	
	var self = this
	this.main = $($element);
	$(this.main).css("cursor", "pointer");
	
	var habil = true;
	var seleccionandolo = false;

	if(app.esMobile){
		
		$(this.main).bind("touchend", do_mouseout);
		$(this.main).bind("touchstart", do_mouseover);
		$(this.main).bind("touchstart", do_click);

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
			$(self.main).stop();
			$(self.main).clearQueue();
			$(self.main).animate({'opacity':0.5},200);	
			setTimeout(function(){
				seleccionandolo = false;
			}, 300);

		}

	}
	
	function do_mouseout(evt){
		
		if(!seleccionandolo && habil){
			$(self.main).stop();
			$(self.main).clearQueue();
			$(self.main).animate({'opacity':1},200);	
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