$(document).ready(function () {
    //Framework
    function buscadorcreditos() {
        $("*").attr('creditos', function() {
            if($(this).attr('creditos') != undefined) {
                console.log( $(this).attr('creditos') );

                var idintenficador = 'data-info-'+$(this).attr('creditos-numero');
                var coordenadas = $(this).position();
                $(".creditos .data-creditos ul").prepend('<li><a href="#'+idintenficador+'">('+$(this).attr('creditos-numero')+')</a> '+$(this).attr('creditos')+' - <a href="'+$(this).attr('creditos-link')+'">'+$(this).attr('creditos-link')+'</a></li>');
                var altocontentThis = $(this).outerHeight() + coordenadas.top + 10;
                $(".creditos-data-info-content").prepend('<div style="position: absolute;top: '+altocontentThis+'px;left: '+coordenadas.left+'px;" class="creditos-data-info">('+$(this).attr('creditos-numero')+') <a href="#creditos">Datos en la seccion de creditos</a></div>');
                $(this).attr('id', idintenficador);
            }
        })
    }
});

$(window).scroll(function(){
});