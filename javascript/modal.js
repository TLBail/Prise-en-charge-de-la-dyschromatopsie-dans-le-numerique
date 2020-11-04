// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.getElementById("modal_test").style.backgroundImage = "url(../image/test8demi3.jpg)"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("modal_test").style.backgroundImage = "url(../image/test8demi3.jpg)"
  }
}

window.onload = function () {
     if(localStorage.getItem("hasCodeRunBefore") === null) {
        modal.style.display = "block";
        localStorage.setItem("hasCodeRunBefore", true);
    }
}

var a = null;
var b = null;
/*var x = document.getElementById("myBtn");
if (x.addEventListener) {                    // For all major browsers, except IE 8 and earlier
  x.addEventListener("click", myFunction);
} else if (x.attachEvent) {                  // For IE 8 and earlier versions
  x.attachEvent("onclick", myFunction);
}*/
function myFunction(){

    if(a === null){
        a = document.getElementById("answer").value;
        document.getElementById("modal_test").style.backgroundImage = "url(../image/25.png)";
    }
    else{
        if(b === null){
            b = document.getElementById("answer").value;
            document.getElementById("modal_test").style.backgroundImage = "url(../image/test8demi3.jpg)";
            modal.style.display = "none";
        }
        else{
            modal.style.display = "none";
        }
    }

    if(answer != null & answer2 != null){
        if(answer === 8){
            if(answer2 === 96){
                /*vision normale*/
            }
            else{
                if(answer2 === 9){
                    //deficience rouge-bleu
                }
                else{
                    if(answer2 === 6){
                        //deficience vert-bleu
                    }
                    else{
                        //vision normale
                    }
                }
            }
        }
        else{
            if(answer === 3){
            //deficience rouge-vert
            }  
        }     
    }
}