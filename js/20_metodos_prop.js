// métodos de propiedad
const reproductor = {
  reproducir: function (id) {
    // console.log("Reproduciendo Canción");
    console.log(`Reproduciendo canción con el ID: ${id}`);
  },
  pausar: function () {
    console.log("Pausando...");
  },
  crearPlaylist: function (nombre) {
    console.log(`Creando la playlist ${nombre}`);
  },
  reproduciendoPlaylist: function (nombre) {
    console.log(`Reproduciendo la playlist ${nombre}`);
  },
};

reproductor.borrarCancion = function (id) {
  console.log(`Eliminando la canción con el ID ${id}`);
};

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);

reproductor.crearPlaylist("Rock");
reproductor.reproduciendoPlaylist("Rock");
