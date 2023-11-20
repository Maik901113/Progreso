//variables para el llamdo de las clases de  html //
let progreso=document.querySelector(".progreso");
let porcentaje= document.querySelector(".porcentaje");
 //variable para ubicar el body  para el cls list//
 let celebracion= document.querySelector("body")
// variable del avance para sumar 1+1 hasta llegar al 100%//
let avance= 0;
 //variable de guardar el  intervalo para  en el cual se va sumar de 
let tiempo =setInterval(()=> {
    avance += 1;

    //va a tomar progreso osea la barra que le aplique el estilo y que lo tome deacuerdo al avance 
    progreso.style.width = `${avance}%`
    
    // realizar un if para que la barra solo este hasta el 100%
   
   
    if(avance===100){
        // para que pare y no se refresque la pantalla 
        clearInterval(tiempo)
        //agragar la  clase animacion al body
        celebracion.classList.add("celebracion")
    }
    porcentaje.textContent=`${avance}%`


},75);
