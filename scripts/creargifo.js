window.onload = () => {
    //MODO NOCTURNO
    //MODO NOCTURNO DESKTOP 
    const bdark = document.getElementById("bdark");
    bdark.addEventListener('click', () => {
        document.body.classList.toggle("darkmode");

        //Guardamos el modo en LocalStorage
        if(document.body.classList.contains('darkmode')){
            localStorage.setItem('oscuro', 'true');
            bdark.innerHTML = "Modo Diurno";
            cambioLogos();
            cambioIconoCrearGifo();
            cambioLogoFacebook();
            cambioLogoTwitter();
            cambioLogoInstagram();
        } else {
            localStorage.setItem('oscuro', 'false');
            bdark.innerHTML = "Modo Nocturno";
            cambioLogos();
            cambioIconoCrearGifo();
            cambioLogoFacebook();
            cambioLogoTwitter();
            cambioLogoInstagram();
        }
    });

    //Obtenemos el modo actual
    if(localStorage.getItem('oscuro') === 'true') {
        document.body.classList.add("darkmode");
        bdark.innerHTML = "Modo Diurno";
        cambioLogos();
        cambioIconoCrearGifo();
        cambioLogoFacebook();
        cambioLogoTwitter();
        cambioLogoInstagram();
    } else {
        document.body.classList.remove("darkmode");
        bdark.innerHTML = "Modo Nocturno";
        cambioLogos();
        cambioIconoCrearGifo();
        cambioLogoFacebook();
        cambioLogoTwitter();
        cambioLogoInstagram();
    };

    //MODO NOCTURNO MOBILE 
    const mobileDark = document.getElementById("mobileDark");
    mobileDark.addEventListener('click', () => {
        document.body.classList.toggle("darkmode");

        //Guardamos el modo en LocalStorage
        if(document.body.classList.contains('darkmode')){
            localStorage.setItem('oscuro', 'true');
            mobileDark.innerHTML = "Modo Diurno";
            cambioLogosMobile();
            cambioIconoCrearGifoMobile();
            cambioLogoFacebookMobile();
            cambioLogoTwitterMobile();
            cambioLogoInstagramMobile();
        } else {
            localStorage.setItem('oscuro', 'false');
            mobileDark.innerHTML = "Modo Nocturno";
            cambioLogosMobile();
            cambioIconoCrearGifoMobile();
            cambioLogoFacebookMobile();
            cambioLogoTwitterMobile();
            cambioLogoInstagramMobile();
        }
    });

    //Obtenemos el modo actual
    if(localStorage.getItem('oscuro') === 'true') {
        document.body.classList.add("darkmode");
        mobileDark.innerHTML = "Modo Diurno";
        cambioLogosMobile();
        cambioIconoCrearGifoMobile();
        cambioLogoFacebookMobile();
        cambioLogoTwitterMobile();
        cambioLogoInstagramMobile();
    } else {
        document.body.classList.remove("darkmode");
        mobileDark.innerHTML = "Modo Nocturno";
        cambioLogosMobile();
        cambioIconoCrearGifoMobile();
        cambioLogoFacebookMobile();
        cambioLogoTwitterMobile();
        cambioLogoInstagramMobile();
    };

    //Cambio DESKTOP
    //Cambio de logo Desktop GIFOS
    function cambioLogos() {
        let logoDesktop = document.getElementById("logoDesktop");
    
        if (bdark.innerHTML == "Modo Nocturno") {
            logoDesktop.setAttribute('src', './img/logo-desktop.svg');
        } else {
            logoDesktop.setAttribute('src', './img/Logo-modo-noc.svg');
        }
    }
    
    //Cambio de icono crear Gifs
    function cambioIconoCrearGifo() {
        let iconoCrearGifo = document.querySelector('.boton-crear-violeta');
        let iconoCrearGifoHover = document.querySelector('.boton-crear-blanco');

        if (bdark.innerHTML == "Modo Nocturno") {
            iconoCrearGifo.setAttribute('src', './img/button-crear-gifo.svg');
            iconoCrearGifoHover.setAttribute('src', './img/CTA-crear-gifo-hover.svg');
        } else {
            iconoCrearGifo.setAttribute('src', './img/CTA-crear-gifo-modo-noc.svg');
            iconoCrearGifoHover.setAttribute('src', './img/CTA-crear-gifo-hover-modo-noc.svg');
        }
    }

    //Cambio de red social Facebook
    function cambioLogoFacebook() {
        let logoFacebook = document.getElementById('facebook');
        let logoFacebookHover = document.getElementById('facebook-hover');

        if (bdark.innerHTML == "Modo Nocturno") {
            logoFacebook.setAttribute('src', './img/icon_facebook.svg');
            logoFacebookHover.setAttribute('src', './img/icon_facebook_hover.svg');
        } else {
            logoFacebook.setAttribute('src', './img/icon_facebook.svg');
            logoFacebookHover.setAttribute('src', './img/icon_facebook_noc.svg');
        }
    }

    //Cambio de red social Twitter
    function cambioLogoTwitter() {
        let logoTwitter = document.getElementById('twitter');
        let logoTwitterHover = document.getElementById('twitter-hover');

        if (bdark.innerHTML == "Modo Nocturno") {
            logoTwitter.setAttribute('src', './img/icon-twitter.svg');
            logoTwitterHover.setAttribute('src', './img/icon-twitter-hover.svg');
        } else {
            logoTwitter.setAttribute('src', './img/icon-twitter.svg');
            logoTwitterHover.setAttribute('src', './img/icon_twitter_noc.svg');
        }
    }

    //Cambio de red social Instagram
    function cambioLogoInstagram() {
        let logoInstagram = document.getElementById('instagram');
        let logoInstagramHover = document.getElementById('instagram-hover');

        if (bdark.innerHTML == "Modo Nocturno") {
            logoInstagram.setAttribute('src', './img/icon_instagram.svg');
            logoInstagramHover.setAttribute('src', './img/icon_instagram-hover.svg');
        } else {
            logoInstagram.setAttribute('src', './img/icon_instagram.svg');
            logoInstagramHover.setAttribute('src', './img/icon_instagram_noc.svg');
        }
    }

    //Cambio MOBILE
    //Cambio de logo Desktop GIFOS MOBILE
    function cambioLogosMobile() {
        let logoDesktop = document.getElementById("logoDesktop");
    
        if (mobileDark.innerHTML == "Modo Nocturno") {
            logoDesktop.setAttribute('src', './img/logo-desktop.svg');
        } else {
            logoDesktop.setAttribute('src', './img/Logo-modo-noc.svg');
        }
    }
    
    //Cambio de icono crear Gifs MOBILE
    function cambioIconoCrearGifoMobile() {
        let iconoCrearGifo = document.querySelector('.boton-crear-violeta');
        let iconoCrearGifoHover = document.querySelector('.boton-crear-blanco');

        if (mobileDark.innerHTML == "Modo Nocturno") {
            iconoCrearGifo.setAttribute('src', './img/button-crear-gifo.svg');
            iconoCrearGifoHover.setAttribute('src', './img/CTA-crear-gifo-hover.svg');
        } else {
            iconoCrearGifo.setAttribute('src', './img/CTA-crear-gifo-modo-noc.svg');
            iconoCrearGifoHover.setAttribute('src', './img/CTA-crear-gifo-hover-modo-noc.svg');
        }
    }

    //Cambio de red social Facebook MOBILE
    function cambioLogoFacebookMobile() {
        let logoFacebook = document.getElementById('facebook');
        let logoFacebookHover = document.getElementById('facebook-hover');

        if (mobileDark.innerHTML == "Modo Nocturno") {
            logoFacebook.setAttribute('src', './img/icon_facebook.svg');
            logoFacebookHover.setAttribute('src', './img/icon_facebook_hover.svg');
        } else {
            logoFacebook.setAttribute('src', './img/icon_facebook.svg');
            logoFacebookHover.setAttribute('src', './img/icon_facebook_noc.svg');
        }
    }

    //Cambio de red social Twitter MOBILE
    function cambioLogoTwitterMobile() {
        let logoTwitter = document.getElementById('twitter');
        let logoTwitterHover = document.getElementById('twitter-hover');

        if (mobileDark.innerHTML == "Modo Nocturno") {
            logoTwitter.setAttribute('src', './img/icon-twitter.svg');
            logoTwitterHover.setAttribute('src', './img/icon-twitter-hover.svg');
        } else {
            logoTwitter.setAttribute('src', './img/icon-twitter.svg');
            logoTwitterHover.setAttribute('src', './img/icon_twitter_noc.svg');
        }
    }

    //Cambio de red social Instagram MOBILE
    function cambioLogoInstagramMobile() {
        let logoInstagram = document.getElementById('instagram');
        let logoInstagramHover = document.getElementById('instagram-hover');

        if (mobileDark.innerHTML == "Modo Nocturno") {
            logoInstagram.setAttribute('src', './img/icon_instagram.svg');
            logoInstagramHover.setAttribute('src', './img/icon_instagram-hover.svg');
        } else {
            logoInstagram.setAttribute('src', './img/icon_instagram.svg');
            logoInstagramHover.setAttribute('src', './img/icon_instagram_noc.svg');
        }
    }

    //CREAR TU PROPIO GIFO
    //Capturo elementos generales
    let apiKey = 'eGTgEy8j7cI5AWF5SU1DcOTTbvsu0rLy'
    let botonComenzar = document.getElementById('boton-creargifo-comenzar');
    let botonGrabar = document.getElementById('boton-creargifo-grabar');
    let botonFinalizar = document.getElementById('boton-creargifo-finalizar');
    let botonSubirGifo = document.getElementById('boton-creargifo-subirgifo');
    let pasosCrearActivo = document.querySelectorAll('.creargifo-pasos');
    let contadorTimer = document.getElementById('contador-grabacion');
    let repetirCaptura = document.getElementById('contador-repetircaptura');
    let overlayGifCargando = document.getElementById('overlay-video');
    let iconoGifCargando = document.getElementById('overlay-video-icon');
    let textoGifCargando = document.getElementById('overlay-video-parrafo');
    let accionesCargando = document.getElementById('overlay-video-actions');
    let overlayActions = document.getElementById('overlay-video-actions');
    let recorder; //Para comenzar a interactuar con la librería, creo Recorder
    let blob;      //Un blob es una manera de guardar datos
    let dateStarted;
    let form = new FormData(); //Es un objeto que permite darle formato clave valor a la información para enviarla de manera ordenada a través de body de un POST
    let misGifosArray = [];
    let misGifosString = localStorage.getItem("misGifos");
    let video = document.getElementById('grabacion-video');
    let gifGrabado = document.getElementById('gif-grabado');




}