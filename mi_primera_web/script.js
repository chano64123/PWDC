// alert("Hola este es mi Javascript");
// let nombre = 'Chano';
// nombre = 'Jose';

// var nombre1 = 'Jose'

// const nombre2 = 'Carlos';
// nombre2 = 'Juan';

// console.log(nombre);
// console.log(nombre1);
// console.log(nombre2);

// SELECCIONAR ELEMENTOS

let contenidoTitulo = 'Hola'
let logo = document.querySelector('#logo');
// console.log(logo);
// logo.innerHTML = contenidoTitulo;

// CONDICIONALES
let textoTitulo = logo.innerHTML;
console.log(textoTitulo);

if (textoTitulo == 'Nombre') {
  logo.innerHTML = 'Otro'
} else {
  console.log('No se cumple la condicion')
}

let acercaDeTitle = document.querySelector('#acerca-de-title');
console.log(acercaDeTitle.innerHTML)

// FUNCIONES

let nombre = 'Jose';
let ciudad = 'Tacna - Peru';
let gusto = 'programar y enseñar';

function cambiarTextoParrafo(nombre, ciudad, gusto) {
  let contenido = `Me llamos ${nombre}, naci en ${ciudad} y me gusta ${gusto}.`;
  return contenido;
}

let parrafo = document.querySelector("#parrafo2");
parrafo.innerHTML = cambiarTextoParrafo(nombre, ciudad, gusto);

const modificarTituloAcercaDe = () => {
  var day = new Date().getDay();
  if (day == 6 || day == 7) {
    acercaDeTitle.innerHTML = 'Sobre mí'
    console.log("El titulo de acerca de mi se cambia")
  } else {
    console.log("El titulo se acerca de mi se mantiene igual")
  }
}

modificarTituloAcercaDe();

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  let navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
  console.log("si funca el click")
};