//Smooth Scroll//
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

//Menú Hamburgues//
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


abrir.addEventListener("click", () => {
    nav.classList.add("Menuvisible");
})


cerrar.addEventListener("click", () => {
    nav.classList.remove("Menuvisible");
})


//Carrusel//
const carrusel = document.querySelector(".Carrusel");
const Izquierda = document.querySelector("#Izquierda");
const Derecha = document.querySelector("#Derecha");


Izquierda.addEventListener("click", () => {
    carrusel.scrollBy({ left: -300, behavior: "smooth" });
});


Derecha.addEventListener("click", () => {
    carrusel.scrollBy({ left: 300, behavior: "smooth" });
});

const primerElemento = document.querySelector("#Adopciones .elemento");
primerElemento.scrollIntoView({ behavior: "smooth", inline: "center" });

const fotos = document.querySelectorAll('#Adopciones .elemento img');
const dropdowns = document.querySelectorAll('#Adopciones .dropdown');
const cerrardrops = document.querySelectorAll('#Adopciones .cerrardrop');


fotos.forEach((foto, index) => {
    foto.addEventListener('click', function (e) {
        e.stopPropagation();

        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('mostrar');
        });

        dropdowns[index].classList.add('mostrar');
    });
});

cerrardrops.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        this.parentElement.classList.remove('mostrar');
    });
});

document.addEventListener('click', function () { //Clic fuera del recuadro//
    dropdowns.forEach(dropdown => {
        dropdown.classList.remove('mostrar');
    });
});

//Calendario Clanedly//
function mostrarcalendario() {
    const calendario = document.getElementById("Oculto");
    const botonSerVoluntario = document.getElementById("SerVoluntario");


    calendario.style.display = "block";
    botonSerVoluntario.style.display = "none"
}


function ocultarcalendario() {
    const calendario = document.getElementById("Oculto");
    const botonSerVoluntario = document.getElementById("SerVoluntario");


    calendario.style.display = "none";
    botonSerVoluntario.style.display = "block";
}

//Formulario de Adopción//
