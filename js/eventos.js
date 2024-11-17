let miForm = document.getElementById("miForm");

miForm.addEventListener("submit", function (event) {
  event.preventDefault();   

  alert("Se intento procesar el formulario");
  let aTxt = document.getElementById("a");
  let bTxt = document.getElementById("b");
  //console.log(aTxt,bTxt);
  
  let salida = document.getElementById("salida_suma");

  let a = parseInt(aTxt.value);
  let b = parseInt(bTxt.value);
  let resultado =  a + b;
  salida.innerText = resultado;
  
 });