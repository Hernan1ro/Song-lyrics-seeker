import * as UI from "./interfaz.js";

class API {
  constructor(artista, cancion) {
    this.artista = artista;
    this.cancion = cancion;
    this.consultarAPI();
  }
  consultarAPI() {
    const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        const { lyrics } = response;
        if (lyrics) {
          UI.divResultado.textContent = lyrics;
          UI.headingResultado.textContent = `Canción ${this.cancion} de ${this.artista}`;
        } else {
          UI.divMensaje.textContent =
            "la canción que buscabas no está en nuestra base de datos :(";
          UI.divMensaje.classList.add("error");
          setTimeout(() => {
            UI.divMensaje.textContent = "";
            UI.divMensaje.classList.remove("error");
          }, 3000);
        }
      });
  }
}

export default API;
