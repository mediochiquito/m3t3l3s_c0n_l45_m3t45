function App(){

    var self = this
    this.SERVER;
    this.esMobile;
    this.esTablet;	
    this.esIos;	
    this.esAndroid;	
    this.scrollPosition = 0;
    this.toastmessage;
    this.loading;
    this.deepLink;

    this._Header;
    this._Contour;
    this._Videos;
    this._Destapa;

    var ultima_seccion = 'copur'
    //var array_secciones = new Array('copur','videos', 'destapa')
    var array_secciones = new Array('copur','contour','videos', 'destapa')
    var navegando_por_click_a_seccion = false;



    this.init = function($callback){

        self.loading = new Loading()
        $('body').append(self.loading.main);
        self.loading.mostrar()

        this.toastmessage = new ToastMessage();
        $('body').append(self.toastmessage.main);
        app.toastmessage.ocultar();

        $(document).ready(function(){ 
            app.loading.ocultar();
            app._Header = new Header();
            app._Header.setMenuMarca('home');

         });

        $(window).load(function(){

          
            setTimeout(onScrollCambio, 200);
            $(window).bind("scroll", onScrollCambio);

           
        });


        $('.main-btn-social-in').bind('click',    function (){
            window.open("http://www.instagram.com/cocacolapuertorico");
        });
        $('.main-btn-social-tw').bind('click',   function (){
            window.open("http://www.twitter.com/cokepuertorico");
        });
        $('.main-btn-social-fb').bind('click',    function (){
            window.open("https://www.facebook.com/cocacola");
        });
        $('.main-btn-social-yt').bind('click',    function (){
            window.open("http://www.youtube.com/cocacolapuertorico");
        });


         


    }

    this.esIE = function(){

        if ( $.browser.msie ) {
            if( Math.floor(Number($.browser.version))<=8){
                return true;
            }
        }
        return false;
    }


    function onScrollCambio(e){

        if(navegando_por_click_a_seccion) return;


        for(var secc in array_secciones){

            var scrolled = $(window).scrollTop()-$('header').scrollTop();
            var secActual = false;

          
          
           
            var posYSection = $('#'+array_secciones[secc]).offset().top
            if(scrolled >= posYSection){
                secActual = secc;
            }else if(scrolled + $(window).height() >= $(document).height()-200){
                //Llegue al fondo entonces es productos
                secActual = 3;

                $('#destapa-content').removeClass('destapa-content-bajar');
                
            }else{

                $('#destapa-content').addClass('destapa-content-bajar');
            }
            if(secActual!==false && ultima_seccion != secActual){
                //llegue a la seccion
                app._Header.setMenuMarca(array_secciones[secActual]);
                ultima_seccion = array_secciones[secActual];

                if(ultima_seccion == 'destapa')  $('#destapa-content').css('bottom', 0);
                //disparamos el evento de que llego por si alguien lo quiere
                var event = jQuery.Event('navigate');
                event.section = secActual;
                $(document).trigger(event);


                
            }


        }


    }


    this.navigateToSeccion = function ($div){

        navegando_por_click_a_seccion = true;

        var div = $('#'+$div);
        var pos = div.offset().top ;



        app._Header.setMenuMarca($div);
        $('#viewport').removeClass('overflowViport');

        if($div == 'home') pos +=50

        if($div == 'destapa') $('#destapa-content').removeClass('destapa-content-bajar');
        else $('#destapa-content').addClass('destapa-content-bajar');

        if($div == 'copur-SeccionProfiles' || $div == 'copur-SeccionDonar') pos -=40

        if(app.esMobile){
            window.scrollTo(0, pos);
        }else{

            TweenMax.to(window, .7, {scrollTo:{y:pos}, ease:Power2.easeInOut, onComplete:function(){

                navegando_por_click_a_seccion = false;

            }, onUpdate:function(){

            }});

        }




    }


    this.alerta = function($str){
        app.toastmessage.mostrar($str)
    }

    this.es_touch = function(){
        return app.esMobile;  
    }

}