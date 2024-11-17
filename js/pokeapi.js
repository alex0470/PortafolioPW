const form = document.getElementById("search-form");
const nombreTxt = document.getElementById("pokemon-name");
const typesList = document.getElementById("pokemon-types");
const image = document.getElementById("pokemon-image");
function clearResults() {
    nombreTxt.innerText = "";
    typesList.innerHTML = "";
    image.setAttribute("src", "");
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const pokemonName = document.getElementById("pokemon-name-input").value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => {
            if (!response.ok) throw new Error("Pokémon no encontrado");
            return response.json();
        })
        .then((pokemon) => {
            clearResults();
            nombreTxt.innerText = pokemon.name;

            const lista = document.createElement("ul");
            pokemon.types.forEach((tipo) => {
                const item = document.createElement("li");
                item.innerText = tipo.type.name;
                item.classList.add(`type-${tipo.type.name}`);
                lista.appendChild(item);
            });
            typesList.appendChild(lista);

            image.setAttribute("src", pokemon.sprites.front_shiny);
            image.style.width = "300px";
            image.style.height = "300px";

        })
        .catch((error) => {
            clearResults();
            nombreTxt.innerText = "Error: " + error.message;
            console.error(error);
        });
});
