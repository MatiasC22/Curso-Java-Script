const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Televisor' , precio: 37420},
    {nombre: 'Celular', precio: 45000},
    {nombre: 'Audifonos', precio: 3600 },
    {nombre: 'Mouse', precio: 2000 },
    {nombre: 'Teclado', precio: 1500 },

]



for(let i = 0; i < carrito.length; i ++) {
    //console.log(i);
    //console.log(carrito[i].nombre);
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

carrito.forEach( function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio}`)
})

i += 1;
i = i + 1;
i++;

// {} asi se declara un objeto
// [] asi un array
