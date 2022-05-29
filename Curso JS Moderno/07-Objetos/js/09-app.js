"use strict"

const producto = {
    nombre: "Monito de 20 Pulgadas",
    precio: 300,
    disponible: true,
}

Object.seal( producto);
//nose puede agregar o quitar solo modificar
producto.disponible = false;
//producto.imagen = "imagen.jpg";
//delete producto.precio;

console.log(producto);

console.log(Object.isFrozen(producto));