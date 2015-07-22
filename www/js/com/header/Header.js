function Header(){

    var ultima_seccion = 'home';
    var showingMenu = false;

    var btn_copur     =   new BotonAnim($('.header-btn-copur'),    onClick_btn_copur);
    var btn_contour     =   new BotonAnim($('.header-btn-contour'),    onClick_btn_contour);
    var btn_videos      =   new BotonAnim($('.header-btn-videos'),     onClick_btn_videos);
    var btn_destapa     =   new BotonAnim($('.header-btn-destapa'),    onClick_btn_destapa);

    new BotonAnim($('#wrapper-menu-mobile'),    desplegarMenu)

    this.setMenuMarca = function (secc){



        $('.header-btn-copur').removeClass('btn_menu_selected')
        $('.header-btn-copur').find('.div-icon').removeClass('btn_menu_selected')

        $('.header-btn-contour').removeClass('btn_menu_selected')
        $('.header-btn-contour').find('.div-icon').removeClass('btn_menu_selected')

        $('.header-btn-videos').removeClass('btn_menu_selected')
        $('.header-btn-videos').find('.div-icon').removeClass('btn_menu_selected')

        $('.header-btn-destapa').removeClass('btn_menu_selected')
        $('.header-btn-destapa').find('.div-icon').removeClass('btn_menu_selected')

        $('.header-btn-' + secc).addClass('btn_menu_selected')
        $('.header-btn-' + secc).find('.div-icon').addClass('btn_menu_selected')
    }

    
    function desplegarMenu()
    {
            //$(desplegable).stop();
            $($('#wrapper-menu-mobile')).toggleClass('open');
            $('#menu-desplegable').toggleClass('open');
           
     }
    
     function onClick_btn_copur(){
        
        app.navigateToSeccion('copur');
        desplegarMenu()
    }


    function onClick_btn_contour(){
        
        app.navigateToSeccion('contour');
        desplegarMenu()
    }

    function onClick_btn_videos(){

        app.navigateToSeccion('videos');
        desplegarMenu()
    }

    function onClick_btn_destapa(){

        app.navigateToSeccion('destapa');
        desplegarMenu()
    }


}