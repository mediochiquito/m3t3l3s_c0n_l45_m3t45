// JavaScript Document

function AlphaBtn(x,y,url_img){
	var self = this;
	this.main = new Image();
	this.main.src = url_img;
	this.main.className = "cero";
	
	$(this.main).css({'left':x, 'top':y, 'cursor':'pointer'});
	
	$(this.main).bind("mouseenter", onMouseEnterThis);
	$(this.main).bind("mouseleave", onMouseLeaveThis);
	
	var boton_mode = true;

	var rollover = true;


	function onMouseEnterThis(e){
		if(boton_mode && rollover){
			$(self.main).stop();
			$(self.main).clearQueue();
			$(self.main).animate({'opacity':0.8},200);	
		}
	}
	
	function onMouseLeaveThis(e){
		if(boton_mode  && rollover){
			$(self.main).stop();
			$(self.main).clearQueue();
			$(self.main).animate({'opacity':1},200);
		}
	}
	
	this.botonMode = function(valor){
		boton_mode = valor;
		if(boton_mode){
			$(self.main).css('display','block');
		}else{
			$(self.main).css('display','none');
		}
	}

	this.setRollOver = function(valor){
		rollover = valor;
	}

}