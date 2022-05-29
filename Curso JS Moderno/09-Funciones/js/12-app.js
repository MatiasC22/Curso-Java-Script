const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Televisor' , precio: 37420},
    {nombre: 'Celular', precio: 45000},
    {nombre: 'Audifonos', precio: 3600 },
    {nombre: 'Mouse', precio: 2000 },
    {nombre: 'Teclado', precio: 1500 },

]
const nuevoArreglo = carrito.map( function(producto){
    return (`${producto.nombre} - Precio: ${producto.precio}`);
})

const nuevoArreglo2 = carrito.forEach(function(producto){
    return (`${producto.nombre} - Precio: ${producto.precio}`);
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);