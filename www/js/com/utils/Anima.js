function Anima(){
    //

}
Anima.to = function ($elem, $t, $obj, $delay, $callback){

    if ( $.browser.msie ) {
        if( Math.floor(Number($.browser.version))<=8){
           $t = 0;
        }
    }
    
    if(typeof($delay) == 'undefined')   $delay = 0;
    if(typeof($callback) == 'undefined')  $callback = function(){};

    if (!$.support.transition) {

        $obj.onComplete = $callback;
        setTimeout(function(){
            TweenMax.to($elem, $t, $obj) 
        }, $delay*1000)

    }else {
        setTimeout(function(){
            $($elem).stop(true, true).transition($obj, $t*1000, $callback)

        }, $delay*1000);
    }
}

Anima.staggerFromTo = function($elems, $t, $objFrom, $objTo, $stagger, $callback){

    if ( $.browser.msie ) {
            if( Math.floor(Number($.browser.version))<=8){
               $t = 0;
            }
     }
    
    if(typeof($delay) == 'undefined')  $delay = 0;
    if(typeof($callback) == 'undefined')  $callback = function(){};

    if (!$.support.transition) {

        $objTo.onComplete = $callback;

        setTimeout(function(){
            TweenMax.staggerFromTo($elems, $t,$objFrom, $objTo, $stagger);
        }, $delay*1000)

    }else{
        setTimeout(function(){
            $($elems).css($objFrom);
            var realStagger=0;
            $.each($elems, function(key, elem){
                $(elem).stop(true, true).delay(realStagger*1000).transition($objTo, $t*1000, $callback)
                realStagger+=$stagger;
                
            });

        }, $delay*1000);
    }
}   

