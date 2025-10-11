// Initialisation des objet HTML
let emailTexte = document.querySelector(".email");
let nomTexte = document.querySelector(".nom");

let date1 = document.querySelector(".date1");
let date2 = document.querySelector(".date2");

let nbPers = document.querySelector(".nbPers");
let poids = document.querySelector(".poids");
let msgAlert = document.querySelector(".msgAlert");

let firstName = document.querySelector(".first_name");
let lastName = document.querySelector(".last_name");
let btnFirstName = document.querySelector(".first_name-collumn")
let btnLastName = document.querySelector(".last_name-collumn")

// Inilisation de variable
let email = "sebatian.lehmann@gmail.com";
let splitMail = email.split(".");

let date = "2022-12-24";
let modDate = date.split("-");
modDate.reverse();
modDate = modDate[0] + "/" + modDate[1] + "/" + modDate[2];

let poidsPers = [42, 100, 33, 72, 56, 164, 13, 66];
let nbPersonne = poidsPers.length;
let poidsTotal = 0;
poidsPers.forEach(e => {
    poidsTotal += e;
});

let personne = ["Elias Aymonier", "Jean Dubois", "Maxime Amixem"]
let lastNameTab = [];
let firstNameTab = [];
personne.forEach(e => {
    console.log(e)
    splitE = e.split(" ");
    firstNameTab.push(splitE[0]);
    lastNameTab.push(splitE[1]);
});
console.log(firstNameTab)
console.log(lastNameTab)


// Envoie vers l'HTML
emailTexte.innerHTML += email;
nomTexte.innerHTML += splitMail[0];

date1.innerHTML += date;
date2.innerHTML += modDate;

nbPers.innerHTML += nbPersonne;
poids.innerHTML += poidsTotal + "kg";
if (poidsTotal > 500) {
    let dif = poidsTotal - 500 + "kg";
    msgAlert.innerHTML += "Alert de sécurite, le poids maximal est dépassé de " + dif;
} else {
    msgAlert.innerHTML += "Poids dans la norme, Bon voyage !"
}

btnFirstName.addEventListener("click", () => {
    console.log("oui?")
    firstNameTab.forEach(e => {
        firstName.innerHTML +=`<div>${e}</div>`;
    });
})
btnLastName.addEventListener("click", () => {
    console.log("oui?")
    lastNameTab.forEach(e => {
        lastName.innerHTML += `<div>${e}</div>`;
    });
})