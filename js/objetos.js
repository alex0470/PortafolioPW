/*let nombre = prompt("Como te llamas?")
if(nombre){
    alert(`Hola ${nombre}`);
}else{
    alert("Anonimo");
}
*/
let lista = document.getElementById("log");
function registro(texto){
    let item = document.createElement("li");
    item.innerText = texto;
    return item;
}
lista.appendChild(registro("DOM LOADED!"))

let timer = setTimeout(() => {
    lista.appendChild(registro("Timer ⌛ a los 3 seg"));
}, 3000);

let repetidor =setInterval(() => {
    lista.appendChild(registro("Cada 1.5 seg"));
}, 1500);

let activatimerBtn = document.getElementById("activa_timer");
let stopBtn= document.getElementById("parar_repetidor");

activatimerBtn.addEventListener("click",function(){
    lista.appendChild(registro("Inicia timer..."));
    clearTimeout(timer)
    timer.setTimeout(3000);
});

stopBtn.addEventListener("click", function () {
    lista.appendChild(registro("Parar repetidor..."));
    clearInterval(repetidor);
})

console.table(location);
let secure = document.getElementById("secure");
if(location.protocol.value =="https"){
    secure.innerText ="Seguro";
}else{
    secure.innerText= "No seguro";
}

console.log(navigator);

let fecha_actual = new Date();
alert(fecha_actual.getFullYear());
alert(fecha_actual.getMonth());
alert(fecha_actual.getDate());
alert(fecha_actual.getHours());
alert(fecha_actual.getMinutes());
alert(fecha_actual.getSeconds());

let navidad_2024 = new Date("2024-12-24 12:00:00");
let fin_2024 = new Date(2024,11,31,23,59,59);