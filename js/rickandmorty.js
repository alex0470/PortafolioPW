let paginaActual = 1;
let totalPaginas = 42;
const listaPersonajes = document.getElementById("lista-personajes");
const botonAnterior = document.getElementById("pagina-anterior");
const botonSiguiente = document.getElementById("pagina-siguiente");

const modal = document.getElementById("modal-personaje");
const cerrarModal = document.getElementById("cerrar-modal");
const nombrePersonaje = document.getElementById("nombre-personaje");
const imagenPersonaje = document.getElementById("imagen-personaje");
const estadoPersonaje = document.getElementById("estado-personaje");
const especiePersonaje = document.getElementById("especie-personaje");
const origenPersonaje = document.getElementById("origen-personaje");
const ubicacionPersonaje = document.getElementById("ubicacion-personaje");

function obtenerPersonajes(pagina) {
    fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
        .then(response => response.json())
        .then(data => {
            totalPaginas = data.info.pages;
            mostrarPersonajes(data.results);
            actualizarBotonesPaginacion();
        })
        .catch(error => console.error("Error al cargar los personajes:", error));
}

function mostrarPersonajes(personajes) {
    listaPersonajes.innerHTML = '';

    personajes.forEach(personaje => {
        const itemPersonaje = document.createElement("div");
        itemPersonaje.classList.add("item-personaje");
        itemPersonaje.innerHTML = `
            <img src="${personaje.image}" alt="${personaje.name}">
            <h3>${personaje.name}</h3>
        `;
        itemPersonaje.addEventListener("click", () => abrirModal(personaje));
        listaPersonajes.appendChild(itemPersonaje);
    });
}

function abrirModal(personaje) {
    nombrePersonaje.innerText = personaje.name;
    imagenPersonaje.src = personaje.image;
    estadoPersonaje.innerText = `Estado: ${personaje.status}`;
    especiePersonaje.innerText = `Especie: ${personaje.species}`;
    origenPersonaje.innerText = `Origen: ${personaje.origin.name}`;
    ubicacionPersonaje.innerText = `Ubicación: ${personaje.location.name}`;
    modal.style.display = "block";
}

cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
});

function actualizarBotonesPaginacion() {
    botonAnterior.disabled = paginaActual === 1;
    botonSiguiente.disabled = paginaActual === totalPaginas;
}

botonAnterior.addEventListener("click", () => {
    if (paginaActual > 1) {
        paginaActual--;
        obtenerPersonajes(paginaActual);
    }
});

botonSiguiente.addEventListener("click", () => {
    if (paginaActual < totalPaginas) {
        paginaActual++;
        obtenerPersonajes(paginaActual);
    }
});

window.onload = () => obtenerPersonajes(paginaActual);