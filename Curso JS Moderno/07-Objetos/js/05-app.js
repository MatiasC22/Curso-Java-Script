const producto = {
    nombre: "Monito de 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        peso: '2.4Kg',
        medida: '5mtros',
        fabricacion:{
            pais: 'Argentina',
        }
    }
}


console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.peso);
console.log(producto.informacion.medida);
console.log(producto.informacion.fabricacion);
console.log(producto.informacion.fabricacion.pais);