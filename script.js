// Récupération des différents éléments
const map = document.querySelector(".map");
const mapImage = map.querySelector(".map__image");
const paths = map.querySelectorAll(".map__image a");
const links = map.querySelectorAll(".map__list a");

let activeArea = function (id) {
  // Retrait de la classe is-active sur tous les éléments
  map.querySelectorAll(".is-active").forEach(function (item) {
    item.classList.remove("is-active");
  });
  if (id !== undefined) {
    // Ajout de la classe is-active
    document.querySelector("#list-" + id).classList.add("is-active");
    document.querySelector("#region-" + id).classList.add("is-active");
  }
};

paths.forEach(function (path) {
  // Ecoute de l'événement "mouseenter" (le curseur de la souris entre dans la zone) sur un chemin du svg
  path.addEventListener("mouseenter", function () {
    let id = this.id.replace("region-", "");
    activeArea(id);
  });
});

links.forEach(function (link) {
  //Ecoute de l'événement "mouseenter" sur un lien
  link.addEventListener("mouseenter", function () {
    let id = this.id.replace("list-", "");
    activeArea(id);
  });
});

// Ecoute de l'événement "mouseleave" (le curseur de souris quitte la zone)
mapImage.addEventListener("mouseleave", function () {
  activeArea();
});

map.addEventListener("mouseleave", function () {
  activeArea();
});
