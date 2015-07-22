<?
include dirname(__FILE__) . '/init.php';

if($_GET['code']){
        
        include dirname(dirname(dirname(__FILE__))) . '/init.php';

        $url = "https://api.instagram.com/oauth/access_token";
        $access_token_parameters = array(
            'client_id'     =>    INSTA_CLIENT_ID,
            'client_secret'     => INSTA_CLIENT_SECRET,
            'grant_type'        => 'authorization_code',
            'redirect_uri'      =>  SERVER . 'secciones/contour/',
            'code'          =>     $_GET["code"]
        );
        
        $curl = curl_init($url);
        curl_setopt($curl,CURLOPT_POST,true);
        curl_setopt($curl,CURLOPT_POSTFIELDS, $access_token_parameters);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false); 
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $result = curl_exec($curl);
        curl_close($curl);



        $obj_user = json_decode($result);

        ?>
        <script>
            window.opener.contour_app.token('<?=$obj_user->access_token?>', <?=$obj_user->user->id?>);
            window.close();
        </script>

        <?
        exit;

    }





?>
<div class='seccion' id='contour'>

        <link rel="stylesheet" type="text/css" href="css/contour/app.css?v=2">

        <script type="text/javascript" charset="utf-8" src="js/contour/com/secciones/Base_Seccion.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/contour/com/secciones/Secciones.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/contour/com/secciones/SeccionHome.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/contour/com/secciones/SeccionConnect.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/contour/com/secciones/SeccionConnectOk.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/contour/com/secciones/SeccionEditor.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/contour/com/secciones/SeccionRegistro.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/contour/com/secciones/SeccionGracias.js"></script>

        <script type="text/javascript" charset="utf-8" src="js/contour/com/secciones/editor/FotoSelector.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/contour/com/secciones/editor/ItemFoto.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/contour/com/secciones/editor/ItemBotella.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/contour/com/secciones/editor/SliderControl.js"></script>
        
        <script type="text/javascript" charset="utf-8" src="js/contour/com/App.js"></script>

            <div id='contour-secciones'>

                <div id='contour-SeccionHome' class='seccion'>
                   <div>
                        
                        <div id='contour-home-txt0'>
                            Una botella<br />
                            <span>con 100 años</span><br /> 
                            de felicidad</div>

                        <div id='contour-home-txt1'>Celebra con nosotros nuestra icónica botella.</div>
                        <div id='contour-home-txt2'>Crea una botella con tus momentos más felices</div>
                        <div id='contour-home-btn-llenala' class='contour-btn'>Llénala ahora</div>
                         <div class="contour-social-bar-holder">
                                <img class="icon-social main-btn-social-in" id='' title="http://www.instagram.com/cocacolapuertorico" src="img/general/social/btn-instagram.png" />
                                <img class="icon-social main-btn-social-tw" id='' title="http://www.twitter.com/cokepuertorico" src="img/general/social/btn-twitter.png" />
                                <img class="icon-social main-btn-social-fb" id='' title="https://www.facebook.com/cocacola" src="img/general/social/btn-facebook.png" />
                                <img class="icon-social main-btn-social-yt" id='' title="http://www.youtube.com/cocacolapuertorico" src="img/general/social/btn-youtube.png" />
                         </div>
                    </div>

                </div>


                <div id='contour-SeccionConnect'  class='seccion'>
                     <div>
                         <div id='contour-connect-txt0' ><span class='br0'>Comparte tus </span>momentos felices</div>
                         <div id='contour-connect-txt1'>Conecta tu cuenta de Instagram. Asegura que tu perfil esté público.</div>
                         <div id='contour-connect-btn' class='contour-btn'>Conectar con Instagram</div>
                     </div>
                </div>


                <div id='contour-SeccionConnectOk' class='seccion'>
                    <div id='contour-connectOK-txt0' ><span class='br0'><sup>¡</sup>Hemos conectado </span><span class='br1'>con tu felicidad </span>exitosamente!</div>
                </div>


                <div id='contour-SeccionEditor'  class='seccion'>

                    <div id='contour-SeccionEditor-scroll-bottle'>
                        
                        <div id='contour-editor-txt0'>Selecciona las fotos que llenarán tu botella de felicidad.</div>

                        <div id='contour-Botella'>
                            
                            <img id='tapa_botella_layout' src='img/contour/tapa_botella_layout.png' />

                            <div id='holder-foto0' class='holder-foto' num='0'></div>
                            <div id='holder-foto1' class='holder-foto' num='1'></div>
                            <div id='holder-foto2' class='holder-foto' num='2'></div>
                            <div id='holder-foto3' class='holder-foto' num='3'></div>
                            <div id='holder-foto4' class='holder-foto' num='4'></div>
                            <div id='holder-foto5' class='holder-foto' num='5'></div>
                            <div id='holder-foto6' class='holder-foto' num='6'></div>
                            <div id='holder-foto7' class='holder-foto' num='7'></div>
                            <div id='holder-foto8' class='holder-foto' num='8'></div>

                            <img id='tapa_botella' src='img/contour/tapa_botella.png' />

                            <img id='add-0' class='add' src='img/contour/add.png' />
                            <img id='add-1' class='add' src='img/contour/add.png' />
                            <img id='add-2' class='add' src='img/contour/add.png' />
                            <img id='add-3' class='add' src='img/contour/add.png' />
                            <img id='add-4' class='add' src='img/contour/add.png' />
                            <img id='add-5' class='add' src='img/contour/add.png' />
                            <img id='add-6' class='add' src='img/contour/add.png' />
                            <img id='add-7' class='add' src='img/contour/add.png' />
                            <img id='add-8' class='add' src='img/contour/add.png' />
                           
                        </div>

                        <div id='contour-editro-btn-aceptar' class='contour-btn'>EMBOTELLAR MI FELICIDAD</div>

                        <div id='contour-SelectorFotos'>
                            <img src='img/contour/flecha_up.png' id='contour-selector-flecha-up' />
                            <div id='contour-selector-holder-fotos'></div>
                            <img src='img/contour/flecha_down.png' id='contour-selector-flecha-down' />
                        </div>


                   </div>
                   
                </div>


                <div id='contour-SeccionRegistro'  class='seccion'>
                      <div>
                        <div id='contour-registro-txt0'>Regístrate para recibir tu botella.</div>
                        <div id='contour-registro-txt1'>Todos los campos son requeridos.</div>
                        <input type='text'     id='contour-registro-txt_nombre' />
                        <input type='text'     id='contour-registro-txt_apellido' />
                        <input type='text'     id='contour-registro-txt_email' />
                        <div class="text_tyc">
                            <input type="checkbox" id='contour-registro-ter_cond' class="check-tyc">Acepto los <span id="contour-mostrar_tyc">términos y condiciones</span>
                        </div>
                        <div  class='contour-btn' id='contour-registro-btn-registrar' >REGISTRAR</div>
                        <div id='contour-registro-btn-cancelar' >Cancelar</div>
                    </div>
                    <!--<div class="contour-pop_up">
                        <h2>Teérminos y condiciones.</h2>
                        <div class="contour-tyc">
                           
                        </div>
                    </div>-->
                    <div class="contour-pop_up">
                        <div class="contour-reglascontent">
                            <div class="headreglas">
                                <button id="contour-cerrarreglas" class="btn-cerrar">x</button>
                            </div>
                            <h1 class="title-reglas">Términos y condiciones</h1>
                            <div class="contour-reglas-text">                
                                 <div class="contour-overview">
                                      <?php echo file_get_contents(dirname(__FILE__).'/terms.html'); ?>
                                </div>
                            </div>
                        </div>
                    </div>
                         
                         
                </div>

                 <div id='contour-SeccionGracias'  class='seccion'>
                     <div>
                         <div id='contour-gracias-txt0'><span class='br0'><sup>¡</sup>Hemos embotellado </span><span class='br1'>tu felicidad </span>exitosamente!</div>
                         <div id='contour-gracias-txt1'>De ser aprobada tu botella, te la enviaremos por correo electrónico para que la puedas compartir.</div>
                         <div id='contour-gracias-txt2'>Invita a tus amigos a crear su botella.</div>
                         <div id='contour-gracias-shares-content'>
                            <img  id='contour-gracias-shares-btn-share-fb' src='img/contour/btn_share_fb.png' />
                            <img  id='contour-gracias-shares-btn-share-tw' src='img/contour/btn_share_tw.png' />
                         </div> 
                         <div id='contour-gracias-btn-unamas' class='contour-btn'>EMBOTELLAR UNA MÁS</div>
                     </div>
                </div>

               
             <img src='img/contour/flecha_izq.png' id='contour-selector-flecha-back' />

            </div>

            <?
            $hashget = $_GET['h'];

            if($hashget!=''){

                $short_url_hash = json_decode(file_get_contents("http://api.bit.ly/v3/shorten?login=mdicom&apiKey=R_2b3c30d358e8ca59a0e050bb00cd4e24&longUrl=".urlencode(SERVER . '?h=' . $hashget)."&format=json"))->data->url;
                $rs = mysql_query("SELECT * FROM promo100_usuarios WHERE botellas_archivo='".mysql_real_escape_string($hashget).".png' LIMIT 1");
                if(mysql_num_rows($rs)==1){
            ?>
                <div id='lightbox-botella'>

                   <div class='marco'>

                        <div id='lightbox-botella-pic'><img src='botellas/share_<?=$_GET['h']?>.png' /></div>

                        <div id='lightbox-botella-share-nav'>
                            <img  id='lightbox-botella-btn-share-fb' src='img/contour/btn_share_fb.png' />
                            <img  id='lightbox-botella-btn-share-tw' src='img/contour/btn_share_tw.png' />
                            <img  id='lightbox-botella-btn-share-do' src='img/contour/btn_share_do.png' />
                        </div>

                    </div>
                  

                
                   <div id='lightbox-botella-cerrar_btn'><img src='img/contour/cerrar_btn.png' /></div>

                </div>


                <script>
                    $('#contour').addClass('contour_alto_min_con_lightbox')
                </script>

            <?
                }
            }
            ?>

        <script>

            var contour_app = new ContourApp();
            contour_app.SERVER = "<?=SERVER?>";
            contour_app.SHORT_URL_HASH = "<?=$short_url_hash?>";
            contour_app.INSTA_CLIENT_ID = "<?=INSTA_CLIENT_ID?>";
            contour_app.esIos =  <? if($detect->isiOS()) echo 'true'; else echo 'false'; ?>;
            contour_app.esMobile = <? if($mobile) echo 'true'; else echo 'false'; ?>;
            contour_app.esTablet = <? if($tablet) echo 'true'; else echo 'false'; ?>;
            contour_app.getHash  = '<?=$_GET["h"]?>';

            contour_app.initialize();

        </script>

 </div>