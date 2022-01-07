function init(anImages) {
    for (i = 0; i < anImages; i++) {
        tImages[i] = new Image();
        tImages[i].src = "../images/vinyle" + i + ".jpeg";
    }
    i = 0;
    window.setInterval(changerImage, 2500);
} /// init
/**
 *
 * @returns {undefined}
 */
function changerImage() {
    photo.src = tImages[i].src;
    photo.alt = "Image : " + i + ".jpeg";
    i++;
    if (i === tImages.length) {
        i = 0;
    }
} /// changerImage
/*
 * MAIN
 */
var i;
var tImages = new Array();
var photo = document.getElementById("photo");
window.onload = init(7);
//////////////////////////////////////////////////////////////////////


tracksListArray = []
tracksListArrayAll= []

let tracks = 'http://localhost:8082/showTracksByName'
let albums= 'http://localhost:8082/showAlbumSQL'
let artists = 'http://localhost:8082/showTracks'
let searchInput = ""

async function showTrack() {
    

    

    const response = await fetch(tracks + "?"+ searchInput)
    
    console.log(tracks + "?"+ searchInput)
    
    const data = await response.json();
    console.log(data)
    
    tracksListArray = data

    for (index in tracksListArray){

        let artistList = tracksListArray[index]

        tracksListArrayAll.push(artistList)

        console.log(artistList)

        

    }


    console.log(tracksListArray)

    getAlbumSearch(data)
    console.log(data)

}


function getAlbumSearch(data) {
    console.log(data)

    let albumSearch = ""

    for (item of data) {

        albumSearch += '<tr class="row"> <td class="align-middle col-10">' + item.name_track + '</td> <td class="bookSearch-end col-2"><button class="btn btn-success delete">Détails</button></td></tr>'
    }

    


    //display bookSearch
    $("#trackSearchOutput").html(albumSearch);

    
    
    
}


$(document).ready(function(){

    $('#itemSearch').submit(function(event){

event.preventDefault();
searchInput= $(this).serialize()
showTrack(searchInput)

})
})