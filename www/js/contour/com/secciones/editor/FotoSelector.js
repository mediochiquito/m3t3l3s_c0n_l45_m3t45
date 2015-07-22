function FotoSelector()
{
	var self = this
	this.main = document.getElementById('contour-SelectorFotos');

	var en_pagina = 0;
	var _habil = false;
	var btn_up = new BotonImg($('#contour-selector-flecha-up'), doUp);
	var btn_down = new BotonImg($('#contour-selector-flecha-down'), doDown);
	var en_scroll  = 0;
	var cantidad_fotos = 0;
	var alto_scroll = 0

	$(window).resize(function (){

		
		if(window.innerWidth 	  > 890) alto_scroll = Math.ceil(cantidad_fotos/5)*114;
		else if(window.innerWidth > 730) alto_scroll = Math.ceil(cantidad_fotos/4)*114;
		else if(window.innerWidth > 640) alto_scroll = Math.ceil(cantidad_fotos/3)*114;
		else 							 alto_scroll = Math.ceil(cantidad_fotos/3)*94;

		revisar_scroll()

	})

	this._set = function (){

 		cargar_lista('https://api.instagram.com/v1/users/' + contour_app.usuario.id + '/media/recent/?access_token='+contour_app.usuario.at+'&count=100&callback=?');
		
	}
	
	this.habil = function ($bool){
		
		_habil = $bool;
		
		$(this.main).removeClass('contour-SelectorFotos-habil-true');
		$(this.main).removeClass('contour-SelectorFotos-habil-false');
		
		if($bool){

			if(!contour_app.esMobile) $(self.main).css('pointer-events', 'auto');
			else  {
			
				setTimeout(function(){
					$(self.main).css('pointer-events', 'auto');
				}, 500);

			}
			
			/*Anima.to($(this.main), .2, {opacity:1})*/
			$(this.main).addClass('contour-SelectorFotos-habil-true');
		}else {
			$(this.main).css('pointer-events', 'none');

			/*Anima.to($(this.main), .2 , {opacity:.5})*/
			$(this.main).addClass('contour-SelectorFotos-habil-false');
		}

	}

	function revisar_scroll(){

		if(en_scroll<=0) {
			en_scroll = 0
			btn_up.habil(false)
		}else{
			btn_up.habil(true)
		}

	if(en_scroll>=alto_scroll-342) {
			en_scroll = alto_scroll-342
			btn_down.habil(false)
		}else{
			btn_down.habil(true)
		}



	}

	function doUp(){

		en_scroll -= 342;
		revisar_scroll();
		TweenMax.to($('#contour-selector-holder-fotos'), .3, {scrollTo:{y:en_scroll}, ease:Power2.easeInOut, onComplete:function(){}, onUpdate:function(){}});;

	}

	function doDown(){
		
		en_scroll += 342;
		revisar_scroll()
		TweenMax.to($('#contour-selector-holder-fotos'), .3, {scrollTo:{y:en_scroll}, ease:Power2.easeInOut, onComplete:function(){}, onUpdate:function(){}});

	}


	function cargar_lista($url){

		$.ajax({

	    	//url: 'https://api.instagram.com/v1/users/2011381729/media/recent?count=1000&callback=jQuery183021119484934024513_1434552689644&access_token=2011381729.ad5940d.1c9938dd143f4045b8cc0cc85ddd028a&max_id=1009395926153497508_2011381729&_=1434552698620&callback=?', 
		    url: $url,
		    type:'GET',
		    dataType:'json',
			crossDomain: 'true',
			
			error:function(){
		    	contour_app.toastmessage.mostrar('Error de coexion al servidor.');
		    },

		    success:function(json){
		    	analizar_json(json)
		    }

		});

	}

	function analizar_json(json){

		for(var i = 0; i< json.data.length; i++){

			var item = new ItemFoto(json.data[i]);
			$('#contour-selector-holder-fotos').append(item.main);
			cantidad_fotos++
		}

		alto_scroll = Math.ceil(cantidad_fotos/5)*114;

		if(json.pagination.next_max_id){
			setTimeout(function(){
				cargar_lista('https://api.instagram.com/v1/users/' + contour_app.usuario.id + '/media/recent/?max_id='+json.pagination.next_max_id+'&access_token='+contour_app.usuario.at+'&count=100&callback=?');
			}, 500)
		}

		revisar_scroll()
		
		 
	}
	


}
