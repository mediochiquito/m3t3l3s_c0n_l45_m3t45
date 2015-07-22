
function BlancoBtn(div,callback){
	var blanco = document.createElement('div');
	blanco.className = 'blanco_btn';
	$(blanco).css('opacity',0);
	$(div).append(blanco);

	if(app.esMobile){

		$(div).bind("touchend", onMouseLeaveDiv);
		$(div).bind("touchstart", onMouseEnterDiv);
		$(div).bind("touchend", callback);

	}else{
		
		$(div).bind("click",callback);
		$(div).bind('mouseenter', onMouseEnterDiv);
		$(div).bind('mouseleave', onMouseLeaveDiv);

	}

	function onMouseEnterDiv(e){
		$(blanco).stop();
		$(blanco).clearQueue();

		$(blanco).animate({'opacity':0.2},300);

	}

	function onMouseLeaveDiv(e){
		$(blanco).stop();
		$(blanco).clearQueue();

		$(blanco).animate({'opacity':0},300);
	}

}