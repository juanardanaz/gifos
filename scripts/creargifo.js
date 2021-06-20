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


    //Hago click en "COMENZAR", el texto de la pantalla se modifica y aparece el cartel pidiendo permiso. Paso 1 activo
    botonComenzar.addEventListener('click', comenzarGifo);

    function comenzarGifo() {
        botonComenzar.style.display = "none";
        let tituloGrabar = document.getElementById('titulo-grabargifo');
        let textoGrabar = document.getElementById('texto-grabargifo');
        tituloGrabar.innerHTML = "¿Nos das acceso </br>a tu cámara?";
        textoGrabar.innerHTML = "El acceso a tu camara será válido sólo </br>por el tiempo en el que estés creando el GIFO."

        pasosCrearActivo[0].classList.add('paso-activo');

        //Funcion para pedir permisos a la camara/microfono
        navigator.mediaDevices.getUserMedia({ audio: false, 
                                            video: {
                                                width: { min: 480 },
                                                height: { min: 320 }
                                            }
                                            })
            //Autorizo el acceso: aparece la camara y el boton GRABAR. Paso 2 activo
            .then(function (mediaStream) {
                //Comando para desaparecer el texto
                tituloGrabar.style.display = "none";
                textoGrabar.style.display = "none";
                botonGrabar.style.display = "block";

                pasosCrearActivo[0].classList.remove('paso-activo');
                pasosCrearActivo[1].classList.add('paso-activo');

                //Comando para que aparezca el video
                video.style.display = "block";
                video.srcObject = mediaStream;
                video.onloadedmetadata = function (e) {
                    video.play();
                };
                recorder = RecordRTC(mediaStream, {
                    type: 'gif'
                });
            })
    }

    //Hago click en "GRABAR" y comienza a grabarse el gif. El boton se modifica a "FINALIZAR", y aparece el contador de grabacion
    botonGrabar.addEventListener('click', grabarGifo);

    function grabarGifo() {
        recorder.startRecording();
        console.log("Su gif se está grabando");
        botonGrabar.style.display = "none";
        botonFinalizar.style.display = "block";
        contadorTimer.style.display = "block";
        repetirCaptura.style.display = "none";

        //Comando para el Contador de Tiempo
        dateStarted = new Date().getTime();
        (function looper() {
            if (!recorder) {
                return;
            }
            contadorTimer.innerHTML = contadorTiempo((new Date().getTime() - dateStarted) / 1000);
            setTimeout(looper, 1000);
        })();
    }

    //Hago click en "FINALIZAR". El boton se modifica a "SUBIR GIFO", el contador desaparece y aparece "Repetir Captura"
    botonFinalizar.addEventListener('click', finalizarGifo);

    function finalizarGifo() {
        console.log("Gif finalizado");
        botonFinalizar.style.display = "none";
        botonSubirGifo.style.display = "block";
        contadorTimer.style.display = "none";
        repetirCaptura.style.display = "block";
        recorder.stopRecording(function () {
            video.style.display = "none";
            gifGrabado.style.display = "block";

            blob = recorder.getBlob();
            gifGrabado.src = URL.createObjectURL(recorder.getBlob());

            form.append('file', recorder.getBlob(), 'myGif.gif');
            form.append('api_key', apiKey);
        });
    }

    //Hago click en "SUBIR GIFO". Aparece overlay con icono loading y texto. Paso 3 activo
    botonSubirGifo.addEventListener('click', subirGifo);

    function subirGifo() {
        //Comando para mostrar pantalla cargando y paso activo
        overlayGifCargando.style.display = "flex";
        botonSubirGifo.style.display = "none";
        pasosCrearActivo[1].classList.remove('paso-activo');
        pasosCrearActivo[2].classList.add('paso-activo');
        repetirCaptura.style.display = "none";

        fetch(`https://upload.giphy.com/v1/gifs`, {
            method: 'POST',
            body: form,
        })
            .then(response => {
                return response.json();
            })
            
            //El Gif se sube. El icono y texto se cambia. Ahora aparecen las opciones de DESCARGAR o LINK
            .then(objeto => {
                console.log(objeto);
                let miGifId = objeto.data.id;

                //muestro elementos del DOM subiendo gifo
                accionesCargando.style.display = "block";
                iconoGifCargando.setAttribute("src", "./img/check.svg");
                textoGifCargando.innerText = "GIFO subido con éxito";
                overlayActions.innerHTML = `
                    <button class="overlay-video-button" id="btn-creargifo-descargar" onclick="descargarGifCreado('${miGifId}')"><img src="./img/icon-download.svg" alt="download"></button>
                    <button class="overlay-video-button" id="btn-creargifo-link"><img src="./img/icon-link-normal.svg" alt="link"></button>`;

                //De no haber nada en el localStorage, el array queda vacio
                if (misGifosString == null) {
                    misGifosArray = [];
                } else { //En el caso que haya algo en el localStorage, hay que parsear para sumar otro
                    misGifosArray = JSON.parse(misGifosString);
                }
                misGifosArray.push(miGifId);
                //vuelvo a pasar a texto el array para subirlo al LS
                misGifosString = JSON.stringify(misGifosArray);
                localStorage.setItem("misGifos", misGifosString);
            })
            .catch(error => console.log("Se ha producido un error al subir gif" + error))
    }

    //FUNCION DESCARGAR GIF
    async function descargarGifCreado(gifImg) {
        let blob = await fetch(gifImg).then( img => img.blob());;
        invokeSaveAsDialog(blob, "migifo.gif");
    }

    //Para REPETIR CAPTURA
    repetirCaptura.addEventListener('click', repetirGifo);

    function repetirGifo() {
        recorder.clearRecordedData();
        console.log("Volviendo a grabar gif");
        repetirCaptura.style.display = "none";
        botonSubirGifo.style.display = "none";
        gifGrabado.style.display = "none";
        botonGrabar.style.display = "block";

        //Se piden los permisos a la camara/microfono
        navigator.mediaDevices.getUserMedia({ audio: false, video: { width: 480, height: 320 } })

            //Autorizo el acceso, aparece la camara y el boton para grabar. paso 2 activo
            .then(function (mediaStream) {
                //Aparece video en pantalla
                video.style.display = "block";
                video.srcObject = mediaStream;
                video.onloadedmetadata = function (e) {
                    video.play();
                };
                recorder = RecordRTC(mediaStream, {
                    type: 'gif'
                });
            })
    }

    //Calculo el tiempo de filmacion del Gif
    function contadorTiempo(segs) {
        let horas = Math.floor(segs / 3600);
        let minutos = Math.floor((segs - (horas * 3600)) / 60);
        let segundos = Math.floor(segs - (horas * 3600) - (minutos * 60));

        if (minutos < 10) {
            minutos = "0" + minutos;
        }
        if (segundos < 10) {
            segundos = "0" + segundos;
        }
        return horas + ':' + minutos + ':' + segundos;
    }

}