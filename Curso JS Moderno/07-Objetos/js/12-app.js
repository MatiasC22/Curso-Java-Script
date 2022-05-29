//object literal
const producto = {
    nombre: "Monito de 20 Pulgadas",
    precio: 300,
    disponible: true,
   
}

//Object constructor

function Producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor de 24 pulgadas', 500);
console.log(producto2);

