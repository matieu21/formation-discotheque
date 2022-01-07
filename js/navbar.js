/* Basculer entre l'ajout et le retrait de la classe "responsive" au topnav lorsque l'utilisateur clique sur l'icône */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
} 