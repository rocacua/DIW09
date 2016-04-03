    function addEvent(element, event, fn) {
        if (element.addEventListener) {
            element.addEventListener(event, fn, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + event, fn);
        }
    }

    //this function will work cross-browser for loading scripts asynchronously
    function loadScript(src, callback) {
      var s,
          r,
          t;
      r = false;
      s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = src;
      s.onload = s.onreadystatechange = function() {
        //console.log( this.readyState ); //uncomment this line to see which ready states are called.
        if ( !r && (!this.readyState || this.readyState == 'complete') )
        {
          r = true;
          if (callback !== undefined) {
            callback();
          }
        }
      };
      t = document.getElementsByTagName('script')[0];
      t.parentNode.insertBefore(s, t);
    }

    addEvent(window, 'load', 
        function(){ 
            loadScript('https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js', 
                function () {
                    loadScript('https://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js',
                        function () { 
                            loadScript('js/modernizr-2.8.3.min.js',
                                 function () { 
                                    loadScript('js/pandaweb.min.js',
                                        function(){ 
                                            loadScript('https://blueimp.github.io/Gallery/js/jquery.blueimp-gallery.min.js', 
                                                function () {
                                                    loadScript('js/bootstrap-image-gallery.min.js')
                                                }
                                            )
                                        }
                                    )
                                }
                            )
                        }
                    )
                }
            )
        }
    );