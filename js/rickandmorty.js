let currentPage = 1;
let totalPages = 42;
const charactersList = document.getElementById("characters-list");
const prevButton = document.getElementById("prev-page");
const nextButton = document.getElementById("next-page");

const modal = document.getElementById("character-modal");
const closeModal = document.getElementById("close-modal");
const characterName = document.getElementById("character-name");
const characterImage = document.getElementById("character-image");
const characterStatus = document.getElementById("character-status");
const characterSpecies = document.getElementById("character-species");
const characterOrigin = document.getElementById("character-origin");
const characterLocation = document.getElementById("character-location");

function fetchCharacters(page) {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(response => response.json())
        .then(data => {
            totalPages = data.info.pages;
            displayCharacters(data.results);
            updatePaginationButtons();
        })
        .catch(error => console.error("Error al cargar los personajes:", error));
}

function displayCharacters(characters) {
    charactersList.innerHTML = '';

    characters.forEach(character => {
        const characterItem = document.createElement("div");
        characterItem.classList.add("character-item");
        characterItem.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
        `;
        characterItem.addEventListener("click", () => openModal(character));
        charactersList.appendChild(characterItem);
    });
}

function openModal(character) {
    characterName.innerText = character.name;
    characterImage.src = character.image;
    characterStatus.innerText = `Estado: ${character.status}`;
    characterSpecies.innerText = `Especie: ${character.species}`;
    characterOrigin.innerText = `Origen: ${character.origin.name}`;
    characterLocation.innerText = `Ubicación: ${character.location.name}`;
    modal.style.display = "block";
}

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

function updatePaginationButtons() {
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
}

prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        fetchCharacters(currentPage);
    }
});

nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
        currentPage++;
        fetchCharacters(currentPage);
    }
});

window.onload = () => fetchCharacters(currentPage);