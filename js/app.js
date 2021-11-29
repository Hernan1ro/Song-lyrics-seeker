import API from "./api.js";
// Importar todos las variables de un archivo y guardarlas en un alias para acceder esta por medio de la sintáxis de punto
import * as UI from "./interfaz.js";

// Event listeners
UI.formularioBuscar.addEventListener("submit", buscarCancion);

function buscarCancion(e) {
  e.preventDefault();
  // obtener datos del formulario
  const artista = document.querySelector("#artista").value;
  const cancion = document.querySelector("#cancion").value;

  if (artista === "" || cancion === "") {
    UI.divMensaje.textContent = "Error... Todos los campos son obligatorios";
    UI.divMensaje.classList.add("error");

    setTimeout(() => {
      UI.divMensaje.textContent = "";
      UI.divMensaje.classList.remove("error");
    }, 3000);
    return;
  }
  // Consultar canción con la API
  const busqueda = new API(artista, cancion);
}
