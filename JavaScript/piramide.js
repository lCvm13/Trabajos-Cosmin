
        let t=80;
        let y=3;
        let x=5;
        let s='o';
        function piramide(){
          for (i=1;i<y+1;i++){
            document.write('<br>');
            for (j=0;j<t;j++){
                if(j==t/2){
                    for (k=0;k<2*i-1;k++){    
                        s+document.write('o');
                    }
                }else{
                    document.write('|');
                }
            }
          }
        }
       