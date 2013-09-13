(function ( $ ) {
 
    $.fn.boxify = function( fnc,options ) {
 
        if (fnc && typeof(fnc) == 'string') {
            var sett=this.data("boxifydata");
            if(fnc=='data')
            {
                var ret=new Array();
                $('.'+sett.selClass).each(function(){
                    ret.push($(this).attr('id'));
                });
                return ret;
            }
        }else
        {
            var settings = $.extend({
                // These are the defaults.
                selClass: "boxSelected",
                rows: 4,
                cols:3,
                width:100,
                height:100,
                margin:10

            }, options );
            this.data("boxifydata",settings);
            var html='';

            this.css({            
                width:(settings.width*settings.cols)+(2*settings.margin*settings.cols)+(2*settings.cols),
                height:(settings.height*settings.rows)+(2*settings.margin*settings.rows)+(2*settings.rows),
            });
            var num=1;
            for(var x=1;x<=settings.rows;x++)
            {
                for(var y=1;y<=settings.cols;y++)
                {                
                    html=html+'<li id=r'+x+'c'+y+'>'+num+'</li>';
                    num++;
                }
            }
            this.html('<ol class="boxify">'+html+'</ol>');
            this.find('ol').css({'list-style-type': 'none',padding:0,margin:0});
            this.find('ol>li').css({
                width: settings.width,
                float:'left',
                height: settings.height,
                margin:settings.margin
            });
            this.find('ol>li').click(function(){
                

                if($(this).hasClass(settings.selClass))
                {
                    $(this).removeClass(settings.selClass);
                }else
                {
                    $(this).addClass(settings.selClass);
                }
                fnc();
            });
            return this;
        }
 
    };
 
}( jQuery ));