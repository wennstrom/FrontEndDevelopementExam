var images = document.getElementsByClassName("slides");
var index = 1;

function ArrowClick(n) {
    DisplayPicture(index += n);
}

function DisplayPicture(n) {
    if (index < 1) {
        //displays last image
        index = images.length;
    }

    if (index > images.length) {
        //displays first image
        index = 0;
    }
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[index - 1].style.display = "block";
}