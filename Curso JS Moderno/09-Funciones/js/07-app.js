iniciarApp();

function iniciarApp(){
    console.log('Iniciando app....!');
    segundaFuncion();
}
function segundaFuncion(){
    console.log('Desde la segunda funcion');
   
    usuarioAutenticado('Pablo');
}

function usuarioAutenticado(usuario){
    console.log('Autenticando Usuario...espere..');
    console.log(`Usuario Autenticado Exitosamente: ${usuario}  `);
}