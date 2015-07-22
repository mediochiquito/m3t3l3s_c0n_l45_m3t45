function BotonImg($element, $callback, $callback_onover, $callback_onoout){
	
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

			TweenMax.to($(self.main), 0, {scale:.95});
			

			

			/*$(self.main).stop();
			$(self.main).clearQueue();
			$(self.main).animate({'opacity':0.9},200);	*/

			//$(self.main).stop(true, true).animate({opacity:.6}, 300, 'linear');
			//$(self.main).css('color', '#ff0000');
			setTimeout(function(){
				seleccionandolo = false;
			}, 300);

		}

	}
	
	function do_mouseout(evt){
		
		if(!seleccionandolo && habil){
			//$(self.main).css('color', '');
			/*$(self.main).stop();
			$(self.main).clearQueue();
			$(self.main).animate({'opacity':1},200);	*/
			TweenMax.to($(self.main), 0, {scale:1})
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