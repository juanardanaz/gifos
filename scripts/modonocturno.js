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
            cambioIconoLupa();
            cambioLogoFacebook();
            cambioLogoTwitter();
            cambioLogoInstagram();
            cambioSliderPrevio();
            cambioSliderSiguiente();
        } else {
            localStorage.setItem('oscuro', 'false');
            bdark.innerHTML = "Modo Nocturno";
            cambioLogos();
            cambioIconoCrearGifo();
            cambioIconoLupa();
            cambioLogoFacebook();
            cambioLogoTwitter();
            cambioLogoInstagram();
            cambioSliderPrevio();
            cambioSliderSiguiente();
        }
    });

    //Obtenemos el modo actual
    if(localStorage.getItem('oscuro') === 'true') {
        document.body.classList.add("darkmode");
        bdark.innerHTML = "Modo Diurno";
        cambioLogos();
        cambioIconoCrearGifo();
        cambioIconoLupa();
        cambioLogoFacebook();
        cambioLogoTwitter();
        cambioLogoInstagram();
        cambioSliderPrevio();
        cambioSliderSiguiente();
    } else {
        document.body.classList.remove("darkmode");
        bdark.innerHTML = "Modo Nocturno";
        cambioLogos();
        cambioIconoCrearGifo();
        cambioIconoLupa();
        cambioLogoFacebook();
        cambioLogoTwitter();
        cambioLogoInstagram();
        cambioSliderPrevio();
        cambioSliderSiguiente();
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
            cambioIconoLupaMobile();
            cambioLogoFacebookMobile();
            cambioLogoTwitterMobile();
            cambioLogoInstagramMobile();
            cambioSliderPrevioMobile();
            cambioSliderSiguienteMobile();
        } else {
            localStorage.setItem('oscuro', 'false');
            mobileDark.innerHTML = "Modo Nocturno";
            cambioLogosMobile();
            cambioIconoCrearGifoMobile();
            cambioIconoLupaMobile();
            cambioLogoFacebookMobile();
            cambioLogoTwitterMobile();
            cambioLogoInstagramMobile();
            cambioSliderPrevioMobile();
            cambioSliderSiguienteMobile();
        }
    });

    //Obtenemos el modo actual
    if(localStorage.getItem('oscuro') === 'true') {
        document.body.classList.add("darkmode");
        mobileDark.innerHTML = "Modo Diurno";
        cambioLogosMobile();
        cambioIconoCrearGifoMobile();
        cambioIconoLupaMobile();
        cambioLogoFacebookMobile();
        cambioLogoTwitterMobile();
        cambioLogoInstagramMobile();
        cambioSliderPrevioMobile();
        cambioSliderSiguienteMobile();
    } else {
        document.body.classList.remove("darkmode");
        mobileDark.innerHTML = "Modo Nocturno";
        cambioLogosMobile();
        cambioIconoCrearGifoMobile();
        cambioIconoLupaMobile();
        cambioLogoFacebookMobile();
        cambioLogoTwitterMobile();
        cambioLogoInstagramMobile();
        cambioSliderPrevioMobile();
        cambioSliderSiguienteMobile();
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

    //Cambio de icono lupa
    function cambioIconoLupa() {
        let iconoLupa = document.querySelector('.icon-search');

        if (bdark.innerHTML == "Modo Nocturno") {
            iconoLupa.setAttribute('src', './img/icon-search.svg');
        } else {
            iconoLupa.setAttribute('src', './img/icon-search-mod-noc.svg');
        }
    }

    //Cambio iconos slider Previo
    function cambioSliderPrevio() {
        let iconoSlidePrevio = document.querySelector('.boton-previo-normal');
        let iconoSlidePrevioHover = document.querySelector('.boton-previo-hover');

        if (bdark.innerHTML == "Modo Nocturno") {
            iconoSlidePrevio.setAttribute('src', './img/button-slider-left.svg');
            iconoSlidePrevioHover.setAttribute('src', './img/button-slider-left-hover.svg');
        } else {
            iconoSlidePrevio.setAttribute('src', './img/button-slider-left-md-noct.svg');
            iconoSlidePrevioHover.setAttribute('src', './img/button-slider-left-hover.svg');
        }
    }

    //Cambio iconos slider Siguiente
    function cambioSliderSiguiente() {
        let iconoSliderSiguiente = document.querySelector('.boton-siguiente-normal');
        let iconoSliderSiguienteHover = document.querySelector('.boton-siguiente-hover');

        if (bdark.innerHTML == "Modo Nocturno") {
            iconoSliderSiguiente.setAttribute('src', './img/Button-Slider-right.svg');
            iconoSliderSiguienteHover.setAttribute('src', './img/Button-Slider-right-hover.svg');
        } else {
            iconoSliderSiguiente.setAttribute('src', './img/button-slider-right-md-noct.svg');
            iconoSliderSiguienteHover.setAttribute('src', './img/Button-Slider-right-hover.svg');
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

    //Cambio de icono lupa MOBILE
    function cambioIconoLupaMobile() {
        let iconoLupa = document.querySelector('.icon-search');

        if (mobileDark.innerHTML == "Modo Nocturno") {
            iconoLupa.setAttribute('src', './img/icon-search.svg');
        } else {
            iconoLupa.setAttribute('src', './img/icon-search-mod-noc.svg');
        }
    }

    //Cambio iconos slider Previo MOBILE
    function cambioSliderPrevioMobile() {
        let iconoSlidePrevio = document.querySelector('.boton-previo-normal');
        let iconoSlidePrevioHover = document.querySelector('.boton-previo-hover');

        if (mobileDark.innerHTML == "Modo Nocturno") {
            iconoSlidePrevio.setAttribute('src', './img/button-slider-left.svg');
            iconoSlidePrevioHover.setAttribute('src', './img/button-slider-left-hover.svg');
        } else {
            iconoSlidePrevio.setAttribute('src', './img/button-slider-left-md-noct.svg');
            iconoSlidePrevioHover.setAttribute('src', './img/button-slider-left-hover.svg');
        }
    }

    //Cambio iconos slider Siguiente MOBILE
    function cambioSliderSiguienteMobile() {
        let iconoSliderSiguiente = document.querySelector('.boton-siguiente-normal');
        let iconoSliderSiguienteHover = document.querySelector('.boton-siguiente-hover');

        if (mobileDark.innerHTML == "Modo Nocturno") {
            iconoSliderSiguiente.setAttribute('src', './img/Button-Slider-right.svg');
            iconoSliderSiguienteHover.setAttribute('src', './img/Button-Slider-right-hover.svg');
        } else {
            iconoSliderSiguiente.setAttribute('src', './img/button-slider-right-md-noct.svg');
            iconoSliderSiguienteHover.setAttribute('src', './img/Button-Slider-right-hover.svg');
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


}