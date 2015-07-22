<?
  if(!$MAIN){
?>
<!DOCTYPE html> 
    <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

            <link rel="stylesheet" type="text/css" href="../../css/main.css?v=1">

            <script type="text/javascript" charset="utf-8" src="../../js/libs/jquery-1.8.3.min.js"></script>
            <script type="text/javascript" charset="utf-8" src="../../js/libs/jquery.transit.min.js"></script>
            <script type="text/javascript" src="../../js/libs/iscroll.js"></script>
            <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.13.2/TweenMax.min.js"></script>
            <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.14.2/plugins/CSSPlugin.min.js"></script>
            <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.14.2/plugins/ScrollToPlugin.min.js"></script>
            <script type="text/javascript" src="../../js/com/utils/Anima.js"></script>
            <script type="text/javascript" src="../../js/com/App.js"></script>
            <script type="text/javascript" src="../../js/com/utils/BotonImg.js"></script>
            <script type="text/javascript" src="../../js/com/utils/BotonImgVerdeOver.js"></script>

            <script>
                var app = { 'esMoble' : true };    
            </script>
            
        </head>
        <body>
 
    <?
    $ROOT['copur'] =  '';
    define('SERVER', '');
    $cerrar_ducmnet = true;

 }else{
    $cerrar_ducmnet = false;

    $ROOT['copur'] =  'secciones/copur/';

 }
?>

<div class='seccion' id='copur'>
        
        <link rel="stylesheet" type="text/css" href="<?=$ROOT['copur']?>css/copur.css?v=1">

        <script type="text/javascript" charset="utf-8" src="<?=$ROOT['copur']?>js/com/secciones/Copur_Base_Seccion.js"></script>
        <script type="text/javascript" charset="utf-8" src="<?=$ROOT['copur']?>js/com/secciones/Copur_Secciones.js"></script>

        <script type="text/javascript" charset="utf-8" src="<?=$ROOT['copur']?>js/com/secciones/Copur_SeccionHome.js?i=1"></script>
        <script type="text/javascript" charset="utf-8" src="<?=$ROOT['copur']?>js/com/secciones/Copur_SeccionVideo.js"></script>
        <script type="text/javascript" charset="utf-8" src="<?=$ROOT['copur']?>js/com/secciones/Copur_SeccionProfiles.js"></script>
        <script type="text/javascript" charset="utf-8" src="<?=$ROOT['copur']?>js/com/secciones/Copur_SeccionDonar.js"></script>

        <script type="text/javascript" charset="utf-8" src="<?=$ROOT['copur']?>js/com/Copur_App.js"></script>

            <div id='copur-secciones'>

                <div id='copur-SeccionHome' class='seccionCopur'>
                    <div>
                       
                        <div class='txt0'>EUFORIA<span>DE ORO</span></div>
                        
                        <div class='txt2'>Felicidad. Euforia. Triunfo. Ya es tiempo de que Puerto Rico celebre en grande. Deseamos que seas parte de uno de los momentos más felices en nuestra historia; conseguir la primera medalla de oro en las Olimpiadas 2016.
                                            <br /> <br />
                                            Ayúdanos a lograrlo. Únete a nuestra campaña para brindarle a nuestros atletas las mejores oportunidades de entrenamiento y apoyo. Después de todo, ellos compartirán con todo Puerto Rico el momento más feliz de sus carreras.
                                            <br /> <br />
                                            Conoce más acerca de nuestros atletas y ayúdalos a lograr ORO Olímpico.</div>

                        <div class='txt1'>SEAMOS EL PAÍS #1 EN FELICIDAD</div>

                        <div id='copur-home-content-btns'>
                            <div id='copur-home-btn-quiero-donar'    class='copur-btn'>QUIERO DONAR</div>
                            <div id='copur-home-btn-quiero-profiles' class='copur-btn'>NUESTROS ATLETAS</div>
                        </div>

                    </div>

                </div>

                <div id='copur-SeccionVideo'  class='seccionCopur'>
                    <div>    
                        <div class='txt0'>TRAER EL ORO ESTÁ EN TODOS.</div>
                        <div class='video'><iframe width="100%" height="100%" src="https://www.youtube.com/embed/xyQnQuQbMRM" frameborder="0" allowfullscreen></iframe></div>
                    </div>
                </div>

                <div id='copur-SeccionProfiles'  class='seccionCopur'>
                    <div>
                        
                        <div class='txt0'>SI TE LLENAN DE ORGULLO, CONÓCELOS MÁS A FONDO.</div>
                        <div class='txt1'>ESTÁS AYUDÁNDOLOS A TRAERNOS FELICIDAD.</div>
                       
                        <div id='copur-atletas-holder-items'> 
                        
                        <? 
                        $atletas = array(
                            array('Tenis-Mesa_Melanie', 'Melanie Díaz', 'MelPrtm'),
                            array('Lucha-Espinal', 'Jaime Espinal', 'jaimeespinalpr'),
                            array('Vela-Quique', 'Enrique “Quique” Figueroa', 'cokepuertorico'),
                            array('Tenis-Monica', 'Mónica Puig', 'MonicaAce93'),
                            array('Volleyball-Piky', 'Héctor “Picky” Soto', 'PickySoto'),
                            array('Boxeo-Kiria', 'Kiria Tapia', 'KiriaTapia')
                        );

                        $bulce = 0;
                        foreach($atletas as $atleta){
                        ?>

                            <div num='<?=$bulce?>' tw='<?=$atleta[2]?>' class='copurItemAtleta' id='<?=$atleta[0]?>'>
                                 <img src='<?=$ROOT['copur']?>img/atletas/<?=$atleta[0]?>/c.jpg' />
                                 <img class='bw' src='<?=$ROOT['copur']?>img/atletas/<?=$atleta[0]?>/bw.jpg' />
                                 <div><?=$atleta[1]?></div>
                            </div>

                            <div num='<?=$bulce?>' class='copurDetalleHolder copurDetalleHolder_<?=$bulce?>'>
                               
                                <div>
                                    <div class='bio_title'>Biografía</div>
                                    <div class='detalle_bio'></div>
                                    <div class='tw_inline'>
                                       <img src='<?=$ROOT['copur']?>img/twitter.png' class='detalle-twitter-pic' /> <span>@MateoMenestrina</span>
                                    </div>
                                    
                                    <div class='tw_title'>Twitter</div>
                                    <div class='detalle_tw'>
                                    </div>
                                    <img class='copurDetalle-cerrar-btn' src='<?=$ROOT['copur']?>img/cerrar.png' />
                                </div>
                                <img src='<?=$ROOT['copur']?>img/pico.png' class='pico-detalle' />  
                                    
                            </div>



                        <? 
                        $bulce++;
                        }
                        ?>
                        
                        </div>

                    </div>
                </div>
                
                <div id='copur-SeccionDonar'  class='seccionCopur'>
                    <div>
                        <div class='txt0'>CÓMO DONAR</div>

                        <div class='txt1'>Visita nuestra página de <a target='_blank' href='http://www.antrocket.com/en/copur'>AntRocket</a>, una plataforma de
                                            recolección de fondos, la cual te permite ayudar a nuestros atletas a
                                            conseguir ORO Olímpico aportando al Comité Olímpico de Puerto Rico.
                                            <br /><br />
                                            Tu donación ayudará a que sigan entrenando e incrementen sus
                                            posibilidades de lograr el momento más feliz en toda nuestra historia.</div>

                        <div id='SeccionDonar-btn' class='copur-btn'>DONA AHORA</div>
                    </div>
                </div>

               
            </div>

            <img src='<?=$ROOT['copur']?>img/flecha_izq.png' id='copur-selector-flecha_izq' />
            <img src='<?=$ROOT['copur']?>img/flecha_der.png' id='copur-selector-flecha_der' />

          
        <script>

            var copur_app = new Copur_App();
            copur_app.SERVER = "<?=SERVER?>";
            copur_app.initialize();

        </script>

</div>

<div id='bios' style='display:none;'>

    <div id='bio-Tenis-Mesa_Melanie'>Melanie Díaz tendrá su debut en los Juegos Panamericanos cuando compita en Toronto 2015. La atleta es la mayor de cuatro hermanas quienes también practican la disciplina. Sus padres también fueron tenimesistas y crearon el Club de Tenis de Mesa Águilas de Utuado. 
        <br /><br />En su primera participación en los Juegos Centroamericanos y del Caribe Veracruz 2014, obtuvo medalla de oro por equipo y conquistó medalla de plata en dobles femenino junto a su hermana menor.</div>

    <div id='bio-Lucha-Espinal'>Jaime Espinal se enfrenta a la categoría de 86 kilos libres en los Juegos Panamericanos Toronto 2015.
        <br /><br />El atleta se inició en el deporte a los 9 años por iniciativa de su entrenador.  Al regresar al deporte luego de un receso durante su adolescencia, Jaime conquistó medalla de oro en los Juegos Centroamericanos y del Caribe en Mayagüez 2010.
        <br /><br />Desde entonces, Jaime ha conquistado varios logros, entre ellos cualificar en los Juegos Olímpicos de Londres 2012 en donde logró la primera presea de plata para la Isla. </div>

    <div id='bio-Vela-Quique'>Quique es el máximo medallista puertorriqueño en los Juegos Panamericanos. Esta es su quinta participación en el evento de Hobbie Cat 16 junto a su tripulante Franchesca Valdés. 
       <br /> <br />El atleta cuenta con cuatro medallas de Juegos Panamericanos, tres de estas doradas en Winnipeg 1999, Santo Domingo 2003 y Guadalajara 2011, y una de bronce en Cartagena 2007.
        <br /><br />Quique, quien comenzó a navegar desde los 10 años, ha participado en cuatro Juegos Olímpicos, siendo Sídney 2000 y Atenas 2004 sus mejores presentaciones.</div>
    
    <div id='bio-Tenis-Monica'>Esta es la segunda participación de la tenista en los Juegos Panamericanos.  
        <br /><br />La atleta debutó en el equipo nacional en los Juegos Centroamericanos y del Caribe Mayagüez 2010 conquistando la medalla de oro en las categorías sencillo y doble mixto. Mónica también revalida medalla de oro en categoría sencilla en Veracruz 2014.
       <br /> <br />Mónica comenzó en el deporte a los 6 años de edad. Al momento ocupa la posición 91 a nivel mundial y ha competido en los eventos del Grand Slam de tenis. </div>
    
    <div id='bio-Volleyball-Piky'> Picky competirá en su quinto Juegos Panamericanos en Toronto 2015.
        <br /><br />El atleta forma parte de la Selección Nacional de Puerto Rico desde el 1998. Al año siguiente debuta en los Juegos Panamericanos Winnipeg. 
        <br /><br />El voleibolista de 38 años de edad tuvo el honor de ser el abanderado para la delegación puertorriqueña durante los Juegos Panamericanos en Río de Janeiro 2007. Ese mismo año fue nombrado mejor anotador durante la Copa del Mundo celebrada en Japón. </div>
   
    <div id='bio-Boxeo-Kiria'>Esta joven madre de 25 años tiene la encomienda de revalidar el primer lugar en la categoría de 60kg que obtuvo en Guadalajara 2011. 
        <br /><br />Kiria inició en el deporte a los 10 años, destacándose en el boxeo desde entonces. 
        <br /><br />De sus más recientes logros, se destaca su medalla de plata en el Torneo Clasificatorio  Panamericano de Boxeo celebrado en México durante el pasado mes de junio y una medalla de oro en Veracruz 2014.
        <br /><br />Kiria es la primera boxeadora en representar a Puerto Rico en los Juegos Panamericanos.</div>



</div>



<?
if($cerrar_ducmnet) echo '</body></html>';
?>
