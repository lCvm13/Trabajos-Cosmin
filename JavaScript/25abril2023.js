'use strict'

let id;



var contador=0;
let matriz = [
    ["c01", "c02", "c03"],
    ["c11" , "c12" , "c13"],
    ["c21",  "c22", "c23"]
];
let i;
let j;
let boolean=false;
function dibujar(identificador,identificador2){
    id="c"+identificador+identificador2;
    let cuadro=document.getElementById(id);
    if (contador<9 && contador%2==0){
        cuadro.innerHTML="☆";
        matriz[identificador][identificador2]="x";
        contador++
    }else if(contador<9 && contador%2!=0){
        cuadro.innerHTML="o";
        matriz[identificador][identificador2]="o";
        contador++
    }
    if(contador>=3){
        for(i=0;i<matriz.length;i++){
                if(matriz[i][0]=="x" && matriz[i][1]=="x" && matriz[i][2]=="x"){
                   boolean=true;
                }else if(matriz[0][i]=="x" && matriz[1][i]=="x" && matriz[2][i]=="x"){
                    boolean=true;
                }else if(matriz[0][0]=="x" && matriz[1][1]=="x" && matriz[2][2]=="x"){
                    boolean=true;
            }else if(matriz[0][2]=="x" && matriz[1][1]=="x" && matriz[2][0]=="x"){
                boolean=true;
            }
        }
        for(i=0;i<matriz.length;i++){
            if(matriz[i][0]=="o" && matriz[i][1]=="o" && matriz[i][2]=="o"){
               boolean=true;
            }else if(matriz[0][i]=="o" && matriz[1][i]=="o" && matriz[2][i]=="o"){
                boolean=true;
            }else if(matriz[0][0]=="o" && matriz[1][1]=="o" && matriz[2][2]=="o"){
                boolean=true;
        }else if(matriz[0][2]=="o" && matriz[1][1]=="o" && matriz[2][0]=="o"){
            boolean=true;
        }
    }
      if (boolean==true){
        alert('Ganaste');
    }else{
        alert('Perdiste');
    }

    }
   
    }



function oscurecer(identificador,identificador2){
    id="c"+identificador+identificador2;
    let cuadro=document.getElementById(id);
    cuadro.style.backgroundColor="darkred";  
}
function volver(identificador,identificador2){
    id="c"+identificador+identificador2;
    let cuadro=document.getElementById(id);
    cuadro.style.backgroundColor="white";
}

function comprobacion(identificador,identificador2){
    id="c"+identificador+identificador2;
    let cuadro=document.getElementById(id);
}

