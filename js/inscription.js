document.getElementById('civilite_H').onchange = getSexe
document.getElementById('civilite_F').onchange = getSexe
document.getElementById('nom').onchange = getName
document.getElementById('prenom').onchange = getFirstname

document.getElementById('email').onchange = getEmail

document.getElementById('pseudo').onchange = getPseudo
document.getElementById('mdp').onchange = getMdp
document.getElementById('mdp2').onchange = getMdp2


document.getElementById('btValider').onclick = valider


var trueEmail = new RegExp("[A-z0-9._-]+[@]{1}[A-z0-9._-]+[.]{1}[A-z]{2,10}");
var goodName = new RegExp("^[a-zA-Z]+$")
var goodDate = new RegExp("^\\d{1,2}/\\d{1,2}/\\d{4}$")

/*------------------------Fonctions pour effacer les messages d'erreur ou rien afficher si le renseignemeent es correct---------------*/
function messageSexe() {
    let text = document.getElementById('lblMessageSexe')
    if (text != '') {
        document.getElementById('lblMessageSexe').innerHTML = ''
    }
 }
function messageNom() {
    let text = document.getElementById('lblMessageNom')
    if (text != '') {
        document.getElementById('lblMessageNom').innerHTML = ''
    }
 }
 function messagePrenom() {
    let text = document.getElementById('lblMessagePrenom')
    if (text != '') {
        document.getElementById('lblMessagePrenom').innerHTML = ''
    }
 }
 function messageEmail() {
    let text = document.getElementById('lblMessageEmail')
    if (text != '') {
        document.getElementById('lblMessageEmail').innerHTML = ''
    }
 }
 
 function messagePseudo() {
    let text = document.getElementById('lblMessagePseudo')
    if (text != '') {
        document.getElementById('lblMessagePseudo').innerHTML = ''
    }
 }
 function messageMDP() {
    let text = document.getElementById('lblMessageMDP')
    if (text != '') {
        document.getElementById('lblMessageMDP').innerHTML = ''
    }
 }
 function messageMDP2() {
    let text = document.getElementById('lblMessageMDP2')
    if (text != '') {
        document.getElementById('lblMessageMDP2').innerHTML = ''
    }
 }
 
 
 



 //-----------------------------------------------------------------------------------------------------------------------------
function getSexe() {

   if (document.getElementById('civilite_H').checked === true) {
       console.log('H')
   } else if (document.getElementById('civilite_F').checked === true) {
       console.log('F')
   } else {
       document.getElementById('lblMessageSexe').insertAdjacentHTML('beforeend', '<p style="color:brown">Vous devez entrer un sexe valide</p>')
   }
}



function getName() {
   let name = nom.value
   console.log(name);
   if (name == '') {
       document.getElementById('lblMessageNom').insertAdjacentHTML('beforeend', '<p style="color:brown">Vous devez entrer un nom valide</p>')
   } else if (!goodName.test(name)) {
       document.getElementById('lblMessageNom').insertAdjacentHTML('beforeend', '<p style="color: brown">Votre nom n\'est pas correct</p>')
   }
}
function getFirstname() {
   let firstname = prenom.value
   console.log(firstname);
   if (firstname == '') {
       document.getElementById('lblMessagePrenom').insertAdjacentHTML('beforeend', '<p style="color:brown">Vous devez entrer un prénom valide</p>')
   } else if (!goodName.test(firstname)) {
       document.getElementById('lblMessagePrenom').insertAdjacentHTML('beforeend', '<p style="color: brown">Votre prénom n\'est pas correct</p>')
   }
}

function getEmail() {
   let newEmail = email.value
   console.log(newEmail)

   if (newEmail == '') {
       document.getElementById('lblMessageEmail').insertAdjacentHTML('beforeend', '<p style="color:brown">Vous devez entrer un email</p>')
   } else if (!trueEmail.test(newEmail)) {
       document.getElementById('lblMessageEmail').insertAdjacentHTML('beforeend', '<p style="color:brown">Vous devez entrer un bon email bordel</p>')
   }
}




function getPseudo() {
   let newPseudo = pseudo.value
   console.log(newPseudo);
   if (newPseudo == '') {
       document.getElementById('lblMessagePseudo').insertAdjacentHTML('beforeend', '<p style="color:brown">Vous devez entrer un pseudo valide</p>')
   }
}
function getMdp() {
   let password = mdp.value
   console.log(password);
   if (password == '') {
       document.getElementById('lblMessageMDP').insertAdjacentHTML('beforeend', '<p style="color:brown">Vous devez entrer un mot de passe valide</p>')
   }
}

function getMdp2() {
   let password2 = mdp2.value
   let password = mdp.value
   console.log(password2);
   if (password2 == '') {
       document.getElementById('lblMessageMDP2').insertAdjacentHTML('beforeend', '<p style="color:brown">Les mots de passe sont differents </p>')
   } else if (password2 != password) {
       document.getElementById('lblMessageMDP2').insertAdjacentHTML('beforeend', '<p style="color:brown">Vous devez entrer le meme mot de passe similaire</p>')
   }
}







/*-------------------------Fonction valider() pour le clic---------------------------------------------*/


function valider(event) {
   event.preventDefault()
   
   messageNom()
   messagePrenom()
   messageEmail()
   
   messageMDP()
   messageMDP2()
   messagePseudo()
   
   messageSexe()

   getSexe()
   getName()
   getFirstname()
   getEmail()
   
   getPseudo()
   getMdp()
   getMdp2()
   
}
