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



const producto3 = {
    Nombre: 'Teclado',
    precio: 150
}

let resultado;

resultado = [...carrito,producto];


console.table(resultado);