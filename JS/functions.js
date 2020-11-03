var subdisplaycounter = 0;
var subsubdisplaycounter = 0;


function OnStart() {
    ChangeWelcomePhrase();
    AddCurrentYearToFooter();
}

function AddCurrentYearToFooter() {
    var footerYear = document.getElementById("currentYear");
    var currentyear = new Date().getFullYear();
    footerYear.innerHTML = " " + currentyear;
}

function ChangeWelcomePhrase() {
    AddCurrentYearToFooter();
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
function DisplaySubMenu() {
    var submenu = document.getElementById("submenu");
    subdisplaycounter++;

    if (subdisplaycounter % 2 === 0) {
        subdisplaycounter = 0;
        submenu.style.display = "none";
    }
    else {
        submenu.style.display = "block";
    }
}
function DisplaySubSubMenu() {
    var subsubmenu = document.getElementById("subsubmenu");
    var submenu = document.getElementById("submenu");
    subsubdisplaycounter++;

    if (subsubdisplaycounter % 2 === 0) {
        subsubdisplaycounter = 0;
        subsubmenu.style.display = "none";
        submenu.style.borderBottomRightRadius = "10px";
    }
    else {
        submenu.style.borderBottomRightRadius = "0px";
        subsubmenu.style.display = "inline-block";
    }
}