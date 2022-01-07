function formToObject(formElement) {
    postedData = new FormData(formElement);
 
    // on peux avoir les  valeurs saisies avec la method get


    //Comment récupérer touts les saisies du formulaire dans un objet?
    /*
        data = {
            firstName: "valeur",
            age: "autrevaleur",...
    }
    */

    const data = {};

    for (info of postedData.entries()) {

        console.log(info[0], info[1]);

        const key = info[0];
        const val = info[1];
        data[key] = val;

    }
    return data;

}
