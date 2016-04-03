//Por si no hai conexión compruebo si ha cargado jQuery y de lo contrario lo cargo de local 

window.jQuery || document.write('<script type="text/javascript" src="js/jquery.min.js"><\/script><script type="text/javascript" src="js/bootstrap.min.js">');

//try{Modernizr.load([]);} catch(e) {document.write('<script src="js/modernizr-2.8.3.min.js"><\/script>')};

//Inicio Carousel
$('.carousel').carousel();



$(document).ready(function(){
    //Textos alternativos del porfolio
    $('.porfolioTextAlt').click(function(event) {
        event.preventDefault();
        var link = $(this).attr('id').substr(1,$(this).attr('id').length).replace(/_/g,' ');
        var alt = $(this).attr('href');
        $.getJSON('js/pandaweb.json',function(dat){
            for (i in dat) {
                if (dat[i].nombre==link) {
                    var htmlP = '<h2>'+dat[i].nombre+'</h2>'
                            +'<p class="center-text"><strong><a href="'+dat[i].URL+'">'+dat[i].URL+'</a></strong></p>'
                            +'<p>'+dat[i].descripcion+'</p>'
                            +'<p class="center-text"><a href="'+alt+'">Más</a></p>'
                    ;
                    var cerrarP = '<button type="button" class="close" aria-hidden="true">&times;</button>';
                    $('#popup').html('<div id="popConten">'+cerrarP+htmlP+'</div>');
                    $('#popup').css('display', 'block');
                }
            }
        });
    });
    $('#popup').on('click','.close',function(){
        $('#popup').css('display', 'none');
    });
    
    $('#formContacto').submit(function(event){
        event.preventDefault();
        $('#mensaje').load('contactar.php');
    })
});

//PLUGINS BOILERPLATE
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

//MODERNIZR
Modernizr.load([
  {
    //Si no van los gradiantes los cargo con PIE
    test : Modernizr.cssgradients,
    nope : ['PIE/PIE.js', 'PIE/PIE.css']
  }
]);