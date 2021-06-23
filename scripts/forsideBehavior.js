/* Variablene */
let i = 0;
let images = [];
let time = 3000;

// Bilde liste
images[0] = "images/pizzaBilde1.jpg";
images[1] = "images/pizzaBilde2.jpg";
images[2] = "images/pizzaBilde3.jpg";
images[3] = "images/pizzaBilde4.jpg";
images[4] = "images/pizzaBilde5.jpg";

// Funksjonen for å bytte bildene
function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;


function openPage(){
    var x = document.getElementById("search").value;


    if(x==="allergener" || x==="Allergener" || x==="ALLERGENER"){
        window.open("allergener.html");
    }
    if(x==="forside" || x==="Forside" || x==="FORSIDE"){
        window.open("forside.html");
    }
    if(x==="salg" || x==="Salg" || x==="SALG"){
        window.open("salg.html");
    }
    if(x==="fortjeneste" || x==="Fortjeneste" || x==="FORTJENESTE"){
        window.open("fortjeneste.html");
    }
    if(x==="ansatte" || x==="Ansatte" || x==="ANSATTE"){
        window.open("ansatteside.html");
    }
    if(x==="restauranter" || x==="Restauranter" || x==="RESTAURANTER"){
        window.open("resturanter.html");
    }
    if(x==="meny" || x==="Meny" || x==="MENY"){
        window.open("gyldnemeny.html");
    }
}

// Burger på Navbaren
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
});
