
const btnMenu = document.querySelector('.botonmenu');
const btnSeccion1 = document.getElementById("seccion1");
const btnSeccion2 = document.getElementById("seccion2");
const btnSaludar = document.querySelector("button[type='button']");
const btnGuardar = document.querySelector("button[type='submit']");
const btnCerrar = document.getElementById("cerrarmensaje");
const mensaje = document.getElementById("mensaje");
const contenido1 = document.getElementById("contenido1");
const contenido2 = document.getElementById("contenido2");

btnMenu.addEventListener('click', function () {
   document.getElementById('menudesplegable').classList.toggle('active');
  });
  
  btnSeccion1.addEventListener("click", function() {
    contenido1.style.display = "block";
    contenido2.style.display = "none"; 
  });

  btnSeccion2.addEventListener("click", function() {
   contenido2.style.display = "block";
   contenido1.style.display = "none"; 
 });

 btnSaludar.addEventListener("click", function() {
   mensaje.style.display = "block";
 });

 btnCerrar.addEventListener("click", function() {
   mensaje.style.display = "none";
 });

 