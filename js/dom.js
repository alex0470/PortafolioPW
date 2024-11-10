let titulo = document.getElementById("titulo");
console.log(titulo.textContent);
titulo.style.color = "red";

let parrafos = document.getElementsByTagName("p");
console.log(parrafos);
Array.from(parrafos).forEach((el, idx) => {
    el.innerText = "Texto " + (idx + 1);
});

let parrafos2 = document.getElementsByClassName("parrafo");
console.log(parrafos2[1].textContent);
parrafos2[1].style.backgroundColor = "greenyellow";
parrafos2[1].innerHTML = "<strong>Nuevo Parrafo</strong>";

let primerParrafo = document.querySelector(".parrafo");
console.log(primerParrafo.textContent);
primerParrafo.className = "nuevo-parrafo";

let nuevoParrafo = document.createElement("p");
nuevoParrafo.innerText = "Nuevo Parrafo";
document.body.appendChild(nuevoParrafo);

let h1 = document.querySelector("h1");
let hr = document.createElement("hr");

document.body.insertBefore(nuevoParrafo, h1);
document.body.appendChild(hr);

let parrafoConEmoji = document.createElement("p");
parrafoConEmoji.innerText = "Este parrafo tiene un emoji👻";
document.body.appendChild(parrafoConEmoji);

console.log(parrafoConEmoji);

h1.innerText = "Título dinámico";

let padreParrafo = primerParrafo.parentElement;
console.log(padreParrafo);

let lista = document.createElement("ol");
for (let i = 1; i <= 5; i++) {
    let item = document.createElement("li");
    item.innerText = `Elemento ${i}`;
    lista.appendChild(item);
}

padreParrafo.appendChild(lista);