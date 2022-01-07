




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

let URLArtist = "http://localhost:8082/showArtistSQL";
//let to get artists

let URLAlbum = "http://localhost:8082/showAlbumDetail?id_artist=";
//let to get albums

let URLTracks = "http://localhost:8082/getAlbumDetail?id_album=";
//let to get tracks

let URLLyrics = "http://localhost:8082/showTracksLyrics?id_track="
//let to get lyrics

let currentPage = 1;
//let to show the current page

const shownNumberOfPages = 4;
//let to show number of albums per page

let pageSegmentNumber = 1;
//


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

    albumSearch(data)
    console.log(data)

}




function albumSearch(artistListArray) {
    //console.log(data)

    let albumDisplay = ""


    for (item of artistListArray)

        albumDisplay += `<tr class="row"> 
                            <td class=" d-flex justify-content-between">
                                <img src="${item.photo_artist}" width="100px" style= "border-radius:10px">
                                    <span class="fs-3">${item.name_artist}</span><a href="http://${item.site_web_artist}" target=_blank class="text-warning">${item.site_web_artist}</a>
                                <button class="btn btn-success btn-warning">
                                    Details
                                </button>
                            </td>
                        </tr>`

    console.log(albumDisplay)



    //display albumDisplay
    $("#bookSearchOutput").html(albumDisplay);


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

    numberOfBooks = data.total;

    // Affichage de la pagination
    showPagination(numberOfBooks);

}

/////////////////////////////////// Show Pagination////////////
function showPagination(numberOfBooks) {
    const numberOfPages = Math.ceil(numberOfBooks / 4);
    const resultString = ` ${numberOfBooks} résultats page ${currentPage} sur ${numberOfPages}`;

    console.log(resultString);

    // Insertion de resultString dans le DOM
    $("#searchResult").text(resultString);

    // génération des liens vers les pages
    let html = `<li class="page-item">
                   <a href="#" class="page-link" id="prevPageSegment">Précédent</a>
                    </li>`;
    const start = ((pageSegmentNumber -1) * shownNumberOfPages) + 1;
    const end = Math.min(pageSegmentNumber * shownNumberOfPages, numberOfPages);
    for (let page = start; page <= end; page++) {
        let activeClass = "";
        if (currentPage == page) {
            activeClass = "active"
        }
           html += `<li class="page-item ${activeClass}">
                <a href="#" class="page-link page-number">${page}</a>
               </li>`
    }
            
    html += `<li class="page-item">
                <a href="#" class="page-link" id="nextPageSegment">Suivant</a>
            </li>`

    // Insertion des pages dans le DOM
    $(".pagination").html(html);
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
                    <td class="list-group-item d-flex justify-content-between" >
                    <img src="${item.photo_album}" width="60px" style= "border-radius:10px"> 
                        ${item.name_album}
                    <button class="btn btn-success delete btn-warning"> 
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
                    <td><button class="btn btn-success btn-warning">Lyrics</button></td>
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

        html += `<tr><th>Lyrics of ${item.name_track}</th></tr><tr><td>${item.lyrics_track}</td></tr>`;
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
    const searchForm = $("#form");
    

    $("#searchBar").submit(function (event) {
        event.preventDefault();
        
            searchInput = $(this).serialize();
            getArtist(searchInput)

            /*
        if($("#lyricsSearchOutput")!="" || $("#trackSearchOutput")!="" || {
            
        }else{
            $("#lyricsSearchOutput").reset()
            $("#trackSearchOutput").remove()
            $('albumSearchOutput').empty()
        }*/
    })

    /////////////////////////////////////Get Albums Button////////////////////////////////



    $("#artistTable").delegate("tr", "click", function () {
        
        if($('albumSearchOutput')!=""){
            const index = $(this).index();
            showAlbums(artistListArrayId[index]);
           
            console.log(index)
        }else {
            $('albumSearchOutput').reset()
        }
        
        
    });


    /////////////////////////////////////Get Tracks Button////////////////////////////////



    $("#albumTable").delegate("tr", "click", function () {

        const index = $(this).index()
        showTracksDetails(albumDetailArray[index]);
        console.log(index)


        console.log(albumDetailArray[index])


    });

    /////////////////////////////////////Get Lyrics Button////////////////////////////////



    $("#trackTable").delegate("tr", "click", function () {

        const index = $(this).index()
        showTracksLyrics(tracksDetailArray[index - 1]);


        console.log(index - 1)
        console.log(tracksDetailArray[index - 1])

    });


            // réaction au clic sur un numéro de page
            $(".pagination").delegate(".page-number", "click", function () {
                // on enlève la classe "active" de tous les li de la liste
                $(".pagination .page-item").removeClass("active");
                // on ajoute la classe "active" sur le li 
                // parent du lien sur lequel on a cliqué
                $(this).parent().addClass("active");
                // On récupère le numéro de la page cliquée
                // pour changer la valeur de currentPage
                currentPage = $(this).text();

                console.log(currentPage);

                // Au changement de page on masque le détails du livre
                $("#details").hide();

                // Requête pour récupérer les résultats 
                // qui correspondent à la page
                albumInfo();
            });

            $(".pagination").delegate("#nextPageSegment", "click", function(){
                const numberOfPages = Math.ceil(numberOfBooks/4);
                const maxSegment = Math.ceil(numberOfPages / shownNumberOfPages);
                if( pageSegmentNumber < maxSegment){
                    pageSegmentNumber++;
                    showPagination(numberOfBooks);
                } 
            });

            $(".pagination").delegate("#prevPageSegment", "click", function(){
                if(pageSegmentNumber > 1){
                    pageSegmentNumber--;
                    showPagination(numberOfBooks);
                }
            });


})
