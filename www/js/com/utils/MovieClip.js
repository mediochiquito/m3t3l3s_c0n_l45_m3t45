
function MovieClip($img_srpite, _w, _h, $cant_frames, $cant_columns, $fps, $loop){

	var $w = _w + 1
	var $h = _h + 1

	var self = this;
	this.main = document.createElement('div');
	this.main.className = 'MovieCLip'

	$(self.main).css('position', 'absolute'); 
	$(self.main).css('overflow', 'hidden'); 
	$(self.main).css('width', $w); 
	$(self.main).css('height', $h); 

	$(self.main).append('<img src="' + $img_srpite + '" />');

	var intervalo;
	var _fps = typeof( $fps) == "undefined"?30:$fps;
	var cant_frames = $cant_frames;
	if($cant_columns==1)cant_frames += 1;
	var fps = 1000/_fps
	var loop = false;
	if(typeof($loop) == "undefined" || !$loop){
		loop = false;
		}else{
		loop = true;
	}
	

	$(self.main).find("img").css("position", "absolute");
	
	var en_x = 1;
	var en_y = 1;

	var cant_x = $cant_columns
	var cant_y  = Math.ceil(cant_frames/$cant_columns);

	var dir;
	
	var hasta_x = 1;
	var hasta_y = 1;
	
	var detener_en_x = 0;
	
	this.retroceder = function(){

		try{
			clearInterval(intervalo)
			}catch(e){}
		dir = -1;
		hasta_x = 1;
		hasta_y  = 1;
		detener_en_x = 0
		intervalo = setInterval(do_intervalo, fps)
		
	}
	
	this.retrocede_hasta = function($x, $y){
		
		try{
			clearInterval(intervalo)
			}catch(e){}
		
		dir = -1
		hasta_x = $x;
		hasta_y = $y;
		intervalo = setInterval(do_intervalo, fps);
		
	}

	this.gotoAndStop = function($x, $y){

		$(self.main).find("img").css("left", -(($w * $x)-$w));
		$(self.main).find("img").css("top", -(($h * $y)-$h));
		
	}
	this.play = function(){
			
		try{
			clearInterval(intervalo)
			}catch(e){}
		
		detener_en_x = 0
		dir = 1
		intervalo = setInterval(do_intervalo, fps)

	}
	this.stop = function(){
			
		try{
			clearInterval(intervalo)
			}catch(e){}
		
		
	}
	function do_intervalo(){
		
		if(detener_en_x>0 && detener_en_x == en_x) {
		
			clearInterval(intervalo)
			return;	
		}
		

		if(dir == 1){
			
			en_x++
			
			if((((en_y-1)*$cant_columns)+en_x) > cant_frames){
				en_x = 1
				en_y  = 1

			}

			if(en_x>cant_x && en_y<cant_y) {
				en_x = 1;
				en_y++;
			}
			
			if(en_y>=cant_y && en_x>=cant_x ) {

				en_y = cant_y;
				en_x = cant_x

				if(loop){

					en_y = 1;
					en_x = 1;

				}else{

					clearInterval(intervalo)
					var evt = jQuery.Event("TERMINO_ANIACION_AVANZA");
					$($(self.main)).trigger(evt);

				}
			}
			
		}
		if(dir == -1){
			
			en_x--
			
			if((((en_y-1)*$cant_columns)+en_x) > cant_frames){
				en_x = 1
				en_y  = 1

			}

			if(en_x<1) {
				en_x = $cant_columns;
				en_y--;
			}
			
			if(en_y==1 && en_x==1) {

				clearInterval(intervalo)
				var evt = jQuery.Event("TERMINO_ANIACION_RETROCEDE");
				$(document).trigger(evt);

			}
			
		}
		$(self.main).find("img").css("left", -(($w*en_x)-$w));
		$(self.main).find("img").css("top", -(($h*en_y)-$h));
		
	}
	
}