
let timer = 5;

function caricaImmagine() {
    
        document.getElementById("carica").innerHTML = `${timer}`;
    
        let timing = setInterval(function () {
        
        timer--;
        
        document.getElementById("carica").innerHTML = `${timer}`;
        
        if(timer == 0){
            
            clearInterval(timing)
            
            document.getElementById("carica").innerHTML = `<img style="transition: 1s; opacity: 0; width: 100%; height: 100vh"  src="./town.png" alt="" id="image">`;
            
            setTimeout(function amazing() {

                document.getElementById("image").style.opacity = "1";

            },1000)
            
            
            
            
        }
        
    },1000 )
    
    
    
}

