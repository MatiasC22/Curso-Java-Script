const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio'];

console.table(meses);
console.table(meses[0]);
console.table(meses[1]);
console.table(meses[2]);

//para no declara todas las variables promero tengo que conocer 
//que tamaño tiene el arreglo

console.log(meses.length);

for(let i = 0; i < meses.length; i ++) {
    console.log(i);
    console.log(meses[i]);
}