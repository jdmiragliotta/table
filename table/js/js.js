/* ----------------------------------
  Variables
------------------------------------*/
var hide = document.getElementsByClassName("remove");


for(i = 0; i < hide.length; i++){
    hide[i].addEventListener("click", removeRow);
};


function removeRow (){
  this.parentNode.parentNode.setAttribute("class", "hidden");
};





