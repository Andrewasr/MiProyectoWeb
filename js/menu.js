function menu() {
    var b = document.getElementById("menu");
    if (b.className === "menubar") {
      b.className += " responsive";
    } else {
      b.className = "menubar";
    }
  }
