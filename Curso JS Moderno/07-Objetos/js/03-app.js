const producto = {
    nombre: "Monito de 20 Pulgadas",
    precio: 300,
    disponible: true,
   // imagen: "imagen.jpg"
}

//agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";

//quitar nuevas propiedades al objeto

delete producto.disponible;

//

console.log(producto)