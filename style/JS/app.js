// exo 1

var h2 = document.querySelector("#exo-panel h2")




// exo 2 

let check = true
let bouton = document.querySelector("#exo-2-panel > button");

function push() {
    let bouton = document.querySelector("#exo-2-panel > button")
    if (check == true) {
        bouton.classList.remove("bg-primary");
        bouton.classList.add("bg-dark"); bouton.textContent = "tu as cliqué"; return check = false;
    }


    if (check == false) {
        bouton.classList.remove("bg-dark"); // suppresion de la classe bg dark et
        bouton.classList.add("bg-primary"); // ajout de la primary
        bouton.textContent = "Click moi ";
        return check = true;

    };
}


bouton.addEventListener("click", push);






//btn.addEventListener("click", push, true);

//exo 3 

let navButton = document.querySelectorAll(".select a ")
let pannel = document.querySelectorAll("#pannel-contener .pannel")
let panelActive = document.querySelector("#pannel-contener .active")

let displayPannel = function (event) { //fonction de changement de DIV

    event.preventDefault(); // evite le rechargement de la page lorsqu on clique 

    let panelActive = document.querySelector("#pannel-contener .active") // defini le PanelActive 

    panelActive.classList.remove("active"); // supprime la classe active 



    let activeButton = document.querySelector(".select .active") // defini le bouton active 

    activeButton.classList.remove("active"); // supprime la classe du bouton 

    event.target.classList.add("active"); //ajoute la classe active au bouton / event

    let position = event.target.getAttribute("data-position") // mettre une variable position pour connaitre la position de la div 

    let divCorrespondante = document.querySelector("#exo-" + position + "-panel");

    if (divCorrespondante) {
        divCorrespondante.classList.add("active"); // si la position est correcte, affiche la dive 
    } else {
        panelActive.classList.add("active"); // rend la div qu on quitte active et visible 
        console.log("pas de div correspondante ")

    }
};
let Titre = document.querySelector(".titre h1").innerHTML


let ChangeText = function (event) {


    document.querySelector(".titre h1").innerHTML = event.target.innerHTML // selection le texte du  bouton 
    // met le texte du titre en variable 

}

let Returntext = function (event) {



    document.querySelector(".titre h1").innerHTML = Titre

}

navButton.forEach(element => {
    element.addEventListener("click", displayPannel);
    element.addEventListener("mouseover", ChangeText); element.addEventListener("mouseout", Returntext)
});


// -----------------------------------------------------------------------------------

let submit = document.querySelector("#exo-3-panel button")


let displayName = function (event) {
    event.preventDefault();


    let userInput = document.querySelector("#exo-3-panel input").value;
    document.querySelector("h2 span").innerText = userInput;
    document.querySelector("#exo-3-panel input").value = "";

}

submit.addEventListener("click", displayName);


// ---------------------- exo4 --------------->


let btnSwitch = document.querySelector("#exo-4-panel > div.row.justify-content-center > button");
let parent1 = document.querySelector("#rec1");
let parent2 = document.querySelector("#rec2");
let enfant = document.querySelector("#dev");

// let ChangeDiv = function (element) {

//     console.log("clic")
//     let enfant = document.querySelector("#dev");

//     if (document.querySelector("#rec1").innerHTML) {

//         document.querySelector("#rec2").innerHTML = document.querySelector("#rec1").innerHTML;
//         document.querySelector("#rec1").innerHTML = null
//     } else {

//         document.querySelector("#rec1").innerHTML = document.querySelector("#rec2").innerHTML
//         document.querySelector("#rec2").innerHTML = null

//     }

// }

let numberCount = document.querySelector("#count")


let ChangeDiv = function (element) {



    console.log("clic")
    let enfant = document.querySelector("#dev");

    if (document.querySelector("#rec1").childElementCount > 0) {
        document.querySelector("#rec2").appendChild(enfant); enfant.style.backgroundColor = "green";
    } else {
        document.querySelector("#rec1").appendChild(enfant); enfant.style.backgroundColor = "red"

    }
    numberCount.innerText++;





}



btnSwitch.addEventListener("click", ChangeDiv)


console.log(numberCount.innerText)


// --------------------- exo5   // 
let Panier = document.querySelector(".panier")
let Poule = document.querySelector(".add-egg")
let PanierMax = document.querySelector("#exo-5-panel > span")
var newDiv = document.createElement("img");

let cotcot = function addElement() {
    // crée un nouvel élément div 
    let PanierMax = document.querySelector("#exo-5-panel > span")
    var newDiv = document.createElement("img");

    Panier.appendChild(newDiv);

    newDiv.setAttribute("src", "egg.png");



    if (PanierMax.innerText < 12) { PanierMax.innerText++; } else {
        alert(" Vous avez atteint le nombre maximum d oeufs transportables");
        PanierMax.innerText = "0";

        while (Panier.firstChild) {
            // le supprime
            Panier.removeChild(Panier.firstChild);
        }
    }

}


Poule.addEventListener("click", cotcot)



// let noeuf = new Oeuf()
// noeuf.src = "egg.pgn"

// console.log(noeuf.src)



// ----------  EXO 6  niveau 1 -----------

let num1 = document.querySelector(".nb1")
let num2 = document.querySelector(".nb2")

let egal = document.querySelector(".calc1")
let answer = document.querySelector(".result1")

let calcul = function (event) {

    let nb1 = parseInt(num1.value); // avec ParseInt 
    let nb2 = parseInt(num2.value);

    // let nb1 =  +num1.value);   avec un transformateur arithmetique +
    // let nb2 =  +num2.value);


    answer.innerText = (nb1 + nb2)

    console.log("clic")
}

egal.addEventListener("click", calcul)



// -------- exo 6 level 2 --------- 

let numero = document.querySelectorAll(".num")
console.log(numero);
let equal = document.querySelector("#egal")
let operateur = document.querySelectorAll("#ari")
let affichage = document.querySelector(".ecran")



let intronombre = function (event) {
    console.log("hello");
    let affichage = document.querySelector(".ecran")
    let valeur = event.target.getAttribute("data-value");
    affichage.innerText = affichage.innerText + valeur;


    console.log("clic")

};

numero.forEach(element => {
    element.addEventListener("click", intronombre);
});


let operation = function (event) {


    let affichage = document.querySelector(".ecran")
    let valeur = event.target.getAttribute("data-value");
    let reponse = document.querySelector(".result2")

    if (affichage.innerText != "") {

        reponse.innerText = affichage.innerText + valeur
        affichage.innerText = ""
    } else {

        reponse.innerText = reponse.innerText + valeur;
    }

}

operateur.forEach(element => {
    element.addEventListener("click", operation);
});




let egalisateur = function () {

    let reponse = document.querySelector(".result2")
    let affichage = document.querySelector(".ecran")
    let numero2 = affichage.innerText



    if (reponse.innerText.includes("+")) {

        reponse.innerText.substring(0, reponse.innerText.lenght - 1);
        reponse.innerText = (parseFloat(reponse.innerText) + parseFloat(numero2));
        affichage.innerText = "";

    }
    if (reponse.innerText.includes("-")) {

        reponse.innerText.substring(0, reponse.innerText.lenght - 1);
        reponse.innerText = (parseFloat(reponse.innerText) - parseFloat(numero2));
        affichage.innerText = "";

    }
    if (reponse.innerText.includes("*")) {

        reponse.innerText.substring(0, reponse.innerText.lenght - 1);
        reponse.innerText = (parseFloat(reponse.innerText) * parseFloat(numero2));
        affichage.innerText = "";

    }
    if (reponse.innerText.includes("/")) {

        reponse.innerText.substring(0, reponse.innerText.lenght - 1);
        reponse.innerText = (parseFloat(reponse.innerText) / parseFloat(numero2));
        affichage.innerText = "";

    }


    console.log(reponse.innerText)


}


equal.addEventListener("click", egalisateur);


