var a = null;
var b = null;

function myFunction(){

    if(a === null){
        a = document.getElementById("answer").value;
        document.getElementById("testD_test").style.backgroundImage = "url(../image/25.png)";
    }
    else{
        if(b === null){
            b = document.getElementById("answer").value;
            document.getElementById("testD_test").style.backgroundImage = "url(../image/test8demi3.jpg)";
            if(a != null & b != null){
                if(a == 8){
                    if(b == 96){
                        /*vision normale*/
                        document.getElementById("resultat").innerHTML = "Vous n'avez pas de daltonisme";
                    }
                    else{
                        if(b == 9){
                            //deficience rouge-bleu
                            document.getElementById("resultat").innerHTML = "Vous avez une déficience rouge-bleu";
                        }
                        else{
                            if(b == 6){
                                //deficience vert-bleu
                                document.getElementById("resultat").innerHTML = "Vous avez une déficience vert-bleu";
                            }
                            else{
                                //Achromate
                            }
                        }
                    }
                }
                else{
                    if(a == 3){
                    //deficience rouge-vert
                    document.getElementById("resultat").innerHTML = "Vous avez une déficience rouge-vert";
                    }  
                }     
            }
            a=null;
            b=null;
        }
    }
    document.getElementById("test_a").innerHTML = a;
    document.getElementById("test_b").innerHTML = b;

   
}