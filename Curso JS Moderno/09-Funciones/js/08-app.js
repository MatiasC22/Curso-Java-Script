function sumar(a,b){
    return a + b;
}

const resultado = sumar(2,4);
console.log(resultado);

//ejemplo mas avanzado

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}
function calcularImpuesto(total){
    return total * 1.15;

}
total = agregarCarrito(300);
total = agregarCarrito(300);
total = agregarCarrito(300);

const totalpagar = calcularImpuesto(total);
console.log(`El total a pagar es de ${totalpagar}`);


console.log(total);