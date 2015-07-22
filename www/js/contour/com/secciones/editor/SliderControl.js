function SliderControl($parent, $id){

	var self = this
	this.main = document.createElement('div')
	this.main.className = 'contour-control-sldier'

	var alto = 35

	var track  = document.createElement('div')
	track.className = 'contour-control-sldier-track'
	$(this.main).append(track)

	var cabeza  = document.createElement('div')
	cabeza.className = 'contour-control-sldier-cabeza'
	$(this.main).append(cabeza)

	var dragando = false;
	var offsetY = 0;

	var _value = 0
	
	setTimeout(function(){
		self.setValue(alto);
	}, 0)

	$(this.main).bind('mousedown', function(e){
		
		var target  = e.target || e.srcElement,
              rect    = target.getBoundingClientRect(),
             
              offsetY  = e.clientY - rect.top ;



		dragando = true
	});

	$(document).bind('mouseup', function(){
		dragando = false

	})

	$(document).bind('mousemove', function(e){
		

		if(dragando){
			

			var relY = Number(e.pageY) - 
					   Number(offsetY) - 
					   Number($(self.main)[0].offsetTop) - 
					   Number($(self.main).parent()[0].offsetTop) - 
					   Number($('#contour')[0].offsetTop) - 
					   Number($(self.main).parent().parent()[0].offsetTop) + 
					   Number($('#contour-SeccionEditor-scroll-bottle').scrollTop()) - 5;



/*
			console.log('e.pageY: ' + e.pageY)
			console.log('offsetY: '+ offsetY)
			console.log('$(self.main)[0].offsetTop: '+ $(self.main)[0].offsetTop)
			console.log('$(self.main).parent()[0].offsetTop: '+ $(self.main).parent()[0].offsetTop)
			console.log('$(self.main).parent().parent()[0].offsetTop: '+ $(self.main).parent().parent()[0].offsetTop)
			console.log('$(#contour-SeccionEditor-scroll-bottle ).scrollTop(): '+ $('#contour-SeccionEditor-scroll-bottle').scrollTop());
			console.log('relY: ' +relY)
*/
			relY = limtar(relY)		
			self.setValue(relY)

		}

	})
	
	function fixEvent(e) {
    if (! e.hasOwnProperty('offsetX')) {
        var curleft = curtop = 0;
        if (e.offsetParent) {
           var obj=e;
           do {
              curleft += obj.offsetLeft;
              curtop += obj.offsetTop;
           } while (obj = obj.offsetParent);
        }
        e.offsetX=e.layerX-curleft;
        e.offsetY=e.layerY-curtop;
    }
    return e;
}

	this.setValue = function ($val){
		_value = $val
		$(cabeza).css('top', _value) 
		$parent._setZoom(self.getValue())
	}
	this.getValue = function (){
		return -(_value-alto);
	}


	function limtar($y){

		if($y <= 0) $y = 0;
		if($y >= alto) $y = alto;
		return $y
	}

}
