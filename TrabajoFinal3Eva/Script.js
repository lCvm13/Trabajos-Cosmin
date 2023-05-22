
let todo=document.getElementById("todo");
let confirmar=false;
let opcionTexto;
let opcionFondo;
let textito;
let fondo;
let isClicked=false;


function pregunta(){
   let x=prompt('Dime la respuesta','');
   if (x=='incorrectamente'){
    alert('correcto');
   }else{
    alert('incorrecto');
   }
}
        
function ponerFondo(id){
    
   let ring=document.getElementById("ring");
    let it=document.getElementById("it");
    let krueger=document.getElementById("krueger");
    let ocultar=document.getElementById("ocultar");
    
    if(id==it){
        todo.style.backgroundImage="url('./it.jpg')";
        opcionFondo=1;
        window.sessionStorage.setItem("fondo",opcionFondo);
    }
    if(id==ring){
        todo.style.backgroundImage="url('./ring.jpg')";
        opcionFondo=2;
        window.sessionStorage.setItem("fondo",opcionFondo);
    }
    if (id==krueger){
        todo.style.backgroundImage="url('./krueger.webp')";
        opcionFondo=3;
        window.sessionStorage.setItem("fondo",opcionFondo);
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
       window.sessionStorage.setItem("textito",opcionTexto);
    }
    if(id==t2){
        todo.style="font-weight: bolder; text-shadow: 4px 4px rgba(30, 0, 255, 0.521)";
        boton.style="font-weight: bolder; text-shadow: 4px 4px rgba(30, 0, 255, 0.521);font-size:xx-large;color:white";
       opcionTexto=2;
       window.sessionStorage.setItem("textito",opcionTexto);
    }
    if(id==t3){
       todo.style="font-weight: bolder; text-shadow: 3px 3px 3px rgba(148, 3, 116, 0.521)";
       boton.style="font-weight: bolder; text-shadow: 3px 3px 3px rgba(148, 3, 116, 0.521);font-size:xx-large;color:white";
       opcionTexto=3;
       window.sessionStorage.setItem("textito",opcionTexto);
    }
    
    
   
}   

function aplicarCambios(){
    let todo=document.getElementById("todo");
    let boton=document.getElementById("boton");

   
    
    if (window.sessionStorage.getItem("textito")==1){
        todo.style="font-weight: bolder; text-shadow: 2px 2px red";
        boton.style="font-weight: bolder; text-shadow: 2px 2px red;font-size:xx-large;color:white";
    }
    if (window.sessionStorage.getItem("textito")==2){
        todo.style="font-weight: bolder; text-shadow: 4px 4px rgba(30, 0, 255, 0.521)";
        boton.style="font-weight: bolder; text-shadow: 4px 4px rgba(30, 0, 255, 0.521);font-size:xx-large;color:white";
    }
    if (window.sessionStorage.getItem("textito")==3){
        todo.style="font-weight: bolder; text-shadow: 3px 3px 3px rgba(148, 3, 116, 0.521)";
        boton.style="font-weight: bolder; text-shadow: 3px 3px 3px rgba(148, 3, 116, 0.521);font-size:xx-large;color:white";
    
    }
 if(window.sessionStorage.getItem("fondo")==1){
        todo.style.backgroundImage="url('./it.jpg')";
    }
    if(window.sessionStorage.getItem("fondo")==2){
        todo.style.backgroundImage="url('./ring.jpg')";
    }
    if (window.sessionStorage.getItem("fondo")==3){
        todo.style.backgroundImage="url('./krueger.webp')";
        
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

function centrar(){

var centrado= document.body.style.textAlign;
var opcion;
if(centrado=='center'){
    todo.style.textAlign='left';
    opcion='left';
}else{
    todo.style.textAlign='center';
    opcion='center';
}
return opcion;


}

function aplicarCentro () {
if (centrar()=='left'){
    todo.style.textAlign='center';
}else{
    todo.style.textAlign='left';
}
}