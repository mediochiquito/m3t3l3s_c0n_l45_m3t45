function SeccionRegistro()
{
	
	//his.main.id = 'SeccionForm0';
	this.main = document.getElementById('contour-SeccionRegistro');

	var txt_nombre =  new 	InputText('contour-registro-txt_nombre'	, 'Nombre', 'text')
	var txt_apellido =  new InputText('contour-registro-txt_apellido', 'Apellido', 'text')
	var txt_email =  new 	InputText('contour-registro-txt_email'	, 'Correo electrónico', 'text')
    var chk_tyc = document.getElementById('contour-registro-ter_cond');

	// contour_app.secciones.go(contour_app.secciones._SeccionConnectOk, .3);
	/*	var url = 'https://api.instagram.com/oauth/authorize/?client_id='+contour_app.INSTA_CLIENT_ID+'&'+
				   'redirect_uri='+contour_app.SERVER+'&response_type=code'
		var newWindow = window.open(url, 'name', 'height=450,width=650');*/
		
	new BotonImg($('#contour-registro-btn-registrar'), registrar);
	new BotonImg($('#contour-registro-btn-cancelar'), cancelar);

	function registrar(){
		

		var r = true; 

		txt_nombre.marcar_error(false);
		txt_apellido.marcar_error(false);
		txt_email.marcar_error(false);	
	
		if(txt_nombre.getValor()=='') { txt_nombre.marcar_error(true); r = false; }
		if(txt_apellido.getValor()=='') {txt_apellido.marcar_error(true); r = false;}
		if(txt_email.getValor()=='') {txt_email.marcar_error(true); r = false;}
		if(!validateEmail(txt_email.getValor())) {txt_email.marcar_error(true); r = false; }
        

		if(!r){
			contour_app.alerta('Hay campos incompletos o erroneos.');
		} else if(r && !chk_tyc.checked){
            contour_app.alerta('Debes leer y aceptar los términos y condiciones.');
            r = false;
        }

		if(r){

			var obj = {'nombre': txt_nombre.getValor(), 	
					   'apellido': txt_apellido.getValor(), 
					   'email': txt_email.getValor(), 
					   'at': contour_app.usuario.at,
					   'uid': contour_app.usuario.id,
					   'hash': contour_app.hash_botella,
					   'm': this.esMobile?'1':'0',
					   't': this.esTablet?'1':'0'
					   }


			contour_app.loading.mostrar()
			$.ajax({

				url: 'process/ws.php?method=add',
			    type:'POST',
			    data : obj,  
				error:function(){
			    	contour_app.toastmessage.mostrar('Ocurrio un error');
			    	contour_app.loading.ocultar();
			    },

			    success:function(data){

			    	if(data == '1'){
						contour_app.secciones.go(contour_app.secciones._SeccionGracias, .3)
			    	}else{
						contour_app.toastmessage.mostrar('Ocurrio un error, por favor intenta de nuevo.');
			    	}
			    	
					contour_app.loading.ocultar();
			    }

			});
		}
	}

	function validateEmail(email) { 
    	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(email);
	}
	function cancelar(){
		 contour_app.secciones.go(contour_app.secciones._SeccionHome, .3);
	}

	this._set = function (){
		
			
	}

}

SeccionRegistro.prototype = new Base_Seccion();