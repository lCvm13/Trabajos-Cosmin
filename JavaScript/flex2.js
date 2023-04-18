//Pedir el numero del cuadro en el que se quiera escribir hola.

do{
    var cuadro = prompt('Dime en que cuadro quieres que escriba hola. Valores de 1 al 5','');
    cuadro= parseInt(cuadro);
}while(cuadro<=0||cuadro>5)
// cuadro sera una variable numerica entre 1 y 5.

var selector= "c"+cuadro;
var estecuadro= document.getElementById(selector);
do{
    var color = prompt('Dime en que color quieres que escriba hola. Valores de 1 al 3'+'1=rojo, 2=verde,3=azul','');
    color= parseInt(color);
}while(cuadro<=0||cuadro>3)
var decision;
estecuadro.innerHTML='--o--<br/>-ooo-<br>ooooo';
switch (color){
    case 1:
        decision=a;
        break;
    case 2:
        decision=b;
        break;
    case 3:
        decision=c;
        break;
    default:
        document.write('No has elegido una opcion de 1 a la 3');
        break;
}
