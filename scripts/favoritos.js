
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
            cambioSliderPrevio();
            cambioSliderSiguiente();
        } else {
            localStorage.setItem('oscuro', 'false');
            bdark.innerHTML = "Modo Nocturno";
            cambioLogos();
            cambioIconoCrearGifo();
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

    //Cambio iconos slider Previo
    function cambioSliderPrevio() {
        let iconoSlidePrevio = document.querySelector('.boton-previo-normal');
        let iconoSlidePrevioHover = document.querySelector('.boton-previo-hover');

        if (bdark.innerHTML == "Modo Nocturno") {
            iconoSlidePrevio.setAttribute('src', './img/button-slider-left.svg');
            iconoSlidePrevioHover.setAttribute('src', './img/button-slider-left-hover.svg');
        } else {
            iconoSlidePrevio.setAttribute('src', './img/button-slider-left-md-noct.svg');
            iconoSlidePrevioHover.setAttribute('src', './img/button-slider-left-md-noct-hover.png');
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
            iconoSliderSiguienteHover.setAttribute('src', './img/button-slider-right-md-noct-hover.png');
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

    //SECCION TRENDING GIFS (imagen)
    //Defino variables y capturo elementos GENERAL
    let gifsFavoritos = document.getElementById('resultados-favoritos');
    let gifsVacio = document.getElementById('favoritos-vacio');
    gifsFavoritosArray = [];
    gifsFavoritosString = localStorage.getItem('favoritos');
    let apiKey = 'eGTgEy8j7cI5AWF5SU1DcOTTbvsu0rLy'
    let gifsList = document.getElementById('gifsList')
    let newItem
    let maxGifLayout = document.createElement('div');


    buscarFavoritos();
    //GIFOS EN FAVORTITOS
    function buscarFavoritos() {
        if (gifsFavoritosString == null || gifsFavoritosString == [] ) {
            // gifsVacio.style.display = "block";
            gifsFavoritos.style.display = "none";

        } else {
            gifsFavoritosArray = JSON.parse(gifsFavoritosString);
            let urlFavoritos = `https://api.giphy.com/v1/gifs?ids=${gifsFavoritosArray.toString()}&api_key=${apiKey}`;

            gifsFavoritos.style.display = "block";
            gifsVacio.style.display = "none";

            fetch(urlFavoritos)
                .then(response => response.json())
                .then(favoritos => {
                    renderFavoritos(favoritos);
                })
        }
    }

    function renderFavoritos(favoritos) { //Aqui se pintan en pantalla los gifs favoritos
        gifsFavoritosArray = favoritos.data;
        for (let i = 0; i < gifsFavoritosArray.length; i++) {
            // gifsFavoritos = document.createElement('li');
            gifsFavoritos.classList.add('listFavoritos');
            gifsFavoritos.innerHTML += 
                                `<div class="resultado-busqueda-gifos">
                                    <div class="overlay-acciones">
                                        <div class="gif-acciones">
                                            <button class="boton-accion-gif">
                                                <img src="./img/icon-fav.svg" alt="añadir favorito" id="boton-favorito${favoritos.data[i].id}" onclick="sumarFavoritoGif('${favoritos.data[i].id}')">
                                            </button>
                                            <button class="boton-accion-gif" >
                                                <img src="./img/icon-download.svg" alt="descargar" id="boton-descargar" onclick="descargarGifo('${favoritos.data[i].images.downsized.url}', '${favoritos.data[i].slug}')">
                                            </button>
                                            <button class="boton-accion-gif">
                                                <img src="./img/icon-max-normal.svg" alt="maximizar imagen" id="boton-maximizar" onclick="maximGif('${favoritos.data[i].images.downsized.url}', '${favoritos.data[i].id}', '${favoritos.data[i].slug}', '${favoritos.data[i].username}', '${favoritos.data[i].title}')">
                                            </button>
                                        </div>
                                        <div class="informacion-gif-resultados">
                                            <p class="usuario-gif">${favoritos.data[i].username}</p>
                                            <p class="titulo-gif">${favoritos.data[i].title}</p>
                                        </div>
                                    </div>
                                    <img src="${favoritos.data[i].images.original.url}" class="listItem__image"/>
                                </div>`;
            // gifsFavoritosArray.appendChild(gifsFavoritos);
        }
    }

    //SECCION TRENDING GIFS (imagen)
    async function getTrendingGifs() { //Aqui van los gifs trending topic del momento
        let response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=12&rating=g`)
        response = await response.json()
        renderTrendingGifs(response.data)
    }

    function renderTrendingGifs(trendingGifs) { //Aqui se pintan en pantalla los gifs trending topic del momento
        gifsList.innerHTML = ''
        for (let i = 0; i < trendingGifs.length; i++) {
            newItem = document.createElement('div')
            newItem.classList.add('listItem')
            newItem.innerHTML = 
                                `<div class="resultado-busqueda-gifos">
                                    <div class="overlay-acciones">
                                        <div class="gif-acciones">
                                            <button class="boton-accion-gif">
                                                <img src="./img/icon-fav.svg" alt="añadir favorito" id="boton-favorito${trendingGifs[i].id}" onclick="sumarFavoritoGif('${trendingGifs[i].id}')">
                                            </button>
                                            <button class="boton-accion-gif" >
                                                <img src="./img/icon-download.svg" alt="descargar" id="boton-descargar" onclick="descargarGifo('${trendingGifs[i].images.downsized.url}', '${trendingGifs[i].slug}')">
                                            </button>
                                            <button class="boton-accion-gif">
                                                <img src="./img/icon-max-normal.svg" alt="maximizar imagen" id="boton-maximizar" onclick="maximGif('${trendingGifs[i].images.downsized.url}', '${trendingGifs[i].id}', '${trendingGifs[i].slug}', '${trendingGifs[i].username}', '${trendingGifs[i].title}')">
                                            </button>
                                        </div>
                                        <div class="informacion-gif-resultados">
                                            <p class="usuario-gif">${trendingGifs[i].username}</p>
                                            <p class="titulo-gif">${trendingGifs[i].title}</p>
                                        </div>
                                    </div>
                                    <img src="${trendingGifs[i].images.original.url}" class="listItem__image" />
                                </div>`
            gifsList.appendChild(newItem)
        }
    }
    getTrendingGifs();

    //DESCARGAR GIF
    let botonDescargarGif = document.getElementById('boton-descargar');
    function descargarGifo(url, filename){
            fetch(url).then(
                (response) => {
                    return response.blob().then( 
                    (response) => {
                        let gifoDescarga = document.createElement('a')
                        gifoDescarga.href = URL.createObjectURL(response)
                        gifoDescarga.setAttribute('download', filename);
                        gifoDescarga.click();
                    }
                )
            }
        )
    }

    //MAXIMIZAR GIF  
    function maximGif(images, id, username, title, slug) {
    maxGifLayout.style.display = 'block';
    maxGifLayout.innerHTML = `
    <div><img src="./img/close.svg" alt="icono cierre ventana" class="cierre-ventana-max" onclick="cierreVentanaMax()"></div>
    <div class="container-max-gral">
            <div><img src="./img/button-slider-left.svg" alt="boton-previo" id="botonPrevioMax"></div>
            <div><img src="${images}" alt="${id}" class="imagen-max-gif"></div>
            <div><img src="./img/Button-Slider-right.svg" alt="boton-siguiente" id="botonSigMax"></div>
    </div>
    <div class="info-acciones">
        <div class="informacion-gif-resultados">
            <p class="usuario-gif">${username}</p>
            <p class="titulo-gif">${title}</p>
        </div> 
        <div class="acciones-max-gif">
            <div><img src="./img/icon-fav.svg" alt="favorito icono"></div>
            <div onclick="descargarGifo('${images}', '${slug}')"><img src="./img/icon-download.svg" alt="icono descargar" class="descarga-max-gif"></div>
        </div>
    </div>
    `;
    maxGifLayout.classList.add("containerMaxGif");
    document.body.appendChild(maxGifLayout);
    }

    //Cerrar Ventana en Maximizar Gif 
    function cierreVentanaMax() {
    maxGifLayout.style.display = 'none';
    }


    //TRENDING SLIDER GIFS 
    //Los trending gif que aparecen abajo se mueven de IZQ a DER segun la flecha seleccionada
    let sliderTrendingGifos = document.getElementById('gifsList');
    let imagenPlacaGifo = 1;
    let translateX = 0;

    let trendingBotonPrev = document.getElementById('slide-boton-previo');
    let trendingBotonNext = document.getElementById('slide-boton-siguiente');

    trendingBotonNext.addEventListener('click', sliderNext);
    function sliderNext() {
        if (imagenPlacaGifo <= 8) {
                imagenPlacaGifo++;
                translateX -= 387;
                sliderTrendingGifos.style.transform = `translateX(${translateX}px)`;
            }
        else  {
            if (imagenPlacaGifo <= 8) {
                imagenPlacaGifo++;
                translateX -= 273;
                sliderTrendingGifos.style.transform = `translateX(${translateX}px)`;
            }
        }
    }

    trendingBotonPrev.addEventListener('click', sliderPrev);
    function sliderPrev() {
            if (imagenPlacaGifo !== 1) {
                imagenPlacaGifo--;
                translateX += 387;
                sliderTrendingGifos.style.transform = `translateX(${translateX}px)`;
            }
        else  {
            if (imagenPlacaGifo !== 1) {
                imagenPlacaGifo--;
                translateX += 273;
                sliderTrendingGifos.style.transform = `translateX(${translateX}px)`;
            }
        }
    }



