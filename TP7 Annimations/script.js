const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const box3 = document.querySelector(".box-3");
const box4 = document.querySelector(".box-4");

// Changer la position aléatoirement de box1
box1.addEventListener("click", () => {
    let random = Math.random()*75;
    box1.style.left = `${random}%`;
})

// Déplacement de box2 de l'autre coté de la page
box2.addEventListener("click", () => {
    box2.classList.toggle("change")
})

// lancement et arret de l'annimation de box4
box4.addEventListener("click", () => {
    box4.classList.toggle("go")
})


// Changer la couleur des box au click
const listBox = [box1, box2, box3, box4]

listBox.forEach(e => {
    e.addEventListener("click",() => {
        color(e);
    })
});

function color(e) {
    e.classList.add("active");
}