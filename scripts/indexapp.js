window.onload = () => {
    //MODO NOCTURNO
    //Cambio a Modo Nocturno General
    let bdark = document.getElementById("bdark");
    let modoNocturno = () => {
        let tema = localStorage.getItem("tema")
        if(tema == "oscuro"){
            document.body.classList.toggle("darkmode");
            bdark.innerHTML = "Modo Diurno";
            cambioLogos();
            cambioIconoCrearGifo();
            cambioIconoLupa();
            cambioLogoFacebook();
            cambioLogoTwitter();
            cambioLogoInstagram();
            cambioSliderPrevio();
            cambioSliderSiguiente();
            
        }
        else if (tema == "claro"){
            document.body.classList.remove("darkmode");
            bdark.innerHTML = "Modo Nocturno";
        }else{
            localStorage.setItem("tema", "claro")
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
    }

    bdark.addEventListener("click", () => {
        let tema = localStorage.getItem("tema")
        document.body.classList.toggle("darkmode");

        if(tema == "oscuro"){
            localStorage.setItem("tema", "claro")
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
        else if (tema == "claro"){
            localStorage.setItem("tema", "oscuro")
            bdark.innerHTML = "Modo Diurno";
            cambioLogos();
            cambioIconoCrearGifo();
            cambioIconoLupa();
            cambioLogoFacebook();
            cambioLogoTwitter();
            cambioLogoInstagram();
            cambioSliderPrevio();
            cambioSliderSiguiente();
            
        }
    })
    modoNocturno();

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

    //Defino variables y capturo elementos GENERAL
    let apiKey = 'eGTgEy8j7cI5AWF5SU1DcOTTbvsu0rLy'
    let gifsList = document.getElementById('gifsList')
    let newItem
    let searchTerm = document.getElementById('searchTerm')
    let search = document.getElementById('search')
    let suggestions = document.getElementById('suggestions')
    let rtaBusquedaGifos = document.getElementById('respuesta-busqueda-gifos')
    let trendingTopicTexto = document.getElementById('trending-text')

    //SECCION TRENDING GIFS (imagen)
    async function getTrendingGifs() { //Aqui van los gifs trending topic del momento
        let response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=12&rating=g`)
        response = await response.json()
        renderTrendingGifs(response.data)
    }

    function renderTrendingGifs(trendingGifs) { //Aqui se pintan en pantalla los gifs trending topic del momento
        gifsList.innerHTML = ''
        for (let i = 0; i < trendingGifs.length; i++) {
            newItem = document.createElement('li')
            newItem.classList.add('listItem')
            newItem.innerHTML = `<img src="${trendingGifs[i].images.original.url}" class="listItem__image" />`
            gifsList.appendChild(newItem)
        }
    }

    //SECCION TRENDING TOPIC (texto)
    //Muestro los top 5 de trending topics en gifs
    async function getTrendingText() { //Aqui van los gifs trending topic del momento
        let response = await fetch(`https://api.giphy.com/v1/trending/searches?api_key=${apiKey}`)
        response = await response.json()
        renderTrendingText(response.data)
    }

    function renderTrendingText(trendingText){
        trendingTopicTexto.innerHTML= '';
        for (let i = 0; i < trendingText.length; i++) {
            let newText = document.createElement('p')
            newText.classList.add('trendtext')
            newText.innerHTML = `<span class="trending-topics-link">${trendingText[0]}</span>
                                <span class="trending-topics-link">${trendingText[1]}</span>
                                <span class="trending-topics-link">${trendingText[2]}</span>
                                <span class="trending-topics-link">${trendingText[3]}</span>`
            trendingTopicTexto.appendChild(newText)
        }
    }

    getTrendingText()

    //BARRA DE BUSQUEDA de Gifos
    async function getSuggestions () { //Aqui van las sugerencias en la barra de busqueda, listado que se expande
        let response = await fetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=${apiKey}&q=${searchTerm.value}&limit=4&offset=5`)
        response = await response.json()
        renderSuggestions(response.data)
    }

    searchTerm.addEventListener('keypress', () => {
        getSuggestions()
    })

    function renderSuggestions(suggestion) { //Aqui se pintan en pantalla las sugerencias en la barra de busqueda
        suggestions.innerHTML = ''
        for (let i = 0; i < suggestion.length; i++) {
            let newItem = document.createElement('li')
            newItem.classList.add('listSuggestions')
            newItem.innerHTML = `<span><img src="./img/icon-search-mod-noc.svg" alt="icono-lupa">${suggestion[i].name}</span>`
            suggestions.appendChild(newItem)

            newItem.addEventListener('click', (e) => {
                searchTerm.value = newItem.textContent
                suggestions.innerHTML = ''
                getSearchedGifs()
            })
        }
    }

    async function getSearchedGifs () { //Aqui se buscan los gifs en la barra de busqueda
        let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm.value}&limit=12&offset=0&rating=g&lang=en`)
        response = await response.json()
        renderSearchedGifs(response.data)
    }

    function renderSearchedGifs(searchgGifs) { //Aqui se pintan en pantalla los resultados de la barra de busqueda
        rtaBusquedaGifos.innerHTML = ''
        for (let i = 0; i < searchgGifs.length; i++) {
            newItem = document.createElement('li')
            newItem.classList.add('listItem')
            newItem.innerHTML = `<img src="${searchgGifs[i].images.original.url}" class="listItem__image" />`
            rtaBusquedaGifos.appendChild(newItem)
        }
    }

    getTrendingGifs();

    //TRENDING SLIDER GIFS 
    //Los trending gif que aparecen abajo se mueven de IZQ a DER segun la flecha seleccionada
    let sliderTrendingGifos = document.getElementById('gifsList');
    let imageGifo = 1;
    let translateX = 0;

    let trendingBotonPrev = document.getElementById('slide-boton-previo');
    let trendingBotonNext = document.getElementById('slide-boton-siguiente');

    trendingBotonNext.addEventListener('click', sliderNext);
    function sliderNext() {
        if (window.matchMedia("(min-width: 1440px)").matches) {
            if (imageGifo <= 5) {
                imageGifo++;
                translateX -= 387;
                sliderTrendingGifos.style.transform = `translateX(${translateX}px)`;
            }
        } else if (window.matchMedia("(min-width: 1024px)").matches) {
            if (imageGifo <= 5) {
                imageGifo++;
                translateX -= 273;
                sliderTrendingGifos.style.transform = `translateX(${translateX}px)`;
            }
        }
    }

    trendingBotonPrev.addEventListener('click', sliderPrev);
    function sliderPrev() {
        if (window.matchMedia("(min-width: 1440px)").matches) {
            if (imageGifo !== 1) {
                imageGifo--;
                translateX += 387;
                sliderTrendingGifos.style.transform = `translateX(${translateX}px)`;
            }
        } else if (window.matchMedia("(min-width: 1024px)").matches) {
            if (imageGifo !== 1) {
                imageGifo--;
                translateX += 273;
                sliderTrendingGifos.style.transform = `translateX(${translateX}px)`;
            }
        }
    }


}

