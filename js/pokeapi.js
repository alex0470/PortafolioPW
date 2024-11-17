const form = document.getElementById("search-form");
const nombreTxt = document.getElementById("pokemon-name");
const typesList = document.getElementById("pokemon-types");
const image = document.getElementById("pokemon-image");
const heightTxt = document.getElementById("pokemon-height");
const weightTxt = document.getElementById("pokemon-weight");
const abilitiesList = document.getElementById("pokemon-abilities");
const statsList = document.getElementById("pokemon-stats");
const audio = document.getElementById("pokemon-sound");
const pokemonIdTxt = document.getElementById("pokemon-id"); // Nuevo elemento para mostrar el ID
const errorMessage = document.getElementById("error-message"); // Nuevo elemento para el mensaje de error

function clearResults() {
    nombreTxt.innerText = "";
    pokemonIdTxt.innerText = ""; // Limpiar el ID
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
    // Limpiar resultados
    clearResults();

    // Mostrar mensaje de error
    errorMessage.innerText = message;
    errorMessage.style.display = "block"; // Asegurarnos de que el mensaje sea visible
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
            errorMessage.style.display = "none"; // Ocultar mensaje de error si el Pokémon es encontrado

            // Mostrar nombre y ID
            nombreTxt.innerText = pokemon.name;
            pokemonIdTxt.innerText = `ID: ${pokemon.id}`; // Mostrar el ID

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

            heightTxt.innerText = `${pokemon.height / 10} m`; // Convertido a metros
            weightTxt.innerText = `${pokemon.weight / 10} kg`; // Convertido a kilogramos

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

            // Obtener el ID del Pokémon para luego buscar el sonido
            const pokemonId = pokemon.id;

            // Construir la URL del archivo de sonido con el ID del Pokémon
            const soundUrl = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemonId}.ogg`;

            // Verificar que la URL del sonido está disponible
            fetch(soundUrl)
                .then((response) => {
                    if (response.ok) {
                        // Si la URL es válida, cargamos el archivo de audio
                        console.log("Audio encontrado para Pokémon:", pokemon.name);
                        audio.setAttribute("src", soundUrl); // Corregir aquí el uso de `audio`
                        audio.classList.add("active");
                        audio.style.display = "block"; // Asegurarse de que el audio sea visible
                        audio.controls = true; // Añadir controles de audio para que el usuario pueda reproducirlo
                    } else {
                        throw new Error("Sonido no encontrado para este Pokémon");
                    }
                })
                .catch((error) => {
                    console.warn(error.message);
                    audio.style.display = "none"; // Si no se carga el sonido, lo ocultamos
                });
        })
        .catch((error) => {
            showError(error.message);
            console.error(error);
        });
});