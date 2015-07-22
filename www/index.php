<?
include 'init.php';
include 'php_libs/Mobile_Detect.php';
$detect = new Mobile_Detect;
$MAIN = true;

/*if(substr($_SERVER['HTTP_HOST'], 0, 4)!= "www."){
  header('Location:'.'http://www.'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);
}*/

?>
<!DOCTYPE html> 
<html>
    <head>

        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title></title>
        
        <meta name="description" content="Ya compartí una Coca-Cola. Entra tú también para que compartas el tuyo">
        <meta name="viewport" content="width=device-width, user-scalable=no"/>   
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />

        <?
        if($_GET['h'] != ''){
        ?> 
            <meta property="og:title" content="¡Ya hice mi botella con Coca-Cola!" />
            <meta property="og:description" content="Crea tu botella con tus momentos felices de Instagram y celebra los 100 años de nuestra icónica botella." />
            <meta property="og:image" content="<?=SERVER . 'botellas/share_' . $_GET['h'] . '.png' ?>" />
        <?
        }else if($_GET['p'] == 'contour'){
        ?>    

            <meta property="og:title" content="Celebra tus momentos con Coca-Cola" />
            <meta property="og:description" content="Crea tu botella con tus momentos felices de Instagram y celebra los 100 años de nuestra icónica botella." />
            <meta property="og:image" content="<?=SERVER . 'img/contour/share.jpg' ?>" />
        
        <?  
        }else{
        ?>
            <meta property="og:title" content="Coca-Cola" />
            <meta property="og:description" content="Ya compartí una Coca-Cola. Entra tú también para que compartas el tuyo" />
            <meta property="og:image" content="<?=SERVER.'img/fbshare.jpg'?>"/>
        <?
        }
        ?>

        <link rel="stylesheet" type="text/css" href="css/controls.css">
        <link rel="stylesheet" type="text/css" href="css/main.css">
        <link rel="stylesheet" type="text/css" href="css/header.css">
        
        <script type="text/javascript" charset="utf-8" src="js/libs/jquery-1.8.3.min.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/libs/jquery.transit.min.js"></script>
        <script type="text/javascript" src="js/libs/iscroll.js"></script>
        <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.13.2/TweenMax.min.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.14.2/plugins/CSSPlugin.min.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.14.2/plugins/ScrollToPlugin.min.js"></script>

        <link rel="shortcut icon" href="favicon.ico" />

        <script type="text/javascript" src="js/com/utils/Anima.js"></script>
        <script type="text/javascript" src="js/com/utils/Loading.js"></script>
        <script type="text/javascript" src="js/com/utils/ToastMessage.js"></script>
        <script type="text/javascript" src="js/com/utils/BotonAnim.js"></script>
        <script type="text/javascript" src="js/com/utils/BotonImg.js"></script>
        <script type="text/javascript" src="js/com/utils/InputText.js"></script>
        <script type="text/javascript" src="js/com/utils/BotonImgVerdeOver.js"></script>

        <script type="text/javascript" charset="utf-8" src="js/com/App.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/com/header/Header.js"></script>

        <script>

            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                                    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-50880038-1', 'auto');
            ga('require', 'displayfeatures');
            ga('send', 'pageview');

        </script>

        <script>

         var app = new App();
            app.SERVER = '<?=SERVER?>';
            app.esMobile = <? if($detect->isMobile()) echo 'true'; else echo 'false'; ?>;
            app.esTablet =  <? if($detect->isTablet()) echo 'true'; else echo 'false'; ?>;
            app.esIos =  <? if($detect->isiOS()) echo 'true'; else echo 'false'; ?>;
            app.esAndroid =  <? if($detect->isAndroidOS()) echo 'true'; else echo 'false'; ?>;

         </script>

    </head>

    <body> 
        
        <div id="fb-root"></div>
        <script>
            window.fbAsyncInit = function() {
                FB.init({
                  appId      : '<?= FB_APP_ID?>',
                  xfbml      : true,
                  version    : 'v2.3'
                });
              };

              (function(d, s, id){
                 var js, fjs = d.getElementsByTagName(s)[0];
                 if (d.getElementById(id)) {return;}
                 js = d.createElement(s); js.id = id;
                 js.src = "//connect.facebook.net/en_US/sdk.js";
                 fjs.parentNode.insertBefore(js, fjs);
               }(document, 'script', 'facebook-jssdk'));

        </script>

        <div id='viewport'>

             <!-- INIT SECC -->
             <? include 'secciones/copur/copur.php' ; ?>
             <? include 'secciones/contour/index.php' ; ?>
             
             <? include 'secciones/videos/index.php'  ;?>
             <? include 'secciones/destapa/index.php' ;?>
             <!-- FIN SECC --> 

             <? include 'templates/header.php' ;?>
             <div class="social-bar-holder">
                    <img class="icon-social main-btn-social-in" id='' title="http://www.instagram.com/cocacolapuertorico" src="img/general/social/btn-instagram.png" />
                    <img class="icon-social main-btn-social-tw" id='' title="http://www.twitter.com/cokepuertorico" src="img/general/social/btn-twitter.png" />
                    <img class="icon-social main-btn-social-fb" id='' title="https://www.facebook.com/cocacola" src="img/general/social/btn-facebook.png" />
                    <img class="icon-social main-btn-social-yt" id='' title="http://www.youtube.com/cocacolapuertorico" src="img/general/social/btn-youtube.png" />
             </div>

        </div>
      
       
        <script>
            
            
            app.init(function(){});

        </script>
       
    </body>
</html>