function Destapa(){

		new BotonImg($('#btn-destapa	'), ver_blog);	

		function ver_blog(){
			


			if(app.esMobile){

				window.open('blog/')
			}else{
				
				app.loading.mostrar()
				$('#iframe-destapa').attr('src', 'blog/')
				$('#iframe-destapa').show();
		

				$('#iframe-destapa').load(function (){
					app.loading.ocultar()
					var $target = $('html,body'); 
				    $target.animate({scrollTop: $target.height() +1000}, 1000);
				})	

				setTimeout(app.loading.ocultar, 4000);
			}
			
			
		}
}