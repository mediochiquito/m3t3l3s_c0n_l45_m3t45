function ContourApp(){

    var self = this

    this.velocidad_anim = 1;
    this.SERVER = '';
    this.SITE_URL = '';
    this.INSTA_CLIENT_ID = '';
    this.SHORT_URL_HASH = '';
    this.uid = 0;
    this.access_token = 0;
    this.esMobile;
    this.esTablet;
    this.esIos;
    this.toastmessage;
    this.loading;
    this.hash_botella;
    this.getHash = '';
   
    //http://localhost/cocacolacontour/public/?access_token=2011381729.ad5940d.1c9938dd143f4045b8cc0cc85ddd028a&id=2011381729
    this.usuario = {
        at: "2011381729.ad5940d.1c9938dd143f4045b8cc0cc85ddd028a",
        id: 2011381729
    }

    this.initialize = function(){

        if ($.browser.msie ) {
            if( Math.floor(Number($.browser.version))<=8){
                contour_app.velocidad_anim = 0;
            }
        }

        self.secciones = new Secciones()

        self.loading = new Loading()
        $('body').append(self.loading.main);
        self.loading.mostrar()

        this.toastmessage = new ToastMessage();
        $('body').append(self.toastmessage.main);
        contour_app.toastmessage.ocultar()

        new BotonImg($('#contour-selector-flecha-back'), function (){
                    contour_app.secciones.back()
        })
       

        $.post("http://graph.facebook.com/?id=" + encodeURIComponent(contour_app.SERVER + 'botellas/share_' + contour_app.getHash + '.png') + "&scrape=true",
        function(contents){
        
        });

        $(document).ready(function(){

            //setTimeout(function(){
            
               contour_app.secciones.go(contour_app.secciones._SeccionHome, .3);
                //contour_app.secciones.go(contour_app.secciones._SeccionGracias, .3);
                //contour_app.secciones.go(contour_app.secciones._SeccionConnectOk, .3);
                //contour_app.secciones.go(contour_app.secciones._SeccionEditor, .3);
              // contour_app.secciones.go(contour_app.secciones._SeccionRegistro, .3);
                 //contour_app.secciones.go(contour_app.secciones._SeccionGracias, .3);
                 // contour_app.secciones.go(contour_app.secciones._SeccionConnect, .3);

           // }, 300);
            
            $('#contour-cerrarreglas').click(cerrar_tyc);
            $('#contour-mostrar_tyc').click(mostrar_tyc);            
            self.loading.ocultar();
            
        })

        new BotonImg($('#lightbox-botella-cerrar_btn'), function(){
        
            Anima.to($('#lightbox-botella'),1, {opacity:0}, 0, function(){
                $('#lightbox-botella').hide()
            })
            $('#contour').removeClass('contour_alto_min_con_lightbox');

        })

        new BotonImg($('#lightbox-botella-btn-share-fb'), function (){

            window.open('http://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(contour_app.SERVER + '?h=' + contour_app.getHash) ,'sharer','toolbar=0,status=0,width=570,height=436');

        })

        new BotonImg($('#lightbox-botella-btn-share-tw'), function (){

             
            window.open('http://twitter.com/home?status=' + encodeURIComponent('¡Ya hice mi botella con Coca-Cola! Mírala aquí: ' + contour_app.SHORT_URL_HASH),'sharer','toolbar=0,status=0,width=626,height=436');

        })

        new BotonImg($('#lightbox-botella-btn-share-do'), function (){

                if(app.esIos)
                        window.open('botellas/share_' + contour_app.getHash + '.png');
                    else
                        document.location.href = 'process/download.php?f=' + encodeURIComponent( 'botellas/share_' + contour_app.getHash + '.png' ) ;
            
        })
    }


    this.token = function ($toke, $id){
    
        contour_app.usuario.at = $toke
        contour_app.usuario.id = $id
        contour_app.secciones.go(contour_app.secciones._SeccionConnectOk, .3);

    }
  
    this.lightbox = function ($p){
        
      /*  $('body,html').css('overflow-y', 'hidden');
        en_lightbox = $p;
        $('#ok').hide()
        $('#terms').hide()
        $($p).show()
        $('#header').addClass('blureado')
        $('#secciones').addClass('blureado')

       // if(contour_app.esMobile)

        Anima.to($('#lightbox'), .3, {y: 0});
        
        if($p == '#terms')
            setTimeout(function(){
                 //$('#txt_reglas').jScrollPane();

                
             myScroll = new IScroll('#txt_reglas', {  mouseWheel: true, scrollY: true, interactiveScrollbars: true, scrollbars: "custom" });

                   
            },0);*/

    }
    function cerrar_lightbox(){
      /*   $('body,html').css('overflow-y', 'auto');
        Anima.to($('#lightbox'), .5, {y: 2000}, 0, function(){
             if(en_lightbox == '#ok'){
                contour_app.secciones.go(contour_app.secciones._SeccionHome, .3);
                contour_app.secciones._SeccionParticipa._reset()

             }
             $('#header').removeClass('blureado')
             $('#secciones').removeClass('blureado')

        })*/
    }

    function animIn(){
        
        
    }

  

    this.set_compartir = function($hash){

        /*
			FB.ui({method: 'feed',
		  	  name: 'Lore ipsum.',
		      link: contour_app.server+'?h=' + $hash,
		      picture: contour_app.server+"img/uploads/"+$hash+"_scale.jpg",
		      description: " ."
		    },
		    function(response) {
		      if (response && response.post_id) {
		        //Post was published  
		      } else {
		        //Post was not published
		      }
		    }
		  );

		*/

    }

    this.alerta = function($str){

        contour_app.toastmessage.mostrar($str)

    }

    this.es_touch = function(){

        if(contour_app.esMobile) return true; 
        else return false;  

    }

    this.cargando = function ($bool, $txt){

        if($bool){

        }else{

        }

    }
    
    function cerrar_tyc(){
        $('.contour-pop_up').fadeOut(300);
    }
    function mostrar_tyc(){
        $('.contour-pop_up').fadeIn(300);
        var myScroll = new IScroll('.contour-reglas-text', {disablePointer: true, mouseWheel: true, click: true, scrollbars: true, interactiveScrollbars: true}); 
    }
}