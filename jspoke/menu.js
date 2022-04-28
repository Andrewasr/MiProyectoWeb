var b=0;

function mobile() {
  document.getElementById("idMobile").classList.toggle("toggle");
  b=1;
}

window.addEventListener("resize", function(){
  if (this.window.screen.availWidth >= 640 && b==1) {
    console.log("window width >= 640px");
    document.getElementById("idMobile").classList.toggle("toggle");
    b=2;
} 
});