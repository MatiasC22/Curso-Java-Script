const producto = {
    nombre: "Monito de 20 Pulgadas",
    precio: 300,
    disponible: true,
}

//const nombre = producto.nombre;
//console.log(nombre);

//destructurig
const { nombre } = producto;

console.log(nombre);

//destructuring con arreglos 

const numeros = [10,20,30,40,50];
//la como es para distinguir el ligar del arreglo
const [, s, tercero] = numeros;

//console.log(primero);
console.log(tercero);