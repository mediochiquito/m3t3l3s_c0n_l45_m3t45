function InputText($div, $placeholder, $type, $len){


	var self = this
	this.main = document.getElementById($div);

	this.main.className = 'InputText InputTextEnableds'

	var palabra = $placeholder;
	
	var color1 = '#666'
	var color2 = '#000'

	if(typeof($len)!='undefined') 	$(this.main).attr('maxlength', $len);

	//if(typeof($type)=='undefined') $type = 'text';

	//(this.main).attr('type', $type);

	var _habil =true;
		
	$(self.main).bind("focusout", onFocusOut);
	$(self.main).bind("focusin", onFocusIn);

	$(this.main).val(palabra)

	this.esVacio = function(){
		if(self.main.value.toUpperCase() == palabra.toUpperCase()){
			return true;
		}else{
			return self.main.value.replace(/(^\s*)|(\s*$)|[ ]/g, "").length == 0;	
		}
	}

	this.vaciar = function(){
		self.main.value = palabra;
		$(self.main).css('color', color1);
	}

	function onFocusOut(e){
		if(self.esVacio()){
			$(self.main).css('color', color1);
			self.main.value = palabra;
		}
	}
	
	function onFocusIn(e){
		if(self.main.value.toUpperCase() == palabra.toUpperCase()){
			$(self.main).css('color',color2);
			
			self.main.value = "";
			
		}
	}

	this.foco = function(){
		$(self.main).focus();
	}

    this.marcar_error = function($bool){

    	if($bool){
    	   $(self.main).addClass('InputTextError');
    	 }else{ 
	       $(self.main).removeClass('InputTextError');
    	 }
    }
	
	this.getValor = function(){
		if(self.esVacio()) return "";
		return $(this.main).val()
	}

	this.setValor = function($txt){
		return $(this.main).val($txt)
	}

	this.habil = function($b){
		_habil = $b;
		if($b){
		  self.main.className = 'InputText InputTextEnable';
		  $(self.main).removeAttr("disabled");
		}
		else {
			$(self.main).attr('disabled', true);
			self.main.className = 'InputText InputTextDisnable';
		}

	}

}