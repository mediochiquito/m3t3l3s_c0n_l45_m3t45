function Copur_SeccionProfiles()
{
	var self = this;

    var item_abierto = false;
    var div_detalle_abierto;

	//his.main.id = 'SeccionForm0';
	this.main = document.getElementById('copur-SeccionProfiles');
    $(window).resize(function (){
      self.quitar_detalle()
    });


    var name_tw;


	$('.copurItemAtleta').each(function(){

            $(this).bind('mouseover', function (){
                Anima.to($(this).find('.bw'), 1, {opacity:0});
            })
            $(this).bind('mouseout', function (){
                Anima.to($(this).find('.bw'), 1, {opacity:1});
            })

            $(this).bind('click', function (){
               

                $('.copurDetalleHolder').removeClass('detalle_abierto');
                $('.twits').hide()
                $('.pico-detalle').removeClass('mostrando')
                $('.pico-detalle').removeClass('pico-detalle_ziq')
                $('.pico-detalle').removeClass('pico-detalle_der')

                var num  = ($(this).attr('num'))
                var div_mostrar;

                if(window.innerWidth  <= 400){
                
                   div_mostrar =  $('.copurDetalleHolder_' + num);

                }else{
                    if(num<=2) div_mostrar = $('.copurDetalleHolder_2');
                    else div_mostrar = $('.copurDetalleHolder_5');
                    
                    if(num==0 || num==3)  $('.pico-detalle').addClass('pico-detalle_ziq');
                    if(num==2 || num==5)  $('.pico-detalle').addClass('pico-detalle_der');

                }

                $(div_mostrar).find('.detalle_bio').html( $('#bio-' + $(this).attr('id')).html() );
                
                div_detalle_abierto = $(div_mostrar);

                $(div_mostrar).find('.detalle_tw').empty()

                name_tw =  $(this).attr('tw');

               if(window.innerWidth > 400){
                    
                    var id_tw ;
                    if(name_tw == 'cokepuertorico') id_tw = '620602463264096256';
                    if(name_tw == 'MonicaAce93')    id_tw = '620616929166929920';
                    if(name_tw == 'PickySoto')      id_tw = '620617027812741121';
                    if(name_tw == 'KiriaTapia')         id_tw = '620617135161782272';
                    if(name_tw == 'MelPrtm')         id_tw = '620690797361561600';
                    if(name_tw == 'jaimeespinalpr')         id_tw = '620693963754897408';

                    $(div_mostrar).find('.detalle_tw').append('<a height="250"  data-chrome="noheader noborders nofooter"  class="twitter-timeline" data-dnt="true" href="https://twitter.com/'+name_tw+'" data-widget-id="'+id_tw+'"></a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?' + "'http':'https'" + ';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>');
                    
                     try{
                         twttr.widgets.load(); 
                     }catch(e){}

                }   

                $('.tw_inline > span').html('@' + name_tw)
                $('#copur-SeccionProfiles > div').addClass('copur_atletas_expandidos_div')
                $('#copur').addClass('copur_atletas_expandidos')
                $(div_mostrar).find('.pico-detalle').addClass('mostrando')
                $(div_mostrar).addClass('mostrando');

                setTimeout(function (){ item_abierto = true; 

                      $(div_mostrar).addClass('detalle_abierto');

                }, 10)

               
               
                setTimeout(function (){ item_abierto = true; 

                

            }, 500)
              


            })


    });

    new BotonImg($('.copurDetalle-cerrar-btn'), function (){
           self.quitar_detalle()
    })


    new BotonImg($('.tw_inline'), function (){
            window.open('https://twitter.com/'+name_tw)
    })


    this.quitar_detalle =  function (){
         $('#copur').removeClass('copur_atletas_expandidos')
        
         $('#copur-SeccionProfiles > div').removeClass('copur_atletas_expandidos_div')
         // $('.copurDetalleHolder').hide();
          $('.copurDetalleHolder').removeClass('detalle_abierto');
          $('.copurDetalleHolder').removeClass('mostrando');


          item_abierto = false
    }
    /*
        if(window.innerWidth      > 890) alto_scroll = Math.ceil(cantidad_fotos/5)*114;
        else if(window.innerWidth > 730) alto_scroll = Math.ceil(cantidad_fotos/4)*114;
        else if(window.innerWidth > 640) alto_scroll = Math.ceil(cantidad_fotos/3)*114;
        else                             alto_scroll = Math.ceil(cantidad_fotos/3)*94;
    */
		


}

Copur_SeccionProfiles.prototype = new Copur_Base_Seccion();