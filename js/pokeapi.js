const form = document.getElementById("search-form");
const nombreTxt = document.getElementById("pokemon-name");
const typesList = document.getElementById("pokemon-types");
const image = document.getElementById("pokemon-image");
const heightTxt = document.getElementById("pokemon-height");
const weightTxt = document.getElementById("pokemon-weight");
const abilitiesList = document.getElementById("pokemon-abilities");
const statsList = document.getElementById("pokemon-stats");
const audio = document.getElementById("pokemon-sound");
const pokemonIdTxt = document.getElementById("pokemon-id");
const errorMessage = document.getElementById("error-message");

function clearResults() {
    nombreTxt.innerText = "";
    pokemonIdTxt.innerText = "";
    typesList.innerHTML = "";
    image.setAttribute("src", "");
    heightTxt.innerText = "-";
    weightTxt.innerText = "-";
    abilitiesList.innerHTML = "";
    statsList.innerHTML = "";
    audio.style.display = "none";
    audio.classList.remove("active");
    audio.setAttribute("src", "");
}

function showError(message) {
    clearResults();


    errorMessage.innerText = message;
    errorMessage.style.display = "block";
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const pokemonName = document.getElementById("pokemon-name-input").value.toLowerCase();
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => {
            if (!response.ok) throw new Error(`Pokémon ${pokemonName} no encontrado`);
            return response.json();
        })
        .then((pokemon) => {
            clearResults();
            errorMessage.style.display = "none";

            nombreTxt.innerText = pokemon.name;
            pokemonIdTxt.innerText = `${pokemon.id}`;

            const listaTipos = document.createElement("ul");
            pokemon.types.forEach((tipo) => {
                const item = document.createElement("li");
                item.innerText = tipo.type.name;
                item.classList.add(`type-${tipo.type.name}`);
                listaTipos.appendChild(item);
            });
            typesList.appendChild(listaTipos);

            image.setAttribute("src", pokemon.sprites.front_shiny);
            image.style.width = "300px";
            image.style.height = "300px";

            heightTxt.innerText = `${pokemon.height / 10} m`;
            weightTxt.innerText = `${pokemon.weight / 10} kg`;

            const abilities = document.createElement("ul");
            pokemon.abilities.forEach((ability) => {
                const item = document.createElement("li");
                item.innerText = ability.ability.name;
                abilities.appendChild(item);
            });
            abilitiesList.appendChild(abilities);

            const stats = document.createElement("ul");
            pokemon.stats.forEach((stat) => {
                const item = document.createElement("li");
                item.innerText = `${stat.stat.name}: ${stat.base_stat}`;
                stats.appendChild(item);
            });
            statsList.appendChild(stats);

            const soundUrl = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemon.id}.ogg`;

            fetch(soundUrl)
                .then((response) => {
                    if (response.ok) {
                        console.log("Audio encontrado para Pokémon:", pokemon.name);
                        audio.setAttribute("src", soundUrl);
                        audio.classList.add("active");
                        audio.style.display = "block";
                        audio.controls = true;
                    } else {
                        throw new Error("Sonido no encontrado para este Pokémon");
                    }
                })
                .catch((error) => {
                    console.warn(error.message);
                    audio.style.display = "none";
                });
        })
        .catch((error) => {
            showError(error.message);
            console.error(error);
        });
});