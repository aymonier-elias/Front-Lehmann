let tabContainer = document.querySelector(".tabContainer");
let barContainer = document.querySelector(".barContainer");

let tab = [0.1, 0.16, 0.256, 0.4096, 0.6553, 1.0485, 1.6777, 2.6843, 4.2949, 6.8719, 10.9951];

tab.forEach((e, i) => {
    tabContainer.innerHTML += `La valeur ${i} du tableau est ${e}</br>`;
});
tab.forEach((e) => {
    e *= 50;
    barContainer.innerHTML += `<div class="bar" style="width: ${e}px;"></div>`;
});

let grille = document.querySelector(".grille");
let num = [0, 9, 5, 3, 0, 8, 7, 0, 1, 8, 2, 1, 0, 7, 0, 0, 6, 0, 6, 7, 0, 4, 0, 0, 8, 0, 0, 2, 4, 0, 0, 0, 9, 0, 5, 0, 0, 0, 9, 0, 0, 0, 2, 0, 0, 0, 1, 0, 2, 0, 0, 0, 4, 8, 0, 0, 4, 0, 0, 2, 0, 8, 9, 0, 6, 0, 0, 3, 0, 1, 7, 2, 1, 0, 2, 8, 0, 7, 6, 3, 0];

// Créer la grille
num.forEach(e => {
    if (e == 0) {
        grille.innerHTML += `<div class="case"><input type="text"></div>`;
    } else {
        grille.innerHTML += `<div class="case locked">${e}</div>`;
    }
});

sapin = "*";

for (let j = 0; j < 20; j++) {
    for (let i = 0; i < 3; i++) {
        console.log(sapin);
        sapin += "**";
    }
    sapin = "*";
}