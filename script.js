document.querySelectorAll('a[href^="#"]').forEach(Lista => {
  Lista.addEventListener("click", function (e) {
    e.preventDefault();
    const MenuItem = document.querySelector(this.getAttribute("href"));
    if (MenuItem) {
      MenuItem.scrollIntoView({ behavior: "smooth" });
      if (nav.classList.contains("Menuvisible")) {
        setTimeout(() => {
          nav.classList.remove("Menuvisible");
        }, 400);
      }
    }
  });
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
  carrusel.scrollBy({ left: -300, behavior: "smooth" });
});

Derecha.addEventListener("click", () => {
  carrusel.scrollBy({ left: 300, behavior: "smooth" });
});
