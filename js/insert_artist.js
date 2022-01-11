//////////////////////////////////////////////input Artist//////////////////////////

var resultText = ""

class InputForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name_artist: this.props.name_artist,
            
            
            site_web_artist: this.site_web_artist,
            photo_artist: this.props.photo_artist,
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
        console.log("State " + "name_artist" + " : " + this.state.name_artist)
      
        console.log("State " + "site_web_artist" + " : " + this.state.site_web_artist)
        console.log("State " + "photo_artist" + " : " + this.state.photo_artist)
    } /// handleChangeTextInput



    /*
    SUBMIT EN MODE GET
    */
    handleSubmit(event) {
        event.preventDefault()
        let URL = "http://localhost:8082/artistInsertViaProcStockSQLGET?"
        URL += "name_artist=" + this.state.name_artist
        
        URL += "&site_web_artist=" + this.state.site_web_artist
        URL += "&photo_artist=" + this.state.photo_artist
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

            <div id="centre" classname="article mt-1">
                <legend className="legend">Nouvel artiste</legend>
                <form onSubmit={this.handleSubmit} method="GET">

                    <div className="form-group row">
                        <label for="nom" className="etiquette col-sm col-form-label col-form-label-sm">Name: </label>

                        <div className="col-sm-10">
                            <input type="text" name="name_artist" className="form-control " id="nom" value={this.state.name_artist} onChange={this.handleChangeTextInput} placeholder="Nom de l'artiste *"
                                required />
                        </div>

                    </div>
        
                    <div className="form-group row">
                        <label for="pseudo" className="etiquette col-sm col-form-label col-form-label-sm">Website: </label>
                        <div className="col-sm-10">
                            <input type="text" name="site_web_artist" id="pseudo" value={this.state.site_web_artist} onChange={this.handleChangeTextInput} className="form-control"
                               />
                        </div>

                    </div>


                    <div className="form-group row">
                        <label for="mdp" className="etiquette col-sm col-form-label col-form-label-sm">Photo: </label>
                        <div className="col-sm-10">
                            <input type="text" name="photo_artist" id="mdp" value={this.state.photo_artist} onChange={this.handleChangeTextInput} className="form-control"
                            />

                        </div>

                    </div>

                    <p>
                        <input id="btValider" type="submit" value="Envoyer" />
                    </p>






                </form>

                <br /><br />



            </div>
        )
    } /// render

} /// CLASS

// MAIN
ReactDOM.render(<InputForm />, document.getElementById("app"))
//////////////Fin input Artist///////////////////////////