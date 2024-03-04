'use strict';

var activo=document.getElementsByClassName("active");
var enlaces=document.getElementsByTagName("button");
var sectionP=document.getElementsByTagName("section")[0];
var sectionSeleccionado="sobre-mi";
var idiomaSeleccionado="spanish";
var modalidad=document.getElementById("modalidad");
var spanish = document.getElementById("spanish");
var english = document.getElementById("english");

var sobre_spanish=`<h2>Sobre mi</h1>
<div id="about">
    <div id="foto">
        <img id="logo" src="./imagenes/${window.matchMedia('(prefers-color-scheme: dark)').matches?'fondo_dos.png':'fondo_dos_reverso.png'}" alt="logo"></img>
    </div>
    <div class="contenido">
    <span>
    <span class="typewrite" data-period="2000" data-type='[ "Hola soy...","Desarrollador web","Programador de aplicaciones web"]'>
      <span class="wrap"></span>
    </span>
    </span>
        <h3>Cosmin-Valentín</h2>
        <p>Como desarrollador web, me especializo en crear sitios web impresionantes y aplicaciones web dinámicas adaptadas a tus necesidades únicas. Con un enfoque en soluciones innovadoras y la satisfacción del cliente, entrego resultados de primera calidad que te destacan de la competencia.</p>
    </div>
</div>
<div id="carouselContenedor">
<h3>Habilidades</h3>
<hr>
    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
                <div>
                   <span><i class="bi bi-hand-index-thumb"></i></span>
                <h4>Páginas interactivas</h4> 
                </div>
                <p>Creación de sitios web que satisfacen las necesidades de los usuarios de manera interactiva.</p>
          </div>
          <div class="carousel-item">
                <div>
                <span><i class="bi bi-plugin"></i></span>
                <h4></i>Wordpress</h4>
                </div>
                <ul>
                    <div>
                    <li>Creación de plugins</li>
                    <li>Adaptación de temas a Wordpress</li>
                    <li>Creación de temas hijos a partir de otros</li>
                    </div>
                </ul>
          </div>
          <div class="carousel-item">
                <div>
                  <span><i class="bi bi-person-check"></i></span>
                <h4>Aplicaciones Web adaptadas al usuario</h4>  
                </div>
                <p>El objetivo principal al desarrollar sitios web es garantizar la satisfacción y comodidad del usuario.</p>
          </div>
          <div class="carousel-item">
                <div>
                    <span><i class="bi bi-gear-wide-connected"></i></span>
                    <h4>Aplicaciones con frameworks</h4>
                </div>
                <p>Capacidad para utilizar frameworks y bibliotecas actualizados.</p>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>`;

var sobre_english = `<h2>About me</h1>
<div id="about">
    <div id="foto">
        <img id="logo" src="./imagenes/${window.matchMedia('(prefers-color-scheme: dark)').matches?'fondo_dos.png':'fondo_dos_reverso.png'}" alt="logo"></img>
    </div>
    <div class="contenido">
    <span>
    <span class="typewrite" data-period="2000" data-type='[ "Hello I am...","Web developer","Web application developer"]'>
      <span class="wrap"></span>
    </span>
    </span>
        <h3>Cosmin-Valentín</h2>
        <p>As a web developer, I specialize in creating stunning websites and dynamic web applications tailored to your unique needs. With a focus on innovative solutions and client satisfaction, I deliver top-notch results that set you apart from the competition.</p>
    </div>
</div>
<div id="carouselContenedor">
<h3>Skills</h3>
<hr>
    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
                <div>
                   <span><i class="bi bi-hand-index-thumb"></i></span>
                <h4>Interactive websites</h4> 
                </div>
                <p>Proficiency in creating websites that meet the users' needs interactively.</p>
          </div>
          <div class="carousel-item">
                <div>
                <span><i class="bi bi-plugin"></i></span>
                <h4></i>Wordpress</h4>
                </div>
                <ul>
                    <div>
                    <li>Plugin creation and development  </li>
                    <li>Proficiency in converting web designs into WordPress themes.</li>
                    <li>Proficiency in customizing WordPress themes to meet users' needs.</li>
                    </div>
                </ul>
          </div>
          <div class="carousel-item">
                <div>
                  <span><i class="bi bi-person-check"></i></span>
                <h4>User-adapted web applications.</h4>  
                </div>
                <p>My primary goal when developing websites is to ensure user satisfaction and comfort.</p>
          </div>
          <div class="carousel-item">
                <div>
                    <span><i class="bi bi-gear-wide-connected"></i></span>
                    <h4>Applications using frameworks</h4>
                </div>
                <p>Proficiency in utilizing up-to-date frameworks and libraries.</p>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>`;

var portfolio_spanish = `<h2>Portfolio</h1>
<div id="proyectos">
    <div>
        <img class="proyecto_port" data-enlace="https://github.com/lCvm13/Proyectos/tree/main/Laravel/calendario_definitivo" src="./imagenes/calendario.png" alt="Calendario hecho en Laravel que permite añadir eventos para el usuario que esté logado.">
    </div>
    <div>
        <img class="proyecto_port" data-enlace="https://github.com/lCvm13/Proyectos/tree/main/Ajax/filtros_ajax" src="./imagenes/filtro_ajax.png" alt="Prueba en ajax que filtra resultados de la base de datos y realiza un paginador.">
    </div>
    <div>
        <img class="proyecto_port" data-enlace="https://github.com/lCvm13/Proyectos/tree/main/Ajax/consulta_api_git" src="./imagenes/git.png" alt="Prueba usando la api de github permitiendo buscar usuarios y recoger información">
    </div>
    <div>
        <img class="proyecto_port" data-enlace="https://github.com/lCvm13/Proyectos/tree/main/WordPress/Plugin/carousel" src="./imagenes/plugin.png" alt="Plugin para crear un carousel de imagenes según las imagenes del usuario para posteriormente colocarlo con un shortcode.">
    </div>
    <div>
        <img class="proyecto_port" data-enlace="https://github.com/lCvm13/Proyectos/tree/main/JavaScript/Juego_7_media" src="./imagenes/siete_y_media.png" alt="Representación del juego de cartas siete y media">
    </div>
    <div>
        <img class="proyecto_port" data-enlace="https://github.com/lCvm13/Proyectos/tree/main/JavaScript/P%C3%A1gina_terror" src="./imagenes/terror_interactivo.png" alt="Página web terror interactiva">
    </div>
    <div>
        <img class="proyecto_port" data-enlace="https://github.com/lCvm13/Proyectos/tree/main/JavaScript/P%C3%A1gina_terror_simple" src="./imagenes/terror_simple.png" alt="Página web terror interactiva simple para practicar">
    </div>
    <div>
        <img class="proyecto_port" data-enlace="https://github.com/lCvm13/Proyectos/tree/main/PHP/tienda_virtual" src="./imagenes/tienda.png" alt="Página web que simula una tienda virtual en la que el usuario logado puede añadir al carrito su compra para calcular precio final">
    </div>
</div>
 <button type="button" id="boton_mas" class="btn btn-info">Ver más</button>`;

var portfolio_english = `<h2>Portfolio</h1>
<div id="proyectos">
    <div>
        <img class="proyecto_port" data-enlace="https://github.com/lCvm13/Proyectos/tree/main/Laravel/calendario_definitivo" src="./imagenes/calendario.png" alt="Calendar built in Laravel that enables logged-in users to add events.">
    </div>
    <div>
        <img class="proyecto_port" data-enlace="https://github.com/lCvm13/Proyectos/tree/main/Ajax/filtros_ajax" src="./imagenes/filtro_ajax.png" alt="Test in AJAX that filters results from the database and implements a paginator.">
    </div>
    <div>
        <img class="proyecto_port" data-enlace="https://github.com/lCvm13/Proyectos/tree/main/Ajax/consulta_api_git" src="./imagenes/git.png" alt="Test using the GitHub API to search for users and collect information.">
    </div>
    <div>
        <img class="proyecto_port" data-enlace="https://github.com/lCvm13/Proyectos/tree/main/WordPress/Plugin/carousel" src="./imagenes/plugin.png" alt="Plugin for creating a carousel of images based on user images, and then placing it using a shortcode.">
    </div>
    <div>
        <img class="proyecto_port" data-enlace="https://github.com/lCvm13/Proyectos/tree/main/JavaScript/Juego_7_media" src="./imagenes/siete_y_media.png" alt="Representation of the card game "Siete y Media" (Seven and a Half).">
    </div>
    <div>
        <img class="proyecto_port" data-enlace="https://github.com/lCvm13/Proyectos/tree/main/JavaScript/P%C3%A1gina_terror" src="./imagenes/terror_interactivo.png" alt="Interactive horror website.">
    </div>
    <div>
        <img class="proyecto_port" data-enlace="https://github.com/lCvm13/Proyectos/tree/main/JavaScript/P%C3%A1gina_terror_simple" src="./imagenes/terror_simple.png" alt="Simple interactive horror website for practice.">
    </div>
    <div>
        <img class="proyecto_port" data-enlace="https://github.com/lCvm13/Proyectos/tree/main/PHP/tienda_virtual" src="./imagenes/tienda.png" alt="Website simulating a virtual store where logged-in users can add items to their cart to calculate the final price.">
    </div>
</div>
 <button type="button" id="boton_mas" class="btn btn-info">See more</button>`;
document.addEventListener("DOMContentLoaded",function(){
    for (let i=0;i<enlaces.length;i++){
        enlaces[i].addEventListener("click",function(){
            cambiarActivo(enlaces[i]);
        });
    }
    cargarSection("sobre-mi","spanish");
    
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        document.getElementById("logo").setAttribute("src","./imagenes/fondo_dos.png");
    }else{
        document.getElementById("logo").setAttribute("src","./imagenes/fondo_dos_reverso.png");
        modalidad.setAttribute("data-tipo","noche");
        modalidad.setAttribute("src","./imagenes/noche.png");
    }

    
    modalidad.addEventListener("click",function(){
        cargarModo(modalidad.dataset.tipo);
    });
    spanish.addEventListener("click",function () {cargarIdioma(spanish.id)  });
    english.addEventListener("click",function () {cargarIdioma(english.id)  });
});

function cargarModo(tipo){
    switch(true){
        case tipo=="dia":
            document.body.style="background-color:white;color:black";
            modalidad.setAttribute("src","./imagenes/noche.png");
            modalidad.setAttribute("data-tipo","noche");
            document.getElementById("logo").setAttribute("src","./imagenes/fondo_dos_reverso.png");
        break;
        case tipo=="noche":
            document.body.style="background-color:black;color:white";
            modalidad.setAttribute("src","./imagenes/dia.png");
            modalidad.setAttribute("data-tipo","dia");
            document.getElementById("logo").setAttribute("src","./imagenes/fondo_dos.png");
        break;

    }
}
function cambiarActivo(valor){
   activo[0].classList.remove('active');
   valor.classList.add("active");
   sectionSeleccionado=valor.value;
   cargarSection(sectionSeleccionado,idiomaSeleccionado);
}

function cargarIdioma(idiomaElegido) {
    idiomaSeleccionado=idiomaElegido;
    cargarSection(sectionSeleccionado,idiomaElegido)
  }
function cargarSection(sectionS,idioma){
    let botonesCab=document.getElementsByClassName("list-group-item");
    sectionP.style=`animation: animacionTema 0.5s ease;`;
    if(idioma == "spanish"){
    botonesCab[0].innerHTML="Sobre mi";
    botonesCab[3].innerHTML="Contacto";
    switch(true){
        case sectionS=="sobre-mi":
        sectionP.setAttribute("id","sobre-mi");
        sectionP.innerHTML=sobre_spanish;
        escribir();
        voltear();
        break;
        case sectionS=="cv":
            window.location="https://drive.google.com/file/d/1B8UocR3Nur7iaoulfPTcUqfDJwTQMc5K/view?usp=sharing";
        break;
        case sectionS=="portfolio":
        sectionP.setAttribute("id","portfolio");
        sectionP.innerHTML=portfolio_spanish;
        var imagenes_portfolio = document.getElementsByClassName("proyecto_port");
        for(let i=0;i<imagenes_portfolio.length;i++){
            imagenes_portfolio[i].addEventListener("click",function(){
                console.log(imagenes_portfolio[i]);
                alertaPort(imagenes_portfolio[i])
            })
        };

        document.getElementById("boton_mas").addEventListener("click",function () { window.location="https://github.com/lCvm13/Proyectos";  })
        break;
        case sectionS=="contacto":
            Swal.fire({
                title: "Contacto",
                icon: "info",
                html:`
                <div class="contacto_iconos">
                <a href="https://www.linkedin.com/in/cosmin-valentin-movila-66a7b01b3/"><i class="bi bi-linkedin"></i></a>
                <a href="https://github.com/lCvm13/Proyectos"><i class="bi bi-github"></i></a>
                <a href="mailto:cosminvmovila13@gmail.com"><i class="bi bi-envelope"></i></a>
                <br>
                Teléfono: +34 674 58 56 50
                </div>`
              });
        break;
    }
}else{
    botonesCab[0].innerHTML="About me";
    botonesCab[3].innerHTML="Contact";
switch(true){
        case sectionS=="sobre-mi":
        sectionP.setAttribute("id","sobre-mi");
        sectionP.innerHTML=sobre_english;
        escribir();
        voltear();
        break;
        case sectionS=="cv":
            window.location="https://drive.google.com/file/d/1B8UocR3Nur7iaoulfPTcUqfDJwTQMc5K/view?usp=sharing";
        break;
        case sectionS=="portfolio":
        sectionP.setAttribute("id","portfolio");
        sectionP.innerHTML=portfolio_english;
        var imagenes_portfolio = document.getElementsByClassName("proyecto_port");
        for(let i=0;i<imagenes_portfolio.length;i++){
            imagenes_portfolio[i].addEventListener("click",function(){
                
                alertaPort(imagenes_portfolio[i])
            })
        }
        document.getElementById("boton_mas").addEventListener("click",function () { window.location="https://github.com/lCvm13/Proyectos";});
        break;
        case sectionS=="contacto":
            Swal.fire({
                title: "Contact",
                icon: "info",
                html:`
                <div class="contacto_iconos">
                <a href="https://www.linkedin.com/in/cosmin-valentin-movila-66a7b01b3/"><i class="bi bi-linkedin"></i></a>
                <a href="https://github.com/lCvm13/Proyectos"><i class="bi bi-github"></i></a>
                <a href="mailto:cosminvmovila13@gmail.com"><i class="bi bi-envelope"></i></a>
                <br>
                Phone: +34 674 58 56 50
                </div>`
              });
        break;
    }
}
    setTimeout(() => {
        sectionP.style.removeProperty("animation");
    }, 500);
}
function escribir() {
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000; // Ajustar el período aquí
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    var instance = null;

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };

    function iniciarAnimacion() {
        if (instance !== null) {
            clearInterval(instance);
        }

        var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
 
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
    }

    

    return iniciarAnimacion();
}


function voltear() {
    var logo= document.getElementById("logo");
    setInterval(() => {
      logo.style=`animation:
    voltear 2s ease forwards;`;
    setTimeout(() => {
        logo.style.removeProperty("animation");
        logo.style=`animation:
    volteardos 2s ease forwards;`;
    }, 4000);  

    }, 8000);
    
  }

function alertaPort(atributo) {
    console.log(atributo.getAttribute("alt"));
    console.log(atributo.dataset.enlace);
    Swal.fire({
        title: "Info",
        icon: "info",
        html:`<p>${atributo.getAttribute("alt")}</p>
        <a href="${atributo.dataset.enlace}">Github</a>`,
      });
  }