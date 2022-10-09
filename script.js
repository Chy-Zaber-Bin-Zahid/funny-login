// Variable
let passCheck = document.getElementById("pass");
let btn = document.getElementById("btn-move");
let btnMain = document.getElementById("btn-main");
btn.style.textAlign = "center"

btnMain.addEventListener("mouseover", function(){
  if(passCheck.value.length > 4) {
    btn.style.textAlign = "center";
  }

  if (passCheck.value.length <= 4) {
    if (btn.style.textAlign === "center"){
      btn.style.textAlign = "right";
    } else if (btn.style.textAlign === "right"){
      btn.style.textAlign = "left";
    } else if (btn.style.textAlign === "left"){
      btn.style.textAlign = "right";
    }
  } 
})