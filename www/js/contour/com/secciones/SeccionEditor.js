function SeccionEditor()
{
	var self = this
	this.fotoselector = new FotoSelector()
	this.main = document.getElementById('contour-SeccionEditor');
	this.foto_seleccionada_para_editar = -1;

	var itemBotella0 = new ItemBotella(0, this)
	var itemBotella1 = new ItemBotella(1, this)
	var itemBotella2 = new ItemBotella(2, this)
	var itemBotella3 = new ItemBotella(3, this)
	var itemBotella4 = new ItemBotella(4, this)
	var itemBotella5 = new ItemBotella(5, this)
	var itemBotella6 = new ItemBotella(6, this)
	var itemBotella7 = new ItemBotella(7, this)
	var itemBotella8 = new ItemBotella(8, this)

	var array_items_botella = new Array(itemBotella0, itemBotella1, itemBotella2, itemBotella3, itemBotella4, itemBotella5, itemBotella6, itemBotella7, itemBotella8)

	new BotonImg($('#contour-editro-btn-aceptar'), guardar_botella);	

	this.fotoselector.habil(false);

	this._set = function ($obj){
		
		self.fotoselector._set();

		try{
			if($obj['reset']){

				itemBotella0._reset()
				itemBotella1._reset()
				itemBotella2._reset()
				itemBotella3._reset()
				itemBotella4._reset()
				itemBotella5._reset()
				itemBotella6._reset()
				itemBotella7._reset()
				itemBotella8._reset()

			}
		}catch(e){}
		
	}

	function countItemsBotellasSet(){
		var count = 0;
		if(itemBotella0.isSet) count++;
		if(itemBotella1.isSet) count++;
		if(itemBotella2.isSet) count++;
		if(itemBotella3.isSet) count++;
		if(itemBotella4.isSet) count++;
		if(itemBotella5.isSet) count++;
		if(itemBotella6.isSet) count++;
		if(itemBotella7.isSet) count++;
		if(itemBotella8.isSet) count++;
		return count;
	}



	function guardar_botella(){


		if(countItemsBotellasSet()<8){
			contour_app.toastmessage.mostrar('Debes completar toda la botella para embotellar tu felicidad!');
			return;
		}

		var obj_send = new Array();
		for(var i=0 ; i<array_items_botella.length; i++){
			obj_send.push(array_items_botella[i].getData());
		}
		contour_app.loading.mostrar()
		$.ajax({

			url: 'process/setImg.php',
		    type:'POST',
		    data : {'uid': contour_app.usuario.id, 'a': obj_send}, 
			error:function(){
		    	contour_app.toastmessage.mostrar('Ocurrio un error');
		    },

		    success:function(data){
		    	contour_app.hash_botella = data
		    	contour_app.loading.ocultar()
				contour_app.secciones.go(contour_app.secciones._SeccionRegistro, .3)

		    }

		});
		//console.log(obj_send)


	}

	this.setFotoEnItemBotella = function ($nodo){

		$('#contour-editro-btn-aceptar').removeClass('botella_invisible');
		$('#contour-Botella').removeClass('botella_invisible');
		array_items_botella[this.foto_seleccionada_para_editar]._set($nodo);

	}




} SeccionEditor.prototype = new Base_Seccion();

