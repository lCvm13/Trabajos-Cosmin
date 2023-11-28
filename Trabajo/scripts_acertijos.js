'use strict';
// VARIABLES PARA LAS HISTORIAS //

var titulosAcertijos = ["ACERTIJO", "AACERITJOOSDAODOSA" , "BBBBB", "CCCCC", "DDDDDD"];

var descripcionAcertijos= ["FSDAFSDFASslkfsdaf", "ESAAAA" , 
"soijdaoijfdsajfisafdoij", "afjdsiofjofasdfjsodjif", "AAAAAAAAAAAAAAAAAAAA"];

var botonAnterior = document.getElementById("botonAnterior");

var botonSiguiente = document.getElementById("botonSiguiente");

var contador=0;

var cuerpoPagina=document.getElementsByClassName("cuerpoPagina");

var tituloActual= document.createElement("h1");

var descripcionActual= document.createElement("p");

crearContenido(titulosAcertijos,descripcionAcertijos);
botonAnterior.addEventListener("click", function(){botonAnteriorFuncion(titulosAcertijos,descripcionAcertijos)});
botonSiguiente.addEventListener("click", function(){botonSiguienteFuncion(titulosAcertijos,descripcionAcertijos)});

cuerpoPagina[0].appendChild(tituloActual);
cuerpoPagina[0].appendChild(descripcionActual);


// Eventos para los botones anterior y siguiente //


function crearContenido (arrayTitulo,arrayDescripcion){
    tituloActual.innerHTML=arrayTitulo[contador];
    descripcionActual.innerHTML=arrayDescripcion[contador];
}

function botonAnteriorFuncion(arrayTitulo,arrayDescripcion){
    if(contador>0){
        contador--
    }else{
        contador=(arrayTitulo.length-1);
    }
    crearContenido(arrayTitulo,arrayDescripcion);
    
}

function botonSiguienteFuncion(arrayTitulo,arrayDescripcion){

    if(contador<(arrayTitulo.length-1)){
        contador++
    }else{
        contador=0;
    }
    crearContenido(arrayTitulo,arrayDescripcion);
    
}