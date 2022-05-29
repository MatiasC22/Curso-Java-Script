/*const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio'];

//agregar al final del arreglo otro elemento
meses.push('Agosto');


console.table(meses);*/

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

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    Nombre: 'Teclado',
    precio: 150
}

carrito.unshift(producto3);

console.table(carrito);