
let todo=document.getElementById("todo");
let confirmar=false;
let opcionTexto;
let opcionFondo;
function pregunta(){
   let x=prompt('Dime la respuesta','');
   if (x=='incorrectamente'){
    alert('correcto');
   }else{
    alert('incorrecto');
   }
}
        



var modo = leerModoActual();
if (modo=="dia") {
    ponerModoDia();    
} else {
    ponerModoNoche();
}


function leerModoActual() {    
    let modo = window.localStorage.getItem("--modoGuardado");
    if (!modo) {
        // devolverá modo DIA si no hay modo guardado
        /* 
        leer el --modoGuardado de nuestro CSS original
                */

        modo=document.documentElement.style.getPropertyValue("--modoGuardado");
        // modo = getComputedStyle(document.documentElement).getPropertyValue('--modoGuardado');


    };
    return modo;
}

function ponerModoDia() {

    // ponemos letra oscura sobre fondo blanco
    let todo=document.getElementById("todo");
    todo.style.color="black";
    todo.style.backgroundColor="white";
    window.localStorage.setItem("--modoGuardado","dia");

    // ocultamos el sol
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display="none";

    // mostramos la luna
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display="block";
    
}


function ponerModoNoche() {

    // ponemos letra clara sobre fondo oscuro
    let todo=document.getElementById("todo");
    todo.style.color="white";
    todo.style.backgroundColor="black";
    window.localStorage.setItem("--modoGuardado","noche");

    // mostramos el sol
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display="block";

    // ocultamos la luna
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display="none";
    
}

function ponerFondo(id){
    
    let ring=document.getElementById("ring");
    let it=document.getElementById("it");
    let krueger=document.getElementById("krueger");
    let ocultar=document.getElementById("ocultar");
    
    if(id==it){
        todo.style.backgroundImage="url('./it.jpg')";
        opcionFondo=1;
    }
    if(id==ring){
        todo.style.backgroundImage="url('./ring.jpg')";
        opcionFondo=2;
    }
    if (id==krueger){
        todo.style.backgroundImage="url('./krueger.webp')";
        opcionFondo=3;
    }
    ring.style.display="none";
    krueger.style.display="none";
    it.style.display="none";
    ocultar.style.display="none";
    confirmar=true;
    ponerBoton();

}
function ponerTexto(id){
    let boton=document.getElementById("boton");
    
    if(id==t1){
        todo.style="font-weight: bolder; text-shadow: 2px 2px red";
        boton.style="font-weight: bolder; text-shadow: 2px 2px red;font-size:xx-large;color:white";
        opcionTexto=1;
       
    }else if(id==t2){
        todo.style="font-weight: bolder; text-shadow: 4px 4px rgba(30, 0, 255, 0.521)";
        boton.style="font-weight: bolder; text-shadow: 4px 4px rgba(30, 0, 255, 0.521);font-size:xx-large;color:white";
       opcionTexto=2;
    }
    else if(id==t3){
       todo.style="font-weight: bolder; text-shadow: 3px 3px 3px rgba(148, 3, 116, 0.521)";
       boton.style="font-weight: bolder; text-shadow: 3px 3px 3px rgba(148, 3, 116, 0.521);font-size:xx-large;color:white";
       opcionTexto=3;
    }
    

}   

function aplicarCambios(){
    let todo=document.getElementById("todo");
    switch (opcionTexto){
        case opcionTexto=1:
        todo.style="font-weight: bolder; text-shadow: 2px 2px red";
        boton.style="font-weight: bolder; text-shadow: 2px 2px red;font-size:xx-large;color:white";
        break;
        case opcionTexto=2:
        todo.style="font-weight: bolder; text-shadow: 4px 4px rgba(30, 0, 255, 0.521)";
        boton.style="font-weight: bolder; text-shadow: 4px 4px rgba(30, 0, 255, 0.521);font-size:xx-large;color:white";
        break;
        case opcionTexto=3:
        todo.style="font-weight: bolder; text-shadow: 3px 3px 3px rgba(148, 3, 116, 0.521)";
        boton.style="font-weight: bolder; text-shadow: 3px 3px 3px rgba(148, 3, 116, 0.521);font-size:xx-large;color:white";
        break;
    }
    switch (opcionFondo){
        case opcionFondo=1:
        todo.style.backgroundImage="url('./it.jpg')";
        break;
        case opcionFondo=2:
        todo.style.backgroundImage="url('./ring.jpg')";
        break;
        case opcionFondo=3:
        todo.style.backgroundImage="url('./krueger.webp')";
        break;
    }
}
function ponerBoton(){
    let boton=document.getElementById("boton");
    if(confirmar==false){
        boton.style.display="none";
    }else{
        boton.style.display="block";
    }
}

function botonScreamer(){
    let video=document.getElementById("video");
    let scare=document.getElementById("scareDiv");
    let overlay=document.getElementById("overlay");
    scare.style="display:flex;position:fixed; height:100vh;width: 100hw;justify-content:center;";
    overlay.style.display="none";
    const { documentElement } = document;
    if(documentElement.requestFullscreen) documentElement.requestFullscreen();
    else if(documentElement.mozRequestFullScreen) documentElement.mozRequestFullScreen();
    else if(documentElement.webkitRequestFullscreen) documentElement.webkitRequestFullscreen();
    else if(documentElement.msRequestFullscreen) documentElement.msRequestFullscreen();
    video.play();
   
    timeout();
}
function ocultarVideo(){
    let video=document.getElementById("video");
    let scare=document.getElementById("scareDiv");
    let overlay=document.getElementById("overlay");
    overlay.style.display="block";
    video.pause();
    video.currentTime=0;
    scare.style.display="none";
    if (document.fullscreenElement) {
        document.exitFullscreen()
}
}
function timeout(){
      setTimeout(ocultarVideo,1000);   
}
