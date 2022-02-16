




let searchInput = ""
//Let for the research

let artistListArray = []
//let to manage the artist list

let artistListArrayId = []
//let to manage the artist list

let albumDetailArray = []
//let to manage the album list

let tracksDetailArray = []
//let to manage the tracks list

let tracksLyricsArray = []
//let to manage the lyrics list

let albumsArray =[]

let URLArtist = "http://localhost:8082/showArtistByName";
//let to get artists

let URLAlbum = "http://localhost:8082/showAlbumDetail?id_artist=";
//let to get albums

let URLTracks = "http://localhost:8082/getAlbumDetail?id_album=";
//let to get tracks

let URLLyrics = "http://localhost:8082/showTracksLyrics?id_track="
//let to get lyrics

let URLAllAlbums= "http://localhost:8082/showAlbums";

let URLAllArtist = "http://localhost:8082/showArtists";


////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////Get Artist/////////////////////////////////////

async function getArtist() {

    const response = await fetch(URLArtist + "?" + searchInput)
    console.log(URLArtist + "?" + searchInput + '/')


    const data = await response.json();
    console.log(data)

    artistListArray = data

    for (index in artistListArray) {

        let artistIndex = artistListArray[index].name_artist

        artistListArrayId.push(artistIndex)

        console.log(artistIndex)

    }


    console.log(artistListArray)

    albumSearch(artistListArray)
    console.log(data)

    

}




function albumSearch(artistListArray) {
    //console.log(data)

    let albumDisplay = ""

 
    for (item of artistListArray)

        albumDisplay += `<tr class="row"> 
                            <td class=" d-flex justify-content-between">
                                <img src="${item.photo_artist}" width="100px" style= "border-radius:10px">
                                    <span class="fs-3 text-light">${item.name_artist}</span><a href="http://${item.site_web_artist}" target=_blank class="text-light">${item.site_web_artist}</a>
                                <button class="btn btn-success btn-light">
                                    Details
                                </button>
                                
                            </td>
                        </tr>`

    console.log(albumDisplay)



    //display albumDisplay
    $("#artistSearchOutput").html(albumDisplay);


}


///////////////////////////////////End Get Artist/////////////////////////////////////

/////////////////////////////////////Get Albums/////////////////////////////////////

async function albumInfo(albumURL) {

    const responseIn = await fetch(albumURL)

    if (!responseIn.ok) {
        throw "Erreur du serveur";
    }
    const dataInAlbum = await responseIn.json();


    albumDetailArray = dataInAlbum

    console.log(albumDetailArray)


    showAlbumList(albumDetailArray)

    
}


function showAlbums() {

    albumURL = (URLAlbum + artistListArray[index].id_artist)
    console.log(albumURL)

    albumInfo(albumURL)



}


function showAlbumList(albumDetailArray) {
    let html = "";
    console.log(albumDetailArray)

    for (item of albumDetailArray) {

        html += `<tr>
                    <td class="list-group-item d-flex justify-content-between text-light" >
                    <img src="${item.photo_album}" width="60px" style= "border-radius:10px"> 
                        ${item.name_album}
                    <button class="btn btn-success btn-light"> 
                       Details
                    </button>   
                    
                    </td>
                </tr>`


    }

    console.log(html);


    $("#albumSearchOutput").html(html);

}

/////////////////////////////////////End Get Albums///////////////////////////////////

/////////////////////////////////////Get Tracks//////////////////////////////////////


async function trackInfo(trackURL) {

    const responseTrack = await fetch(trackURL)

    if (!responseTrack.ok) {
        throw "Erreur du serveur";
    }
    const dataInArray = await responseTrack.json();
    console.log(dataInArray)

    tracksDetailArray = dataInArray



    console.log(tracksDetailArray)


    showTrackList(tracksDetailArray)

}



function showTrackList(tracksDetailArray) {
    let html2 = "<tr><th>Name</th><th>Duration</th><th>Order Track</th><th>Author</th><th>Lyrics</th></tr>";
    console.log(tracksDetailArray)

    for (item of tracksDetailArray) {

        html2 += `<tr>
                    <th>${item.name_track}</th>
                    <td>${item.duration_track} min</td>
                    <td>${item.order_title_track}</td>
                    <td>${item.author_track}</td>
                    <td>
                        <button class="btn btn-success btn-light">Lyrics</button>
                    </td>  
                   
                  </tr>`;
    }

    console.log(html2);
    console.log(item.name_track)
    console.log(index)
    $("#trackSearchOutput").html(html2);
   

}
function showTracksDetails(data) {

    trackURL = (URLTracks + data.id_album)
    console.log(data.id_album)
    console.log(trackURL)

    trackInfo(trackURL)


}

/////////////////////////////////////End Get Tracks///////////////////////////////////


/////////////////////////////////////Get Lyrics//////////////////////////////////////

async function trackLyric(lyricsURL) {

    const responseLyrics = await fetch(lyricsURL)

    if (!responseLyrics.ok) {
        throw "Erreur du serveur";
    }
    const dataLyrics = await responseLyrics.json();
    console.log(dataLyrics)

    tracksLyricsArray = dataLyrics



    console.log(tracksLyricsArray)


    showLyricsList(tracksLyricsArray)

}

function showTracksLyrics(item) {
    lyricsURL = (URLLyrics + item.id_track)
    console.log(lyricsURL)
    //console.log(data.id_track)
    trackLyric(lyricsURL)
}



function showLyricsList(tracksLyricsArray) {
    let html = "";


    for (item of tracksLyricsArray) {

        html += `<tr><th class="text-light">Lyrics of ${item.name_track}</th></tr><tr><td>${item.lyrics_track}</td></tr>`;
    }

    console.log(html);
    console.log(item.lyrics_track)

    $("#lyricsSearchOutput").html(html);

}

/////////////////////////////////////End Get Lyrics///////////////////////////////////




/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////MGMT of the Buttons//////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////Search Buttons///////////////////////////////////


$(document).ready(function () {
  
    
    
        $("#searchBar").submit(function (event) {
            event.preventDefault()
            searchInput = $(this).serialize();
            getArtist(searchInput)
            

    })
        
    

    /////////////////////////////////////Get Albums Button////////////////////////////////



    $("#artistTable").delegate("tr", "click", function () {
        
       
            const index = $(this).index();
            showAlbums(artistListArrayId[index]);
           
            console.log(index)
        
        
        
    });


    /////////////////////////////////////Get Tracks Button////////////////////////////////



    $("#albumTable").delegate("tr", "click", function () {

        const index = $(this).index()
        showTracksDetails(albumDetailArray[index]);
        console.log(index)
        $(document).ready(function(){
            (function(){
                
                
                    this.$("#albumSearchOutput").addClass("bg-light")
                })
            
        });


        console.log(albumDetailArray[index])


    });

    /////////////////////////////////////Get Lyrics Button////////////////////////////////

    

    $("#trackTable").delegate("tr", "click", function () {

        const index = $(this).index()
        showTracksLyrics(tracksDetailArray[index - 1]);


        console.log(index - 1)
        console.log(tracksDetailArray[index - 1])

    });


           

           


})
