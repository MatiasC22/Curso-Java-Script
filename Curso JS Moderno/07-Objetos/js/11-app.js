const producto = {
    nombre: "Monito de 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarinfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    } 

}



producto.mostrarinfo();
