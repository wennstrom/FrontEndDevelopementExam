var playlist = [
    { SongName: "Mr.Brightside", Artist: "The Killers", AlbumPicUrl: "../Img/Albums/HotFuss.png" },
    { SongName: "No Role Modelz", Artist: "JCole", AlbumPicUrl: "../Img/Albums/ForestHillsDrive.jpg" },
    { SongName: "Love Is Only A Feeling", Artist: "Joey Bada$$", AlbumPicUrl: "../Img/Albums/LoveIsOnlyAFeeling.jpg" },
    { SongName: "Weekend In Paradise", Artist: "JAMIE WEBSTER", AlbumPicUrl: "../Img/Albums/weekendinparadise.jpg" },
    { SongName: "Marvins Room", Artist: "Drake", AlbumPicUrl: "../Img/Albums/takecare.jpg" },
    { SongName: "Ocean Eyes", Artist: "Billie Eilish", AlbumPicUrl: "../Img/Albums/dontsmileatme.jpg" },
    { SongName: "When Doves Cry", Artist: "Prince", AlbumPicUrl: "../Img/Albums/purplerain.jpg" },
    { SongName: "Fast Car", Artist: "Tracy Chapman", AlbumPicUrl: "../Img/Albums/tracychapman.jpg" },
    { SongName: "Take On Me", Artist: "a-Ha", AlbumPicUrl: "../Img/Albums/aha.jpg" },
    { SongName: "Heartbeats", Artist: "José González", AlbumPicUrl: "../Img/Albums/veneer.jpg" },
    { SongName: "Mad World", Artist: "Lily Allen", AlbumPicUrl: "../Img/Albums/madworld.jpg" }
]

function OnStart() {
    // FillPlaylist(playlist);
    ChangeWelcomePhrase();
}
function ChangeWelcomePhrase() {
    var time = new Date(Date.now());
    time = time.getHours();
    var message = document.getElementById("Welcome-Phrase");

    if (time < 11 && time >= 03) {
        message.innerHTML = "Good Morning";
    }
    if (time < 15 && time >= 11) {
        message.innerHTML = "Good Day"
    }
    if (time < 18 && time >= 15) {
        message.innerHTML = "Good Afternoon"
    }
    if (time < 03 || time >= 18) {
        message.innerHTML = "Good Evening"
    }

}
function OnFilter() {
    ClearPlaylist();
    var searchQuery = document.getElementById("searchInput").value;
    FillPlaylist(FilterPlaylist(searchQuery));
}

function FillPlaylist(playlist) {
    // gets tablebody
    var tableBody = document.getElementById("playlistBody");

    // loops through playlist to add songs
    for (var i = 0; i < playlist.length; i++) {
        //creates a new row and inserts it
        var row = tableBody.insertRow(i);

        //inserts cells to row
        var artistCell = row.insertCell(0);
        var titleCell = row.insertCell(1);
        var imgCell = row.insertCell(2);


        //creates album cover img
        var albumCover = document.createElement("img");
        albumCover.src = playlist[i].AlbumPicUrl;

        //adds content to the cells
        imgCell.appendChild(albumCover);
        titleCell.appendChild(document.createTextNode(playlist[i].SongName));
        artistCell.appendChild(document.createTextNode(playlist[i].Artist))
    }
}
function ClearPlaylist() {
    var playlistBody = document.getElementById("playlistBody");
    playlistBody.innerHTML = "";
}
function FilterPlaylist(searchQuery) {
    var result = new Array();
    playlist.forEach(song => {
        if (song.SongName.toLowerCase().includes(searchQuery.toLowerCase()) || song.Artist.toLowerCase().includes(searchQuery.toLowerCase())) {
            result.push(song);
        }
    });
    return result;
}