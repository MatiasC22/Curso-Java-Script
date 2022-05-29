const producto = {
    nombre: "Monito de 20 Pulgadas",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: '1.2Kg',
    medida: '3.45mtrs',
}

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);
// object.assing une los objetos tanto de producto como de precio

//spread operator o rest operate
const resultado2 = {...producto, ...medidas}
console.log(resultado);
console.log(resultado2);