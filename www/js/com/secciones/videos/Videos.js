function Videos()
{
		var self = this;
		
        var videoTimeline = new TimelineMax();        
   
		self.div = document.getElementById('videos');
		
		var videoWrapper = $(self.div).find('#videoWrapper');        

       
            $(self.div).find('.video-comercial').load();                      
            $('.social-bar-holder.remove img').click(ClickSocial);            
            $(self.div).find('button#back').click(Back);
            $(self.div).find('#ver-comercial').click(VerComercial);
            $(self.div).find('#descargar-wallpapers').click(DescargaWallpapers);
            $(self.div).find('#ver-reglas').click(VerReglas);
            $(self.div).find('#cerrarreglas').click(CerrarReglas);
            $(self.div).find('#walladelante').click(Adelante);
            $(self.div).find('#wallatras').click(Atras);
            $(self.div).find('#sharecomercial').click(ShareComercial);
            $(self.div).find('#btn-close').click(CloseShare);
            $(self.div).find('#btn-connect-facebook').click(fb_connect);
            $(self.div).find('#btn-connect-twitter').click(ShareTw);            
            //$(self.div).find('.reglas-text').tinyscrollbar();
            var myScroll = new IScroll('.reglas-text', {disablePointer: true, mouseWheel: true, click: true, scrollbars: true, interactiveScrollbars: true});  
               
        
        function VerComercial(){
            $('#videopersonaje').removeClass('ocultapersonaje');
            $('#back').show();
            $('#videopersonaje').attr('class', 'video-chico');
            videoTimeline.add([
                TweenLite.to($(self.div).find('.videocontent-chica'), 0.2, {className: "+=nodisplay"}),
                TweenLite.to($(self.div).find('.videocontent-chico'), 0.2, {className: "-=nodisplay"})
            ]);
        }
        
        function DescargaWallpapers(){            
            $('#back').show();            
            $('#videopersonaje').attr('class', 'video-chica2');
            $('#videopersonaje').addClass('ocultapersonaje');            
            videoTimeline.add([
                TweenLite.to($(self.div).find('.videocontent-chica'), 0.2, {className: "+=nodisplay"}),
                TweenLite.to($(self.div).find('.videocontent-chica2'), 0.2, {className: "-=nodisplay"})
            ]);
        }
        
        function VerReglas(){
            var myScroll = new IScroll('.scroller', { mouseWheel: true, click: true });
            document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
            videoTimeline.to($(self.div).find('.videoreglas'), 0.5, {'z-index': 11});
            videoTimeline.to($(self.div).find('.videoreglas'), 0.5, {opacity: 1});            
        }
        function CerrarReglas(){
            videoTimeline.to($(self.div).find('.videoreglas'), 0.5, {opacity: 0});  
            videoTimeline.to($(self.div).find('.videoreglas'), 0.5, {'z-index': -1});
        }
        
        function Back(){            
            $('#back').hide();
            $('#videopersonaje').attr('class', 'video-chica');
            $(self.div).find('.video-comercial').load();
            videoTimeline.add([
                TweenLite.to($(self.div).find('.videocontent-chico'), 0.2, {className: "+=nodisplay"}),
                TweenLite.to($(self.div).find('.videocontent-chica2'), 0.2, {className: "+=nodisplay"}),
                TweenLite.to($(self.div).find('.videocontent-chica'), 0.2, {className: "-=nodisplay"})
            ]);
        }
        
        function Adelante(){
            var actual = $('.scroller').scrollLeft();
            $('.scroller').scrollLeft(actual + 260)
        }
        
        function Atras(){
            var actual = $('.scroller').scrollLeft();
            $('.scroller').scrollLeft(actual - 260)
        }
        
        function ShareComercial(){
            $('#videoWrapper #lightbox-connect').show();
        }
        
        function CloseShare(){
             $('#videoWrapper #lightbox-connect').hide();
        }
        
        function ClickSocial(obj){
            window.open($(this).attr('title'),'_blank');
        }
        
        
        function fb_connect()
		{
			FB.getLoginStatus(function(response) 
			{
				if (response.status == 'connected') 
				{
					ShareFb();
				}
				else
				{
					FB.login(function(response) 
					{
						if(response.authResponse) 
						{
							ShareFb();
						} 
						else {}
					}
					,{ scope: 'public_profile' });
				}
			});
		}	
        
        function ShareFb(){
            var url =  objDataSite.SITE_URL + '/share/sharefb.png';
            FB.ui(
                {
                    method: 'feed',
                    name: '100 Veranos de Felicidad - Embotella tu Felicidad',
                    link: 'www.cocacolapuertorico.com',
                    picture: url,
                    description: 'Un clásico como Coca-Cola siempre está de moda. ¡Celebra los 100 años de la botella icónica de Coca-Cola con un like y un share!'
                },
                function(){
                    CloseShare();
                }
            );
        }
    
        function ShareTw(){
           // window.open('http://twitter.com/home?status='+encodeURIComponent('Un clásico como Coca-Cola siempre está de moda. ¡Celebra los 100 años de la botella icónica de Coca-Cola con un FAV y un RT!'),'sharer','toolbar=0,status=0,width=626,height=436');
            //CloseShare();
         var params = 'location=0,status=0,width=800,height=600';
   			twitter_window = window.open(encodeURI(objDataSite.BASE_URL+"connect/login.php"), 'twitterWindow', params);
   			intervalo = setInterval(checkTwitterWindow,1000);
		}

		function checkTwitterWindow()
		{
			if(twitter_window.closed)
			{
				clearInterval(intervalo);
				CloseShare();
			}
		}		
	}