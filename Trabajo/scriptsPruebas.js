
// VARIABLES PARA LAS HISTORIAS //

var titulosHistorias = ["Tiempo", "AAAAA" , "BBBBB", "CCCCC", "DDDDDD"];

var descripcionHistorias= ["lorremmkkfasdflkasfdkslkfsdaf", "AOJIJASDFDSOIJFSDAOJIFSDOJIF" , 
"soijdaoijfdsajfisafdoij", "afjdsiofjofasdfjsodjif", "AAAAAAAAAAAAAAAAAAAA"];

var botonAnterior = document.getElementById("botonAnterior");

var botonSiguiente = document.getElementById("botonSiguiente");

var contador=0;

var cuerpoPagina=document.getElementsByClassName("cuerpoPagina");

var tituloActual= document.createElement("h1");

var descripcionActual= document.createElement("p");

cuerpoPagina[0].appendChild(tituloActual);
cuerpoPagina[0].appendChild(descripcionActual);


// Eventos para los botones anterior y siguiente //
botonAnterior.addEventListener("click", function(){botonAnteriorFuncion(titulosHistorias)});
botonSiguiente.addEventListener("click", function(){botonSiguienteFuncion(titulosHistorias)});

function crearContenido (titulo,descripcion,arrayTitulo,arrayDescripcion){
    titulo.innerHTML=arrayTitulo[contador];
    descripcion.innerHTML=arrayDescripcion[contador];
}

crearContenido(tituloActual,descripcionActual,titulosHistorias,descripcionHistorias,contador);

function botonAnteriorFuncion(array){
    if(contador>0){
        contador--
    }else{
        contador=(array.length-1);
    }
    crearContenido(tituloActual,descripcionActual,titulosHistorias,descripcionHistorias,contador);
    
}

function botonSiguienteFuncion(array){

    if(contador<(array.length-1)){
        contador++
    }else{
        contador=0;
    }
    crearContenido(tituloActual,descripcionActual,titulosHistorias,descripcionHistorias,contador);
    
}


