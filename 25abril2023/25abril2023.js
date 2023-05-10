'use strict'

let id;



var contador=0;
let matriz = [
    [null, null, null],
    [null , null , null],
    [null,  null, null]
];
let i;
let j;
let booleanx=false;
let booleano=false;
function dibujar(identificador,identificador2){
    id="c"+identificador+identificador2;
    let cuadro=document.getElementById(id);
    if (contador<9 && contador%2==0 && booleanx ==false && booleano==false){
        if(matriz[identificador][identificador2]==null){
          cuadro.innerHTML="☆";
        matriz[identificador][identificador2]="x";
        contador++  
        }else{
            alert('No puedes poner colocar aquí tu simbolo')
        }
        
    }else if(contador<9 && contador%2!=0 && booleanx ==false && booleano==false){
        if(matriz[identificador][identificador2]==null){
         cuadro.innerHTML="o";
        matriz[identificador][identificador2]="o";
        contador++   
        }else{
            alert('No puedes poner colocar aquí tu simbolo')
        }
        
    }
   
        for(i=0;i<matriz.length;i++){
                if(matriz[i][0]=="x" && matriz[i][1]=="x" && matriz[i][2]=="x"){
                   booleanx=true;
                }else if(matriz[0][i]=="x" && matriz[1][i]=="x" && matriz[2][i]=="x"){
                    booleanx=true;
                }else if(matriz[0][0]=="x" && matriz[1][1]=="x" && matriz[2][2]=="x"){
                    booleanx=true;
            }else if(matriz[0][2]=="x" && matriz[1][1]=="x" && matriz[2][0]=="x"){
                booleanx=true;
            }
        }
        for(i=0;i<matriz.length;i++){
            if(matriz[i][0]=="o" && matriz[i][1]=="o" && matriz[i][2]=="o"){
               booleano=true;
            }else if(matriz[0][i]=="o" && matriz[1][i]=="o" && matriz[2][i]=="o"){
                booleano=true;
            }else if(matriz[0][0]=="o" && matriz[1][1]=="o" && matriz[2][2]=="o"){
                booleano=true;
        }else if(matriz[0][2]=="o" && matriz[1][1]=="o" && matriz[2][0]=="o"){
            booleano=true;
        }
    }
      if (booleanx==true){
        alert('Ganó la ☆');
    }
        if(booleano==true){
        alert('Ganó la O');
       
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

