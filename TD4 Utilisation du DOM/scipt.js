// Récupération des éléments
let btn = document.querySelector("button");
let body = document.querySelector("body");
let main = document.querySelector("main");

// Création de l'UFO
btn.addEventListener("click", () => {
    console.log("J'envoie un UFO !")

    let top = Math.random()*100+'vh';
    let left = Math.random()*100+'vw';

    let ufo = document.createElement('div');
    ufo.className = "UFO";
    ufo.style.top = top;
    ufo.style.left = left;
    ufo.addEventListener('click', destroy);
    main.appendChild(ufo);
    console.log(ufo)

    event.stopPropagation();
})

// Mise en pause des annimation
body.addEventListener("click", () => {
    body.classList.toggle("pause")
})

// Destruction des UFO
function destroy() {
    this.remove();
    event.stopPropagation();
}