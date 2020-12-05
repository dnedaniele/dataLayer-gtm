
let buttonsList = document.getElementsByClassName("btn btn-primary");



for (let i = 0; i < buttonsList.length; i++) {    
   buttonsList[i].addEventListener("click", function () {
      console.log("button clicked");
    }); 

  
}


