/* 
 * Authentification.js
 * Authentification avec AJAX et PHP : js-ajax -> route -> ctrl -> dao
 * Mot de passe visible : text <--> password
 * Mot de passe oublié : envoi d'un mail avec PHP
 * Se souvenir de moi : cookie
 */

/**
 * 
 * @returns {undefined}
 */
 function initAuthentification() {
    console.log("init")

    

    //document.getElementById("btValider").onclick = sauthentifier

    document.getElementById("btValider").addEventListener(
        "click",
        sauthentifier,
    )
    document.getElementById("chkMdpVisible").onclick = mdpVisible
    document.getElementById("motDePasseOublie").onclick = mdpOublie

    // document.getElementByID("chkMdpVisible").getAttribute("checked", false)

    lireCookiesPseudoEtMDP()

    // En periode de test
    // document.getElementById("pseudo").value = "p"
    // document.getElementById("mdp").value = "b"
} /// init

/**
 * 
 * @return {undefined}
 */
function sauthentifier() {
    console.log("sauthentifier")
    // Récupération des valeurs saisies
    let pseudo = document.getElementById("pseudo").value.trim()
    let mdp = document.getElementById("mdp").value.trim()

    console.log(pseudo)

    let ok = controler(pseudo, mdp)

    if (ok) {
        console.log("ok")
        if (document.getElementById("chkSeSouvenir").checked) {
            seSouvenir(pseudo, mdp)
        } else {
            document.getElementById("lblMessage").innerHTML = "Pas de cookie créé !!!"
            creerCookie("pseudo", "", 2000)
            creerCookie("mdp", "", 2000)
        }
    }
    let ok2 = controler2(pseudo, mdp)

    if (ok2) {
        console.log("ok")
        if (document.getElementById("chkSeSouvenir").checked) {
            seSouvenir(pseudo, mdp)
        } else {
            document.getElementById("lblMessage").innerHTML = "Pas de cookie créé !!!"
            creerCookie("pseudo", "", 2000)
            creerCookie("mdp", "", 2000)
        }
    }
} /// sauthentifier

/**
 * 
 * @returns {undefined}
 */
function controler(pseudo, mdp) {
    let ok = false

    // Nettoyage
    document.getElementById("lblMessageMDP").innerHTML = ""

    // Tests sur les valeurs
    if (mdp === "") {
        document.getElementById("lblMessageMDP").innerHTML = "<span style='color:brown'>Champs Obligatoire"
    } else {
        document.getElementById("lblMessageMDP").innerHTML = "<span style='color:green'>OK"
        ok = true
    }

    return ok
} /// controler
function controler2(pseudo, mdp) {
    let ok = false

    // Nettoyage
    document.getElementById("lblMessagePseudo").innerHTML = ""

    // Tests sur les valeurs
    if (mdp === "") {
        document.getElementById("lblMessagePseudo").innerHTML = "<span style='color:brown'>Champs Obligatoire"
    } else {
        document.getElementById("lblMessagePseudo").innerHTML = "<span style='color:green'>OK"
        ok = true
    }

    return ok
} /// controler

/**
 * 
 * @return {undefined}
 */
function seSouvenir(pseudo, mdp) {
    /*
     * Création cookie avec pseudo et mdp (se souvenir)
     */
    if (navigator.cookieEnabled) {
        console.log("chkSeSouvenir : " + document.getElementById("chkSeSouvenir").checked)
        //if (document.getElementById("chkSeSouvenir").checked) {
        // let dExpires = new Date()
        // dExpires.setYear(2025)
        creerCookie("pseudo", pseudo, 2023)
        creerCookie("mdp", mdp, 2023)

        console.log("Un cookie a été créé !!!")
        document.getElementById("lblMessage").innerHTML = "Un cookie a été créé !!!"

    } else {
        document.getElementById("lblMessage").innerHTML = "Vous avez désactivé les cookies, impossible de me souvenir de vous !!!"
    }
} /// seSouvenir

/**
 * 
 * @param {type} asNomCookie
 * @param {type} asValeur
 * @returns {undefined}
 */
function creerCookie(asNomCookie, asValeur, annee) {
    let dExpires = new Date()
    dExpires.setYear(annee)
    document.cookie = asNomCookie + "=" + asValeur + "; expires=" + dExpires.toGMTString()
} /// creerCookie

/**
 * 
 * @return {undefined}
 */
function lireCookiesPseudoEtMDP() {
    // Renvoie une chaîne de caractères
    let cookies = document.cookie
    let ok = false
    let trouve = 0
    if(cookies!=""){
    console.log("Les cookies")
    console.log(cookies)

    // Chaque cookie est séparé par " "
    let tCookies = cookies.split("; ")
    for (let i = 0; i < tCookies.length; i++) {
        console.log("Un cookie")
        console.log(tCookies[i])
        // Le nom du cookie et sa valeur sont séparés par =
        let tCookie = tCookies[i].split("=")
        console.log("Nom du cookie")
        console.log(tCookie[0])
        console.log("Valeur du cookie")
        console.log(tCookie[1])
        if (tCookie[0] === "pseudo") {
            console.log("Cook pseudo")
            console.log(tCookie[0])
            console.log("Valeur du Cook pseudo")
            console.log(tCookie[1])
            document.getElementById("pseudo").value = tCookie[1]
            trouve++
        }
        if (tCookie[0] === "mdp") {
            console.log("Cook mdp")
            console.log(tCookie[0])
            console.log("Valeur du Cook mdp")
            console.log(tCookie[1])
            document.getElementById("mdp").value = tCookie[1]
            trouve++
        }
    }
}
    else{
        console.log("pas de cookie")
    }//sCookies += tCookie[0] + " -->" + tCookie[1] + "<br>"
    

    if (trouve === 2) {
        ok = true
    }

    //document.getElementById("lblMessage").innerHTML = ok
} /// lireCookie

/**
 * 
 * @return {undefined}
 */
function mdpVisible() {
    console.log("checked prop " + document.getElementById("chkMdpVisible").checked)
    if (document.getElementById("chkMdpVisible").checked) {
        document.getElementById("mdp").type = "text"
    } else {
        document.getElementById("mdp").type = "password"
    }
} /// mdpVisible

/**
 * 
 * @return {undefined}
 */
function mdpOublie() {
    console.clear()
    console.log("mdpOublie")
    /*
     * TODO ...
     */
} /// mdpOublie


/*
 * MAIN
 */
window.onload = initAuthentification