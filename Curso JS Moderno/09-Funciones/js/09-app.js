
const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el id ${id}`);
    },
    pausar: function(){
        console.log(`pausando...`)
    },
    borrar: function(id){
        console.log(`Borrando cancion...${id}`);
    },
    crearPlaylist: function(nombre){
        console.log(`Creando Playlist ${nombre}`)
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la Playlist ${nombre}`);
    }

}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Pop');
reproductor.reproducirPlaylist('Rock');
