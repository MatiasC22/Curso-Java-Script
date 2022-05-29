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

const {nombre,informacion,informacion:{fabricacion} } = producto;


console.log(nombre);
console.log(informacion);
console.log(fabricacion);
