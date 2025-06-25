/*1. Seleccionar elemento
2. Acción que sucederá
3. Clave para ejecutar
*/

window.scroll({
  behavior: "smooth",
});

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("Menuvisible");
})

cerrar.addEventListener("click", () => {
  nav.classList.remove("Menuvisible");
})

const carrusel = document.querySelector(".Carrusel");
const Izquierda = document.querySelector("#Izquierda");
const Derecha = document.querySelector("#Derecha");

Izquierda.addEventListener("click", () => {
  carrusel.scrollBy({left: -300, behavior: "smooth"});
});

Derecha.addEventListener("click", () => {
  carrusel.scrollBy({left: 300, behavior: "smooth"});
});
