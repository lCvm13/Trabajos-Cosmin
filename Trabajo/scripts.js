//------------------------------------------------------- //

// VARIABLES, FUNCIONES Y EVENTOS PARA DECIDIR COLOR TEXTO Y FONDO

// BOTONES PARA FONDO Y COLOR TEXTO. //
var botonColor = document.getElementById("botonColor");
var botonColorOcultar = document.getElementById("botonColorOcultar");
var botonFondo = document.getElementById("botonFondo");
var botonFondoOcultar = document.getElementById("botonFondoOcultar");
var colorTexto = document.getElementById("colorTexto");
var colorFondo = document.getElementById("colorFondo");

// AÑADIR A LOS BOTONES DE COLORTEXTO LAS FUNCIONES PARA MOSTRAR Y OCULTAR EL MODAL //
botonColor.addEventListener("click", function () { mostrarModal(botonColor) });
botonColorOcultar.addEventListener("click", function () { ocultarModal(botonColorOcultar) });

// AÑADIR A LOS BOTONES DE COLORFONDO LAS FUNCIONES PARA MOSTRAR Y OCULTAR EL MODAL //
botonFondo.addEventListener("click", function () { mostrarModal(botonFondo) });
botonFondoOcultar.addEventListener("click", function () { ocultarModal(botonFondoOcultar) });

// VARIABLES PARA RECOGER LOS BOTONES DEL COLORTEXTO //
var botonGris = document.getElementById("botonGris");
var botonRojo = document.getElementById("botonRojoOscuro");
var botonBlanco = document.getElementById("botonBlanco");

// VARIABLES PARA RECOGER LOS BOTONES DEL COLORFONDO //
var botonFondoGris = document.getElementById("botonFondoGris");
var botonFondoRojo = document.getElementById("botonFondoRojoOscuro");
var botonFondoNegro = document.getElementById("botonFondoNegro");

// AÑADIR LAS FUNCIONES A LOS BOTONES COLORTEXTO //
botonRojo.addEventListener("click", function () { elegirColorTexto(botonRojo.value) });
botonGris.addEventListener("click", function () { elegirColorTexto(botonGris.value) });
botonBlanco.addEventListener("click", function () { elegirColorTexto(botonBlanco.value) });

// AÑADIR LAS FUNCIONES A LOS BOTONES COLORFONDO //

botonFondoRojo.addEventListener("click", function () { elegirColorFondo(botonFondoRojo.value) });
botonFondoGris.addEventListener("click", function () { elegirColorFondo(botonFondoGris.value) });
botonFondoNegro.addEventListener("click", function () { elegirColorFondo(botonFondoNegro.value) });

// VARIABLE GLOBAL PARA LA DECISION SEGUN LA FUNCION ELEGIRCOLORTEXTO RECOGIENDO EL COLOR DESEADO //
var colorDecididoTexto;

// VARIABLE GLOBAL PARA LA DECISION SEGUN LA FUNCION ELEGIRCOLORFONDO RECOGIENDO EL COLOR DESEADO //
var colorFondoPantalla;


// FUNCION PARA EL EVENTO DEL BOTON RECOGER COLOR DEL TEXTO //
function elegirColorTexto(boton) {
    colorDecididoTexto = boton;
}

// FUNCION PARA EL EVENTO DEL BOTON RECOGER COLOR DEL FONDO //

function elegirColorFondo(boton) {
    colorFondoPantalla = boton;
}



// ----------------------------------------------- //

// VARIABLES Y FUNCIONES PARA HACER EL TOGGLE DE MUSICA
var botonToggleMusica = document.getElementById("botonToggleMusica");
var toggle=false;
botonToggleMusica.addEventListener("click",function(){
    let cancion=document.getElementById("cancion");
    if(toggle==false){
        toggle=true;
        cancion.loop=true;
        cancion.play();
        
    }else{
        toggle=false;
        cancion.pause();
        cancion.currentTime=0;
    }
});


// FUNCIONES, VARIABLES Y EVENTOS PARA SELECCIONAR DONDE APLICAR LOS CAMBIOS
var botonAplicar = document.getElementById("botonAplicar");

var parrafos = document.getElementsByTagName("p");

var body = document.getElementById("body");

botonAplicar.addEventListener("click", function () {

    for (i = 0; i < parrafos.length; i++) {
        parrafos[i].style = "color:" + colorDecididoTexto;
    }


    body.style = "background-color:" + colorFondoPantalla;

    

});

// Funcion que muestra el modal usado en las paginas web

function mostrarModal(boton) {
   
    switch (true) {
        case boton.id == "botonColor":

            colorTexto.style.display = "table";
            botonColor.style.display = "inline-block";
            botonColorOcultar.style.display = "inline-block";

            break;
        case boton.id == "botonFondo":

            colorFondo.style.display = "table";
            botonColor.style.display = "inline-block";
            botonFondoOcultar.style.display = "inline-block";
            
            break;
    }

    return;
}


// Funcion que oculta el modal usado en las paginas web.

function ocultarModal(boton) {
    
    switch (true) {
        case boton.id == "botonColor"+ "Ocultar":

            colorTexto.style.display = "none";
            botonColor.style.display = "inline-block";
            botonColorOcultar.style.display = "none";

            break;
        case boton.id == "botonFondo" + "Ocultar":

            colorFondo.style.display = "none";
            botonColor.style.display = "inline-block";
            botonFondoOcultar.style.display = "none";
            
            break;
    }

    return;
}


// VARIABLES Y FUNCIONES PARA EL BUSCADOR SITUADO ARRIBA A LA DERECHA EN LA PAGINA WEB. //

var campoBuscador=document.getElementById("search");

var botonBuscador=document.getElementById("botonBusqueda");

botonBuscador.addEventListener("click",function(){ realizarBusqueda()});

campoBuscador.addEventListener("focus",function(){
    
    document.addEventListener("keydown" , function (event){
        if(event.which==13){
            realizarBusqueda();
        }
       
    });
});

function realizarBusqueda(){

    let busqueda=campoBuscador.value;
    let arrayAcertijos = ["juegos","adivinanzas"];
    let booleanAcertijos=false;
    for (var i=0;i<arrayAcertijos.length;i++){
        if(busqueda.includes(arrayAcertijos[i])){
            booleanAcertijos=true;
        }
    }

    //event.preventDefault();
    switch (true){
        case  booleanAcertijos==true:
            location.href="Acertijos.html";
            break;
        case busqueda=="prueba":
            location.href="Acertijos.html#prueba";
            break;
        default:
            alert("Su búsqueda no coincide con ningún registro en nuestra página web, pruebe otra cosa.");
        break;
    }

    }


// FUNCION QUE CREA LOS ENLACES CORRESPONDIENTES PARA CADA PAGINA DIRIGIENDOSE DENTRO DE LA MISMA //

function crearEnlaces(){
    let arrayCorrespondiente=[];
    const url = getCurrentURL();

    switch (true){
        case url="../Index.html":

        break;

    }
   
}