<script type="text/babel"></script>

        var resultText = ""

        class InputForm extends React.Component {
            constructor(props) {
                super(props)
                this.state = {
                    name_user: this.props.name_user,
                    firstname_user: this.props.firstname_user,
                    email_user: this.props.email_user,
                    pseudo_user: this.props.pseudo_user,
                    password_user: this.props.password_user,
                    password2_user: this.props.password2_user,
                    message: ""
                }

                this.handleChangeTextInput = this.handleChangeTextInput.bind(this)

                this.handleSubmit = this.handleSubmit.bind(this)
            } /// constructor


            /*
            CHANGE
            */
            handleChangeTextInput(event) {
                console.clear()
                const name = event.target.name
                const value = event.target.value
                console.log("name : " + name)
                console.log("value : " + value)
                this.setState({
                    [name]: value /// Pour faire du générique
                    //cp: value
                })
                console.log("State " + "name_user" + " : " + this.state.name_user)
                console.log("State " + "firstname_user" + " : " + this.state.firstname_user)
                console.log("State " + "email_user" + " : " + this.state.email_user)
                console.log("State " + "pseudo_user" + " : " + this.state.pseudo_user)
                console.log("State " + "password_user" + " : " + this.state.password_user)
                console.log("State " + "password2_user" + " : " + this.state.password2_user)
            } /// handleChangeTextInput



            /*
            SUBMIT EN MODE GET
            */
            handleSubmit(event) {
                event.preventDefault()
                let URL = "http://localhost:8082/userInsertViaProcStockSQLGET?"
                URL += "name_user=" + this.state.name_user
                URL += "&firstname_user=" + this.state.firstname_user
                URL += "&email_user=" + this.state.email_user
                URL += "&pseudo_user=" + this.state.pseudo_user
                URL += "&password_user=" + this.password_user
                URL += "&password2_user=" + this.password2_user
                URL += "&role_user="+
                console.log(URL)
                fetch(URL)
                    .then(response => {
                        console.log("RESPONSE")
                        console.log(response)
                        return response.json()
                    })
                    .then((result) => {
                        console.log("RESULT")
                        // Tableau ordinal contenant 0 ou 1 objet JSON
                        console.log(result)
                        if (result.affectedRows == 1) {
                            resultText = "Insertion réussie !"

                        } else {
                            resultText = "Insertion ratée !"
                            resultText = result[0]
                        }
                        console.log("resultText")
                        console.log(resultText)
                        this.setState({ message: resultText })
                    },
                        (error) => {
                            // Erreur HTTP
                            console.log(error)
                        }
                    )
            } /// handleSubmit


            render() {
                return (

                    <div id="centre" classname="article">
                        <legend className="legend">Inscription</legend>
                        <form onSubmit={this.handleSubmit} method="GET">
                            <div>
                                <label className="etiquette">Civilité: </label>
                                <div>
                                    <input type="radio" name="civilite" id="civilite_H" value="H" className="obligatoire " required/>
                                    <label for="civilite_H">Monsieur </label>
                                    <input type="radio" name="civilite" id="civilite_F" value="F" className="obligatoire" />
                                    <label for="civilite_F">Madame </label>
                                    <label className="texteRouge">*</label>
                                    <label id="lblMessageSexe"></label>
                                </div>
                            </div>


                            <div className="form-group row">
                                <label for="nom" className="etiquette col-sm-2 col-form-label col-form-label-sm">Nom: </label>

                                <div className="col-sm-10">
                                    <input type="text" name="name_user" className="form-control w-25" id="nom" value={this.state.name_user} onChange={this.handleChangeTextInput} placeholder="Votre nom *"
                                        required />
                                </div>
                                <label id="lblMessageNom"></label>
                            </div>




                            <div className="form-group row">
                                <label for="nom" className="etiquette col-sm-2 col-form-label col-form-label-sm">Prénom: </label>
                                <div className="col-sm-10">
                                    <input type="text" name="firstname_user" id="prenom" required value={this.state.firstname_user} onChange={this.handleChangeTextInput} className="form-control w-25"
                                        placeholder="Votre prénom *" required/>

                                </div>
                                <label id="lblMessagePrenom"></label>
                            </div>


                            <div className="form-group row">
                                <label for="email" className="etiquette col-sm-2 col-form-label col-form-label-sm">E-mail: </label>
                                <div className="col-sm-10">
                                    <input type="text" name="email_user" id="email" className="form-control w-25"
                                        value={this.state.email_user} onChange={this.handleChangeTextInput} placeholder="Votre mail *" required/>
                                </div>
                                <label id="lblMessageEmail"></label>
                            </div>


                            <div className="form-group row">
                                <label for="pseudo" className="etiquette col-sm-2 col-form-label col-form-label-sm">Pseudo: </label>
                                <div className="col-sm-10">
                                    <input type="text" name="pseudo_user" id="pseudo" value={this.state.pseudo_user} onChange={this.handleChangeTextInput} className="form-control w-25"
                                        placeholder="Votre pseudo *" required/>
                                </div>
                                <label id="lblMessagePseudo"></label>
                            </div>


                            <div className="form-group row">
                                <label for="mdp" className="etiquette col-sm-2 col-form-label col-form-label-sm">Mot de passe: </label>
                                <div className="col-sm-10">
                                    <input type="password" name="password_user" id="mdp" value={this.state.password_user} onChange={this.handleChangeTextInput} className="form-control w-25"
                                        placeholder="Votre mot de passe *" />

                                </div>
                                <label id="lblMessageMDP"></label>
                            </div>


                            <div className="form-group row">
                                <label for="mdp2" className="etiquette col-sm-2 col-form-label col-form-label-sm">Retapez le mot de passe:
                                </label>
                                <div className="col-sm-10">
                                    <input type="password" name="password2_user" id="mdp2" value={this.state.password2_user} onChange={this.handleChangeTextInput} className="form-control w-25"
                                        placeholder="Votre mot de passe *" required/>
                                </div>
                                <label id="lblMessageMDP2"></label>
                            </div>

                            <p>
                                <input id="btValider" type="submit" value="Envoyer"/>
                            </p>
                            <div>
                                <p> * sont obligatoires.</p>
                            </div>
                        </form>

                        <br /><br />

                        <p>Déjà inscrit? Connectez-vous <a href='authentification.html'>ici</a> </p>
                        <p>
                            {this.state.message}
                        </p>

                    </div>
                )
            } /// render

        } /// CLASS

        // MAIN
        ReactDOM.render(<InputForm />, document.getElementById("app"))

    