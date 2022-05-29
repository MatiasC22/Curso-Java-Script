const producto = {
    nombre: "Monito de 20 Pulgadas",
    precio: 300,
    disponible: true,
}

//destructuring   extrae el valor de un objeto y crea la variable
const{nombre,precio}= producto;
console.log(nombre);
console.log(precio);
console.log(producto);
