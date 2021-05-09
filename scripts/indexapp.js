window.onload = () => {
    let bdark = document.getElementById("bdark");
    let body = document.querySelector("body");

    load();

    bdark.addEventListener("click", e => {
        body.classList.toggle("darkmode");
        store(body.classList.contains("darkmode"));
    });

    function load(){
        let darkmode = localStorage.getItem("darkmode");

        if (!darkmode){
            store("false");
        }else if(darkmode == "true"){
            body.classList.add("darkmode");
        }
    }

    function store(value){
        localStorage.setItem("darkmode", value)
    }

}

