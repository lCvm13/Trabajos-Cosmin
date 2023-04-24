
        let t=80;
        let y=3;
        let x=5;
        let s='o';
        do{
          var cuadro = prompt('Dime en que cuadro quieres que escriba hola. Valores de 1 al 5','');
          cuadro= parseInt(cuadro);
      }while(cuadro<=0||cuadro>5)
        var selector= "c"+cuadro;
         var estecuadro= document.getElementById(selector);
        function piramide(){
          for (i=1;i<y+1;i++){
            document.write('<br>');
            for (j=0;j<t;j++){
                if(j==t/2){
                    for (k=0;k<2*i-1;k++){    
                        s+=document.write('o');
                    }
                }else{
                    s+=document.write('|');
                }
            }
          }

         
        }
    
        estecuadro.innerHTML=piramide();
       