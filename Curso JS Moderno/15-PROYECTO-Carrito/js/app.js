//variables
const carrito = document.querySelector('#carrito');
const contenedorcarrito = document.querySelector('#lista-carrito tbody');
const vaciarcarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

cargarEventlisteners();
function cargarEventlisteners(){
    //cuando agregas un curso presionando "Agregar Carrito"
    listaCursos.addEventListener('click',agregarCurso);
}

//funciones
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        console.log(e.target.parentElement.parentElement)
    }
  
}