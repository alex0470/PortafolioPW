console.log("Hola mundo desde un archivo javascript");

let objeto = {name: "Silvestre", age :20};
let numeros = [1,2,3,4,5,6];

let fecha = new Date();
console.table(objeto);
console.table(numeros);
console.log(sumar(30,7));
console.log(fecha);
function sumar(a,b) {
    return a+b;
}

let a=5;
let b=3;
let resultado=( (a+b-2)*3 )/2;
resultado +=1;
console.log(a>b);
console.log(a === b);
console.log(resultado % 3 == 0 ? "👍" :"👎");
let cadena = "Hola, " + "Mundo";
console.log(cadena);

let edad =18;
if (edad >= 18){
    console.error("Eres Mayor de edad")
}else{
    console.warn("Eres menor de edad")
}

let anio = parseInt( prompt("En que año naciste?"));
let anio_act = new Date().getFullYear();
edad = anio_act - anio;

console.log(edad);
if (edad >= 18) {
    console.info("Eres mayor de edad");
} else if (edad >= 12 && edad < 18) {
    if (edad == 12) {
        console.log("Eres un preadolescente");
    } else {
        console.log("Eres un adolescente");
    }
} else {
    console.warn("Eres un niño");
}

let dia = parseInt( prompt("Ingresa un numero del 1 al 7"));
console.log(dia);
switch(dia){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
         console.log("Miercoles");
        break;
    default:
        console.error("Dia no valido");
}
for (let i =0; i<5;i++){
    console.log(i)
}

let j =0;
while (j <5){
    console.log(j)
    j++;
}

let k =0;
do{
    console.log(k);
    k++;
}while(k<5);
//funciones
function suma(a,b){
    return a+b;
}
let resultado1 = suma(5,3);
console.log(resultado1);

let resta= function (a,b){
    return a-b;
}
console.log(resta(5,3));
//tipo flecha
let multiplicacion = (a,b) => a * b;
console.log(multiplicacion(5,3));

let objeto1 ={
    nombre: "Silvestre",
    saludar: function(){
        setTimeout(() => {
            console.log(`Hola,soy ${this.nombre}`)
        }, 1000);
    }
}
objeto1.saludar();

let arreglo = new Array(1,2,3,4,5);
let colores = ["rojo","verde","azul"];
console.log(colores[0]);

let frutas = ["🍎","🍐","🍇","🍓","🥑"];
frutas.push("🥭");
frutas.unshift("🍌");
frutas.pop();
console.log(frutas);

let frutas2 = frutas.slice(1,3);
console.log(frutas2.join("-"));
console.log(frutas.length);
console.log(frutas.indexOf("🍇"));

let frutas3 = frutas.map((fruta)=> fruta + "🍉" );
console.table(frutas3);
