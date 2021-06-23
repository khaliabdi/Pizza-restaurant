const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
});

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