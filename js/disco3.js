
/////////////////////////////////all variables/////////////////////////////


let searchInput = ""
//Variable for the search

let artistListArray = []
//Variable to manage artist

let artistListArrayId = []
//Variable to manage artist

let albumDetailArray = []
//Variable to manage albums

let tracksDetailArray = []
//Variable to manage tracks

let tracksLyricsArray = []
//Variable to manage lyrics

let URL = "http://localhost:8082/showArtistSQL"
//Road to get artists

let URLAlbum = "http://localhost:8082/showAlbumDetail?id_artist="
//Road to get albums

let URLTracks = "http://localhost:8082/getAlbumDetail?id_album="
//Road to get tracks

let URLLyrics = "http://localhost:8082/showTracksLyrics?id_track="
//Road to get lyrics





////////////////////////////Show Artist/////////////////////////////////////


async function getArtist() {

    const response = await fetch(URL + "?" + searchInput)
    console.log(URL + "?" + searchInput + '/')


    const data = await response.json();
    console.log(data)

    artistListArray = data

    for (index in artistListArray) {

        let artistIndex = artistListArray[index].name_artist

        artistListArrayId.push(artistIndex)

        console.log(artistIndex)

    }

    console.log(artistListArray)

    albumSearch(data)
    console.log(data)

}


function albumSearch(artistListArray) {


    let albumDisplay = ""


    for (item of artistListArray)

        albumDisplay += `<tr class="row"> <td class=" d-flex justify-content-between"><img src="${item.photo_artist}" width="100px" style= "border-radius:10px">${item.name_artist}<button class="btn btn-success delete">Details</button></td></tr>`

    console.log(albumDisplay)



    $("#bookSearchOutput").html(albumDisplay);


}


/////////////////////////////End of Show Artist//////////////////////////////////



/////////////////////////////Show Albums////////////////////////////////////////


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

        html += `<tr><td class="list-group-item d-flex justify-content-between" ><img src="${item.photo_album}" width="60px" style= "border-radius:10px"> 
            ${item.name_album}<button class="btn btn-success delete ">Details</button> 
        </td></tr>`
    }

    console.log(html);

    $("#albumSearchOutput").html(html);

}



////////////////////////////////End of Show Albums///////////////////////////////////


/////////////////////////////////Show Tracks////////////////////////////////////////

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


    for (item of tracksDetailArray) {

        html2 += `<tr>
                    <th>${item.name_track}</th>
                    <td>${item.duration_track} min</td>
                    <td>${item.order_title_track}</td>
                    <td>${item.author_track}</td>
                    <button class="btn btn-success delete>
                        Lyrics
                    </button>
                  </tr>`;
    }

    console.log(html2);
    console.log(item.name_track)

    $("#trackSearchOutput").html(html2);

}

function showTracksDetails(data) {

    trackURL = (URLTracks + data.id_album)
    console.log(data.id_album)
    console.log(trackURL)

    trackInfo(trackURL)


}
//////////////////////////////End Of Show Tracks//////////////////////////////////////



/////////////////////////////////Show Lyrics////////////////////////////////////////

async function lyricsInfo(lyricURL) {

    const responseLyrics = await fetch(lyricURL)

    if (!responseLyrics.ok) {
        throw "erreur du serveur";
    }
    const dataLyrics = await responseLyrics.json();
    console.log(dataLyrics)
    tracksLyricsArray = dataLyrics

    console.log(tracksLyricsArray)

    showTracksLyrics(tracksLyricsArray)
}

function showTracksLyrics(tracksLyricsArray) {
    let html3 = "";
    for (item of tracksLyricsArray) {
        html3 += `<tr><td class="list-group-item d-flex justify-content-between">Lyrics of ${item.name_track}</td></tr><tr><td>${item.lyrics_track}</td></tr>`
        console.log(html3)
    }
    $("#lyricsSearchOutput").html(html3)


}

function showLyricsList(data) {
    lyricURL = (URLLyrics + data.id_track)
    console.log(data.id_track)
    console.log(lyricURL)

    lyricsInfo(lyricURL)
}


///////////////////////////////////////////End Of Show Lyrics///////////////////////






////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////MGMT of Buttons////////////////////////////
////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////Search Button////////////////////////////////


$(document).ready(function () {


    $("#searchBar").submit(function (event) {
        event.preventDefault();

        searchInput = $(this).serialize();
        getArtist(searchInput)




    })

    //////////////////////////////////////// Button Show Albums///////////////////////


    $("#artistTable").delegate("tr", "click", function () {

        const index = $(this).index();
        showAlbums(artistListArrayId[index]);

        console.log(index)

    });


    ///////////////////////////////////Button Show Tracks/////////////////////////////



    $("#albumTable").delegate("tr", "click", function () {

        const index = $(this).index()
        showTracksDetails(albumDetailArray[index]);
        console.log(index)


        console.log(albumDetailArray[index])


    });



    ///////////////////////////////////Button Show Lyrics/////////////////////////////

    $("#trackTable").delegate("tr", "click", function () {
        const index = $(this).index()
        showLyricsList(tracksDetailArray[index])

        console.log(index)
        console.log(tracksDetailArray[index])
    })

})




