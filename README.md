# Tarea DIW09, Práctica final. Creación de un sitio web
**Proyecto web basado en Bootstrap**
## Práctica creación de un sitio web

# sitio-web

Práctica realización sitio web mediante framework Bootstrap

## Introducción

La web tratará de un tema libre que deberá tener un mínimo de 4 páginas web donde figurarán entre otros los siguientes apartados:

    Presentación de empresa, asociación, etc.
    Página con los servicios, portfolio, actividades... según naturaleza del sitio web.
    Formulario de contacto con al menos los siguientes campos: nombre, teléfono de contacto, email, mensaje.
    Multimedia con al menos un video y 10 imágenes.
    Acceso a redes sociales
    Menú de navegación de un máximo de 2 niveles.
    Enlace a un doc en algún lugar visible de la página donde aparezcan detallados los recursos técnicos utilizados:
        Fuentes google utilizadas
        Paleta de colores
        Framework CSS...

## Diseño

    Uso de una paleta de colores.
    Consistencia en el diseño de cada página del sitio.
    Uso de fuentes según Google Fonts.
    Es obligatorio usar less para el diseño.
    Diseño responsivo de toda la página: video, menú, imágenes, texto...
    Uso de media queries o código en servidor para que la página se visualice en al menos 3 perfiles de dispositivos diferentes (movil, tablet y PC). El viewport deberá ser de la anchura del dispositivo.
    Criterio mobile first.
    Se deben utilizar un conjunto de iconos para mejorar la estética general de la página (por ej. iconos de facebook, google+ o similar). Se puede utilizar una librería ya existente como http://fortawesome.github.io/Font-Awesome/ o utilizar una propia.
    Se valorará utilizar algún plugin de jQuery para hacer un slider en la cabecera de las páginas, mostrar las fotos a tamaño superior, uso de un mapa de Google, etc.

## Tiempo de carga

    Las imágenes deberán estar en la resolución mínima necesaria.
    Las imágenes tendrán que estar optimizadas para la resolución proporcionada.
    Los css y js tendrán que estar minified y minimizando el número de http requests para la versión de producción.
    El html tendrá que estar minified para la versión de producción.
    Se debe valorar el uso de algún CDN.
    Se comprobará el desarrollo correcto de este área mediante Google PageSpeed.
    Uso de sprites para los iconos del sitio web

## Código

    El sitio web deberá tener una estructura clara y concisa.
    El código html estará minified en producción.
    El código css y js estará minified en producción.
    Se valorará el uso de soluciones como normalize.css, modernizr, y en general cualquier otra solución que aparece en html boilerplate
    Todo el código css y js deberá ir en ficheros externos (nunca en el html)
    Se minimizará el número de accesos a ficheros css y js externos, pudiendose valorar el uso de CDNs
    Se validará el código según la W3C.
    En la documentación se incluirá un diario con los cambios que se van haciendo. Se valorará y mucho el uso de un sistema de control de versiones git (github...). Adjuntar el enlace del repositorio público.

## Calificación

    Por realizar las 4 páginas con lo vídeos e imágenes que se piden (responsivos) y menú hasta 4 puntos.
    Por realizar un diseño bonito cuidando contraste, color, diseño responsivo, usable, accesible, consistente y persistente hasta 2 puntos.
    Acceso a redes sociales (iconos) y sprites hasta 0,5 puntos.
    Adicción de plugins jquery (pueden ser elementos de bootstrap) hasta 0,5 puntos.
    Fuentes de google o font awesome hasta 0,5 puntos.
    Método de personalización de la página (CSS, tema de bootstrap, modificación de less) hasta 0,5 puntos. Cuenta más modificar less.
    Compatibilidad con modernizr y boilerplate hasta 0,25 puntos.
    Imágenes optimizadas hasta 0,25 puntos.
    Html, css, js minificados y velocidad comprobada en pagespeed. 0,25
    Documentación de todo lo realizado hasta 1,25 puntos. (Justificación de todos los apartados anteriores, decisiones de diseño, pasos de instalación, elementos extra... ) Es conveniente hacer una buena documentación para que el profesor no tenga que hacer preguntas muy difíciles cuando presenteis la práctica.






# He elegido tomar de base el proyecto **Themestrap**

**Themestrap** is a simple starter kit for constructing Twitter Bootstrap 3+ themes. It provides the skeleton
for a simple, maintainable theme that always uses code directly from Bootstrap with as little replacement as
possible.

## Themestrap's Philosophy

1. A theme should be built *on top* of the framework, with as little intrusive change as possible.
2. As the framework evolves, a theme should be easily updated to the latest version.

To this end, Themestrap provides you with two simple files to modify: **variables.less**
and **theme.less** (both in the `less` directory). You can tweak any and all of the Bootstrap variables 
in **variables.less** and support any additional code or classes you'd like in **theme.less**. The compiled
theme CSS includes the Bootstrap library and will automatically pick up any overrides from variables.

## Creating a Theme with Themestrap

To create a theme, first start by cloning the Themestrap repository into a directory named for
your theme. We recommend a `bootstrap-theme-THEME_NAME` naming scheme:

    git clone https://github.com/divshot/themestrap.git bootstrap-theme-THEME_NAME
    
Next, you should open `bower.json` and change the package name from `bootstrap-theme-themestrap`
to match what you want your theme to be named. Now you're ready to install dependencies using
[Grunt](http://gruntjs.com) and [Bower](https://github.com/bower/bower) (you must have these
installed).

    npm install
    bower install
    
Now you're ready to go! Simply edit `less/variables.less` and `less/theme.less` to your liking.
When you're ready, just run `grunt` and it will compile and minify the distribution for you.
You can also run `grunt watch` to automatically compile as you work.

## Testing Out Your Theme

We've provided a "Bootstrap Kitchen Sink" HTML file at `examples/kitchen-sink.html` that contains
all of the various components in all of their variations. It may not be 100% exhaustive but it
should give you a good idea of what your theme will look like at a glance.

You can start a development server at `http://localhost:8000` by running `grunt serve`. Your theme will automatically compile while the server is running.

## Deeper Customization

In cases where you need to do a more in-depth overhaul of a portion of Bootstrap's LESS, you may do so by
simply copying over a file from Bootstrap's `less` directory into your theme's `less` directory and then
modifying it as necessary. Example:

    cp bower_components/bootstrap/less/alerts.less less/alerts.less

Because it takes path priority over the Bower-installed Bootstrap LESS, it will automatically override the 
Bootstrap default. In fact, this is how `variables.less` works already...delete it and the default Bootstrap
variables will be back in play.

## Releasing Your Theme

Before you release your theme, you should do a few things:

1. Make sure that you've updated the package name in `bower.json` and filled out your name, the theme name and GitHub repo info
2. Check the `index.html` file – it is generated using the information you supplied in `bower.json`.  To change it to suit your needs, edit the template `/pages/index.html`.
3. Update the `README.md` file to be about your theme

Once you've done that, you should push it up to GitHub. The repository
is already designed to be released directly onto GitHub Pages without an additional intermediary,
so if you push to the `gh-pages` branch you should have a nice way to show off your theme!

Also consider [registering a Bower package](https://github.com/bower/bower#registering-packages).
If you do, remove the `"private": true` property from `bower.json`.

## The Themestrap Gallery

We've created a [gallery of themes built with Themestrap](http://code.divshot.com/themestrap). If you
have created a theme and want to add it to the gallery, just make a pull request to the [gh-pages](https://github.com/divshot/themestrap/tree/gh-pages)
branch of this repository.

## Copyright and license

Copyright 2013 Divshot, Inc. under [the Apache 2.0 license](LICENSE).# 

DIW09
