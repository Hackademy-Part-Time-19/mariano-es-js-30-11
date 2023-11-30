

function cambioImmagine() {

    document.getElementById("p").remove();

    let timing = setInterval(function cambio(){

        let numeroRandom = Math.random() * 5;

        numeroRandom = Math.floor(numeroRandom);
        
        toString(numeroRandom);
        
        document.getElementById("image").src = `./immagini/${numeroRandom}.jpg`;

        document.getElementById("image").style.opacity = "1";

        setTimeout(function delay() {

            document.getElementById("image").style.opacity = "0";

            
        },1000)

    },5000)


    document.getElementById()


}