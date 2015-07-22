function ItemBotella($id, $SeccionEditor){

	var self = this
	this.main = $('#holder-foto' + $id)

	var img = null;
	var tamano = 320;

	this.isSet = false

	var holder_img = document.createElement('div')
	$(this.main).append(holder_img);
	var ancho = $(this.main).width()
	var alto = $(this.main).height()

	var mas_btn = new BotonImg($('#add-' + $id), function(){

		mas_btn.habil(false);
		$SeccionEditor.foto_seleccionada_para_editar = $(self.main).attr('num');
		$SeccionEditor.fotoselector.habil(true);

		var event = $.Event("click_add_more");
		event.id = $id;
		$(document).trigger( event );
		
		$('#contour-editro-btn-aceptar').addClass('botella_invisible');
		$('#contour-Botella').addClass('botella_invisible')	
	});

	$(document).bind('click_add_more', function (e){
		if(e.id != $id){
			mas_btn.habil(true);
		}
	})

	var slider = new SliderControl(this, $id);
	slider.main.id = 'editor-itemBotella-slider-' + $id;
	$(this.main).append(slider.main);
	$(slider.main).hide();

	var dragando = false;
	$(this.main).bind('mousedown', function(){
		dragando = true;
	});
	

	$(this.main).bind('mousemove', function(){	
		$('#add-' + $id).show();
		if(img!=null) $(slider.main).show();
	}); 

	$(mas_btn.main).bind('mouseover', function(){
		$('#add-' + $id).show();
	});
	

	$(this.main).bind('mouseout', function(){
			
		$(slider.main).hide();
		if(img!=null) $('#add-' + $id).hide();

	}); 	

	this._setZoom = function ($zoom){

		var tamano_zoom = tamano + ($zoom*5)
		$(img).css('width', tamano_zoom)
		$(img).css('height', tamano_zoom)
		$(img).css('top', -(tamano_zoom/2)+(alto/2))
		$(img).css('left', -(tamano_zoom/2)+(ancho/2))
		
	}

	function limitar(){

		if(ancho>alto){
			tamano = ancho
			$(img).css('top', -(tamano/2)+(alto/2))
			$(img).css('left',  0)
		}else{
			tamano = alto
			$(img).css('left', -(tamano/2)+(ancho/2))
			$(img).css('top',  0)
		}

		$(img).css('width', tamano)
		$(img).css('height', tamano)
	}

	this.getData = function (){

		return {

			holder_x: parseInt($(this.main).css('left')),
			holder_y: parseInt($(this.main).css('top')),
			holder_w: parseInt($(this.main).css('width')),
			holder_h: parseInt($(this.main).css('height')),
			img_x: parseInt($(img).css('left')),
			img_y: parseInt($(img).css('top')),
			img_w: parseInt($(img).css('width')),
			img_h: parseInt($(img).css('height')),
			img: img.src

		}

	}	


	this._reset = function (){

		this.isSet = false
		$(holder_img).empty()
		$(mas_btn.main).show()
		img = null
	}



	function regla_de_3(){

	}


	this._set = function ($nodo){

		$(holder_img).empty()		

	 	img = new Image()
	 	img.className = 'ItemBotella_img'
		img.src =  $nodo.images.low_resolution.url
		img.onload = function(){
			
			limitar()
		}

		this.isSet = true
		$SeccionEditor.fotoselector.habil(false);
		$(holder_img).append(img);
		mas_btn.habil(true)
		if(!contour_app.esMobile) $(mas_btn.main).hide()
		slider.setValue(35)

	}


}
