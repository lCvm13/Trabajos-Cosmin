'use strict'

let id;

const array = [];


function dibujar(identificador){
    id="c"+identificador;

    let cuadro=document.getElementById(id);
    cuadro.onmouseenter
    cuadro.innerHTML="☆";
}
function oscurecer(identificador){
    id="c"+identificador;
    let cuadro=document.getElementById(id);
    cuadro.style.backgroundColor="darkred";

   
   
}
function volver(identificador){
    id="c"+identificador;
    let cuadro=document.getElementById(id);
    cuadro.style.backgroundColor="white";
}

function comprobacion(identificador){
    id="c"+identificador;
    let cuadro=document.getElementById(id);
}