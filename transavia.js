/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/




//Javascript wil ik gebruiken om de filter te kunnen uitklappen als je erop klikt.
console.log(1);
var button = document.querySelector('button');

//console.log(button);


// Hier heb ik de functie gemaakt, dus wat er zou moeten gebeuren als je op de filter button klikt.
function klapOpen () {
//console.log('hoi');
var formulier = document.querySelector('div>form');
formulier.classList.toggle('active');
}

button.addEventListener('click', klapOpen);


// Zo like je het hartje//
var favoriet = document.querySelector("article>button:first-of-type");

function hartje(){
    console.log("hoi");

    var beating = document.querySelector(".profiel");
    beating.classList.remove('.profiel');

        beating.id = 'profiel';
        profiel.src = "toegevoegd.png";

    var toevoegen = document.querySelector("button>img");
        toevoegen.id = 'hart';
        hart.src = "geliked.png";
}

favoriet.addEventListener('click', hartje);





//download buttontje//

var downloadbutton = document.querySelector(".downloadbutton");

function downloaden(){
    var draaien = document.querySelector(".downloadbutton>img");
    draaien.src = "ronddownloaden.png";
    draaien.id='draairondje';
}

downloadbutton.addEventListener('click', downloaden);








