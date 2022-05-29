const reproductor = {
    reproducir: (id) => console.log(`Reproduciendo cancion con el id ${id}`),
    pausar:() => console.log(`pausando...`),
    borrar: (id) => console.log(`Borrando cancion...${id}`),
    crearPlaylist:(nombre) =>  console.log(`Creando Playlist ${nombre}`),
    reproducirPlaylist:(nombre)=> console.log(`Reproduciendo la Playlist ${nombre}`),
    

}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Pop');
reproductor.reproducirPlaylist('Rock');