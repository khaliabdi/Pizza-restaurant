//mobile menu 
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
});

//tabs
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach(item => item.classList.remove('is-active'))
        tab.classList.add('is-active');

        const target = tab.dataset.target;
        tabContentBoxes.forEach(box => {
            if(box.getAttribute('id') === target){
                box.classList.remove('is-hidden');
            }else{
                box.classList.add('is-hidden');
            }
        });
    })
})

/*button
var a;
function showHide(){

    alert("Du gjorde en endring. Trykk igjen for å hente tilbake endringen");

    if(a==1){
        document.getElementById("dessert").style.display="inline";
        return a=0;
    }
    else{
        document.getElementById("dessert").style.display="none";
        return a=1;
    }
}*/
// Skjul/Vis Dessert
function btnFunction() {

    var btn = document.getElementById("dsrtBtn");

    if (btn.value == "Open") {
        document.getElementById("dessert").style.display="none";
        alert("Du skjulte desserter, trykk igjen for å vise.");
        btn.value = "Closed";
        btn.innerHTML = "Vis Desserter";
    }
    else {
        document.getElementById("dessert").style.display="inline";
        alert("Du viser desserter, trykk igjen for å skjule.");
        btn.value = "Open";
        btn.innerHTML = "Skjul Desserter";
    }
}


// Fjern pizza
function menuItem0() {

    var btn = document.getElementById("button0");

    if (btn.value == "Open") {
        document.getElementById("card0").style.display="none";
        btn.value = "Closed";
        btn.innerHTML = "Legg til meny";
    }
    else {
        document.getElementById("card0").style.display="inline";
        btn.value = "Open";
        alert("Er du sikker på at du vil fjerne pizzaen fra menyen? Trykk på knappen igjen for å fjerne 'Majorspesial' fra ukens meny.");
    }
}

function menuItem1() {

    var btn = document.getElementById("button1");

    if (btn.value == "Open") {
        document.getElementById("card1").style.display="none";
        btn.value = "Closed";
        btn.innerHTML = "Legg til meny";
    }
    else {
        document.getElementById("card1").style.display="inline";
        btn.value = "Open";
        alert("Er du sikker på at du vil fjerne pizzaen fra menyen? Trykk på knappen igjen for å fjerne 'Oliven' fra ukens meny.");
    }
}

function menuItem2() {

    var btn = document.getElementById("button2");

    if (btn.value == "Open") {
        document.getElementById("card2").style.display="none";
        btn.value = "Closed";
        btn.innerHTML = "Legg til meny";
    }
    else {
        document.getElementById("card2").style.display="inline";
        btn.value = "Open";
        alert("Er du sikker på at du vil fjerne pizzaen fra menyen? Trykk på knappen igjen for å fjerne 'Sinsenspesial' fra ukens meny.");
    }
}

function menuItem3() {

    var btn = document.getElementById("button3");

    if (btn.value == "Open") {
        document.getElementById("card3").style.display="none";
        btn.value = "Closed";
        btn.innerHTML = "Legg til meny";
    }
    else {
        document.getElementById("card3").style.display="inline";
        btn.value = "Open";
        alert("Er du sikker på at du vil fjerne pizzaen fra menyen? Trykk på knappen igjen for å fjerne 'Deluxe' fra ukens meny.");
    }
}

function menuItem4() {

    var btn = document.getElementById("button4");

    if (btn.value == "Open") {
        document.getElementById("card4").style.display="none";
        btn.value = "Closed";
        btn.innerHTML = "Legg til meny";
    }
    else {
        document.getElementById("card4").style.display="inline";
        btn.value = "Open";
        alert("Er du sikker på at du vil fjerne pizzaen fra menyen? Trykk på knappen igjen for å fjerne 'Inbakt' fra ukens meny.");
    }
}

function menuItem5() {

    var btn = document.getElementById("button5");

    if (btn.value == "Open") {
        document.getElementById("card5").style.display="none";
        btn.value = "Closed";
        btn.innerHTML = "Legg til meny";
    }
    else {
        document.getElementById("card5").style.display="inline";
        btn.value = "Open";
        alert("Er du sikker på at du vil fjerne pizzaen fra menyen? Trykk på knappen igjen for å fjerne 'Kylling og Løk' fra ukens meny.");
    }
}

function menuItem6() {

    var btn = document.getElementById("button6");

    if (btn.value == "Open") {
        document.getElementById("card6").style.display="none";
        btn.value = "Closed";
        btn.innerHTML = "Legg til meny";
    }
    else {
        document.getElementById("card6").style.display="inline";
        btn.value = "Open";
        alert("Er du sikker på at du vil fjerne pizzaen fra menyen? Trykk på knappen igjen for å fjerne 'Bryggaspesial' fra ukens meny.");
    }
}

function menuItem7() {

    var btn = document.getElementById("button7");

    if (btn.value == "Open") {
        document.getElementById("card7").style.display="none";
        btn.value = "Closed";
        btn.innerHTML = "Legg til meny";
    }
    else {
        document.getElementById("card7").style.display="inline";
        btn.value = "Open";
        alert("Er du sikker på at du vil fjerne pizzaen fra menyen? Trykk på knappen igjen for å fjerne 'Løkkaspesial' fra ukens meny.");
    }
}

function menuItem8() {

    var btn = document.getElementById("button8");

    if (btn.value == "Open") {
        document.getElementById("card8").style.display="none";
        btn.value = "Closed";
        btn.innerHTML = "Legg til meny";
    }
    else {
        document.getElementById("card8").style.display="inline";
        btn.value = "Open";
        alert("Er du sikker på at du vil fjerne pizzaen fra menyen? Trykk på knappen igjen for å fjerne 'Tony's Pepperoni' fra ukens meny.");
    }
}


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
      
