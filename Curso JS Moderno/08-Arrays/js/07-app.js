const carrito = [];

/// definir un producto

const producto = {
    Nombre: "Monitor de 40 Pulgadas",
    precio: 4500,
}

const producto2 = {
    Nombre: 'Celular',
    precio: 800
}
//.push agrega al final de un carrito
carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    Nombre: 'Teclado',
    precio: 150
}

carrito.unshift(producto3);

console.table(carrito);

//eliminar el ultimo elemento del arreglo...

/*carrito.pop();
console.table(carrito);

//eliminar del principio del carrito 

carrito.shift();

console.table(carrito);

*///eliminar el cualquier posicion 

carrito.splice(1,1);
console.table(carrito);
