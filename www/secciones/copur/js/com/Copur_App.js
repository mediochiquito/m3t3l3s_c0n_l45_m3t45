function Copur_App(){

    var self = this
    this.secciones;
    this.velocidad_anim = 1;
    this.SERVER = '';
    this.flecha_izq;
    this.flecha_der;


    this.initialize = function(){

        if ($.browser.msie ) {
            if( Math.floor(Number($.browser.version))<=8){
                copur_app.velocidad_anim = 0;
            }
        }

        self.secciones = new Copur_Secciones()

        new BotonImg($('#copur-selector-flecha-back'), function (){
            copur_app.secciones.back()
        })

        this.flecha_izq = new BotonImg($('#copur-selector-flecha_izq'), function (){
            
            copur_app.secciones._Copur_SeccionProfiles.quitar_detalle()
            copur_app.secciones.back()
        })
        
        this.flecha_der = new BotonImg($('#copur-selector-flecha_der'), function (){
               copur_app.secciones._Copur_SeccionProfiles.quitar_detalle()
           
            copur_app.secciones.next()

        })


        $(document).ready(function(){   
            copur_app.secciones.go(copur_app.secciones._Copur_SeccionHome, .3);
        })
    
    
        
    }


}