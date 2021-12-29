
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
            cambioCruzBusqueda();
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
            cambioCruzBusqueda();
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
        cambioCruzBusqueda();
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
        cambioCruzBusqueda();
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
            cambioCruzBusquedaMobile();
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
            cambioCruzBusquedaMobile();
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
        cambioCruzBusquedaMobile();
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
        cambioCruzBusquedaMobile();
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

    //Cambio Cruz Barra Busqueda
    function cambioCruzBusqueda(){
    let cruzCierreBusqueda = document.getElementById('cierre busqueda');
        if (bdark.innerHTML == "Modo Nocturno") {
            cruzCierreBusqueda.setAttribute('src', './img/close.svg');
        } else {
            cruzCierreBusqueda.setAttribute('src', './img/close-modo-noct.svg');
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

    //Cambio Cruz Barra Busqueda MOBILE
    function cambioCruzBusquedaMobile() {
        let cruzCierreBusqueda = document.getElementById('cierre busqueda');
            if (mobileDark.innerHTML == "Modo Nocturno") {
                cruzCierreBusqueda.setAttribute('src', './img/close.svg');
            } else {
                cruzCierreBusqueda.setAttribute('src', './img/close-modo-noct.svg');
            }
        }

    //Defino variables y capturo elementos GENERAL
    let apiKey = 'eGTgEy8j7cI5AWF5SU1DcOTTbvsu0rLy'
    let gifsList = document.getElementById('gifsList')
    let newItem
    let searchTerm = document.getElementById('searchTerm')
    let search = document.getElementById('search')
    let suggestions = document.getElementById('suggestions')
    let rtaBusquedaGifos = document.getElementById('respuesta-busqueda-gifos')
    let trendingTopicTexto = document.getElementById('trending-text')
    let cruzCierreBusqueda = document.getElementById('cierre busqueda')
    let botonVerMas = document.getElementById('boton-vermas')
    let tituloBusqueda = document.getElementById('titulo-busqueda')
    let barraDivisoriaBusqueda = document.getElementById('barra-divisoria') 
    let barraDivisoriaGifos = document.getElementById('barra-divisoria-gifos')
    let maxGifLayout = document.createElement('div');
    let lupaBarraInput = document.getElementById('lupa-input-busqueda');
    let traerMasGifs = 0;
    let gifsFavoritosArray = [];
    let gifsFavoritosString = localStorage.getItem('favoritos');

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

    //SECCION TRENDING TOPIC (texto)
    //Muestro los top 5 de trending topics en gifs
    function palabrasTrending() {
        let url = `https://api.giphy.com/v1/trending/searches?api_key=${apiKey}`;
        fetch(url)
            .then(r => r.json())
            .then((response) => {
                // let trendingTopicTexto = document.getElementById('trending-text')
                for (i = 0; i < 5; i++) {
                    let linkTrending = document.createElement('div');
                    let trending = `<div class="palabraTrend" onclick="buscarPalabra('${response.data[i]}')">${response.data[i]}</div>`;
                    linkTrending.innerHTML = trending;
                    trendingTopicTexto.appendChild(linkTrending);
                }
            })
    };
    palabrasTrending();

    function buscarPalabra(value) {
        getSearchedGifs(value);
    }


    //BARRA DE BUSQUEDA de Gifos
    async function getSuggestions () { //Aqui van las sugerencias en la barra de busqueda, listado que se expande
        let response = await fetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=${apiKey}&q=${searchTerm.value}&limit=4&offset=5`)
        response = await response.json()
        renderSuggestions(response.data)
    }

    searchTerm.addEventListener('keypress', () => {
        getSuggestions()
    })

    function renderSuggestions(suggestion) { //Aqui se pintan en pantalla el listado de las sugerencias en la barra de busqueda
        suggestions.innerHTML = ''
        for (let i = 0; i < suggestion.length; i++) {
            let newItem = document.createElement('li')
            newItem.classList.add('listSuggestions')
            newItem.innerHTML = `<span><img src="./img/icon-search-grey.png" alt="icono-lupa" class="lupa-sugerencia-busqueda">${suggestion[i].name}</span>`
            lupaBarraInput.style.display = "block";
            search.style.display = "none";
            cruzCierreBusqueda.style.display = "block";
            barraDivisoriaBusqueda.style.display = "block"
            suggestions.appendChild(newItem)

            newItem.addEventListener('click', (e) => {
                searchTerm.value = newItem.textContent
                suggestions.innerHTML = ''
                search.style.display = "block";
                cruzCierreBusqueda.style.display = "none";
                barraDivisoriaBusqueda.style.display = "none";
                lupaBarraInput.style.display = "none";
                getSearchedGifs()
            })
        }
    }

    async function getSearchedGifs () { //Aqui se buscan los gifs en la barra de busqueda
        let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm.value}&limit=12&offset=0&rating=g&lang=en`)
        response = await response.json()
        // renderSearchedGifs(response.data)
    
        //Aqui aclaro por si la busqueda da ERROR 
        if (response.data == 0 || response.data == null) {
            rtaBusquedaGifos.innerHTML = `
                <div class="container-error">
                    <img src="./img/icon-busqueda-sin-resultado.svg" alt="error de busqueda" class="imagen-error-busqueda">
                    <p class="texto-error-busqueda">Intenta con otra búsqueda</p>
                </div>`;
            botonVerMas.style.display = "none";
            tituloBusqueda.innerHTML = searchTerm.value;
            barraDivisoriaGifos.style.display = "block";
        } else {
            renderSearchedGifs(response.data)
        }
    
    }

    function renderSearchedGifs(searchgGifs) { //Aqui se pintan en pantalla los resultados de la barra de busqueda
        rtaBusquedaGifos.innerHTML = ''
        for (let i = 0; i < searchgGifs.length; i++) {
            newItem = document.createElement('li');
            newItem.classList.add('listItem');
            newItem.innerHTML = `<div class="resultado-busqueda-gifos">
                                    <div class="overlay-acciones">
                                        <div class="gif-acciones">
                                            <button class="boton-accion-gif">
                                                <img src="./img/icon-fav.svg" alt="añadir favorito" id="boton-favorito${searchgGifs[i].id}" onclick="sumarFavoritoGif('${searchgGifs[i].id}')">
                                            </button>
                                            <button class="boton-accion-gif" >
                                                <img src="./img/icon-download.svg" alt="descargar" id="boton-descargar" onclick="descargarGifo('${searchgGifs[i].images.downsized.url}', '${searchgGifs[i].slug}')">
                                            </button>
                                            <button class="boton-accion-gif">
                                                <img src="./img/icon-max-normal.svg" alt="maximizar imagen" id="boton-maximizar" onclick="maximGif('${searchgGifs[i].images.downsized.url}', '${searchgGifs[i].id}', '${searchgGifs[i].slug}', '${searchgGifs[i].username}', '${searchgGifs[i].title}')">
                                            </button>
                                        </div>
                                        <div class="informacion-gif-resultados">
                                            <p class="usuario-gif">${searchgGifs[i].username}</p>
                                            <p class="titulo-gif">${searchgGifs[i].title}</p>
                                        </div>
                                    </div>
                                    <img src="${searchgGifs[i].images.original.url}" class="listItem__image"/>
                                </div>`;
            tituloBusqueda.innerHTML = searchTerm.value;
            barraDivisoriaGifos.style.display = "block";
            botonVerMas.style.display = "block";
            suggestions.innerHTML = '';
            search.style.display = "block";
            cruzCierreBusqueda.style.display = "none";
            barraDivisoriaBusqueda.style.display = "none";
            lupaBarraInput.style.display = "none";
            rtaBusquedaGifos.appendChild(newItem);
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

    //AGREGAR GIF A FAVORITOS
    // let gifsFavoritosString;
    function sumarFavoritoGif(id){
        let iconFavorito = document.getElementById('boton-favorito'+ id);
        iconFavorito.setAttribute('src', './img/icon-fav-active.svg');
        sumarFavorito(id);
    }

    function sumarFavorito(id){
        if (gifsFavoritosString == null) {
            gifsFavoritosArray = [];
        } else {
            gifsFavoritosArray = JSON.parse(gifsFavoritosString);
        }
        gifsFavoritosArray.push(id);
        gifsFavoritosString = JSON.stringify(gifsFavoritosArray);
        localStorage.setItem('favoritos', gifsFavoritosString)
    }

    //Cerrar Ventana en Maximizar Gif 
    function cierreVentanaMax() {
    maxGifLayout.style.display = 'none';
    }

    //ENTER EN BARRA BUSQUEDA
    search.addEventListener('click', getSearchedGifs);
    searchTerm.addEventListener('keyup', function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            getSearchedGifs();
        }
    });

    //LIMPIAR - BUSCADOR GIFOS
    cruzCierreBusqueda.addEventListener('click', borrarBusqueda);
    function borrarBusqueda() {
        searchTerm.value = "";
        searchTerm.placeholder = "Busca GIFOS y más";
        search.style.display = "block";
        cruzCierreBusqueda.style.display = "none";
        barraDivisoriaBusqueda.style.display = "none";
        suggestions.style.display = "none";
        lupaBarraInput.style.display = "none";
}

//BOTON VER MAS RESULTADOS
botonVerMas.addEventListener('click', verMasGifs);
function verMasGifs(){
    traerMasGifs = traerMasGifs + 12;
    buscarMasGifs();
}

async function buscarMasGifs() { //Aqui se buscan mas gifs
    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm.value}&limit=12&offset=0&rating=g&lang=en`)
    response = await response.json();
    renderBuscarMas(response.data);
}

function renderBuscarMas(verMasGifs) { //Aqui se pintan en pantalla los resultados de ver mas
    // rtaBusquedaGifos.innerHTML = '';
    for (let i = 0; i < verMasGifs.length; i++) {
        newGifs = document.createElement('li');
        newGifs.classList.add('listItem');
        newGifs.innerHTML = `<div class="resultado-busqueda-gifos">
                                <div class="overlay-acciones">
                                    <div class="gif-acciones">
                                        <button class="boton-accion-gif">
                                            <img src="./img/icon-fav.svg" alt="añadir favorito" id="boton-favorito${verMasGifs[i].id}" onclick="sumarFavoritoGif('${verMasGifs[i].id}')">
                                        </button>
                                        <button class="boton-accion-gif" >
                                            <img src="./img/icon-download.svg" alt="descargar" id="boton-descargar" onclick="descargarGifo('${verMasGifs[i].images.downsized.url}', '${verMasGifs[i].slug}')">
                                        </button>
                                        <button class="boton-accion-gif">
                                            <img src="./img/icon-max-normal.svg" alt="maximizar imagen" id="boton-maximizar" onclick="maximGif('${verMasGifs[i].images.downsized.url}', '${verMasGifs[i].id}', '${verMasGifs[i].slug}', '${verMasGifs[i].username}', '${verMasGifs[i].title}')">
                                        </button>
                                    </div>
                                    <div class="informacion-gif-resultados">
                                        <p class="usuario-gif">${verMasGifs[i].username}</p>
                                        <p class="titulo-gif">${verMasGifs[i].title}</p>
                                    </div>
                                </div>
                                <img src="${verMasGifs[i].images.original.url}" class="listItem__image"/>
                            </div>`;
        rtaBusquedaGifos.appendChild(newGifs);
    }
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



