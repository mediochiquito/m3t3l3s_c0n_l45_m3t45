//Al parecer esto hace un plugin de jquery
$.fn.ripple = function(customs) {
    return this.each(function(){
        var container, ink, showing, options={}, defaultOptions;

        defaultOptions = {
            color:"rgba(255, 255, 255, 0.5)",
            fade:true
        };

        /**Override via js**/
        $.extend(options, defaultOptions, customs);
        /**Override via html data attribute**/
        options.color = $(this).attr('data-ripple-color') != undefined ? $(this).attr('data-ripple-color') : options.color;

        $(this).mousedown(function(e){
            container = $(this);
            var size, x, y;

            container.css({
                overflow:'hidden'
            });

            if(container.css('position') != "absolute" && container.css('position') != "relative" )
                container.css("position",'relative');

            if(container.find('.ink').length ===0){
                container.prepend("<span class='ink'></span>");
            }
            ink = container.find('.ink');

            ink.removeClass('ink-animation');

            if(!ink.height() && !ink.width()){
                size = Math.max(container.outerWidth(), container.outerHeight());
                ink.css({background:options.color,height:size, width:size});
            }

            x = e.pageX - container.offset().left - ink.width()/2;
            y = e.pageY - container.offset().top - ink.height()/2;

            ink.css({top:y,left:x})
                .addClass('ink-animation')
                .addClass('pressed')
                .addClass('');
        });

        $(this).mouseup(function(){
            container = $(this);
            container.find('.ink').removeClass('pressed');
        });
    });
};
