/*
Footer.js
*/


afficherDateEtHeure()
setInterval(afficherDateEtHeure, 1000)

function afficherDateEtHeure() {

    let tMois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre")

    let d = new Date()

    let quantieme = d.getDate()
    let mois = d.getMonth()
    let annee = d.getFullYear()
    let heures = d.getHours()
    let minutes = d.getMinutes()
    let secondes = d.getSeconds()

    //let dateEtHeure = "A Paris nous sommes le 21 décembre 2021 et il est 12 heures 21 minutes et 12 secondes"
    let dateEtHeure = "A Paris nous sommes le " + quantieme + " " + tMois[mois - 1] + " " + annee + " et il est " + heures + " heure(s) " + minutes + " minute(s) et " + secondes + " seconde(s)"

    document.getElementById("lblFooter").innerHTML = dateEtHeure
}