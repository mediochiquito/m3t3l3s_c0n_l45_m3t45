
function Reglas(){
	var self = this;
	this.main = document.getElementById('reglas');

	if($.browser.msie){
		$('#reglas_holder_texto').css('overflow-y','scroll');
	}else{
		myScroll = new IScroll('#reglas_holder_texto', {  mouseWheel: true, scrollY: true, interactiveScrollbars: true, scrollbars: "custom" });	
	}
	
	var cerrar_btn = new AlphaBtnRef('reglas_cerrar_btn');

	$(this.main).css({'display':'none','opacity':0});

	$(cerrar_btn.main).bind('click', onClickCerrarBtn);


	this.mostrar = function(){
		$(self.main).css('display','block');
		$(self.main).animate({'opacity':1},400);
	}


	function onClickCerrarBtn(e){
		$(self.main).animate({'opacity':0},400, function(){
			$(self.main).css('display','none');
		});
	}
	
}