window.onload = () => {
    let bdark = document.getElementById("bdark");
    let testNocturno = () => {
        let tema = localStorage.getItem("tema")
        if(tema == "oscuro"){
            document.body.classList.toggle("darkmode");
            bdark.innerHTML = "Modo Diurno";
            cambioLogos();
        }
        else if (tema == "claro"){
            document.body.classList.remove("darkmode");
            bdark.innerHTML = "Modo Nocturno";
            cambioLogos();
        }else{
            localStorage.setItem("tema", "claro")
            bdark.innerHTML = "Modo Nocturno";
        }
    }

    bdark.addEventListener("click", () => {
        let tema = localStorage.getItem("tema")
        document.body.classList.toggle("darkmode");

        if(tema == "oscuro"){
            localStorage.setItem("tema", "claro")
            bdark.innerHTML = "Modo Nocturno";
        }
        else if (tema == "claro"){
            localStorage.setItem("tema", "oscuro")
            bdark.innerHTML = "Modo Diurno";
        }
    })
    testNocturno();

    //Cambio de logo GIFOS
    function cambioLogos() {
        let logoDesktop = document.getElementById("logo-gifos");
    
        if (bdark.innerHTML == "Modo Nocturno") {
            logoDesktop.setAttribute("src", "./img/logo-desktop.svg");
        } else {
            logoDesktop.setAttribute("src", "./img/Logo-modo-noc.svg");
        }
    }
    
    //Cambio de icono lupa barra



}