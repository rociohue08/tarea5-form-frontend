//para tener acceso al formulario con el id
const formulario = document.querySelector('#formulario');

//crear funcion para traer todos lod datos del form
const procesaTodo = (event) => {  //el evento va a ser submit)
event.preventDefault();


 const datos= new FormData(event.target);

 /* en caso de necesitar traer un solo dato
const nombre = datos.get('nombre');
console.log({nombre});
*/

 //crear objeto que va incluir todos los valores del form
const datosCompletos = Object.fromEntries(datos.entries());
console.log(JSON.stringify(datosCompletos));

}

formulario.addEventListener('submit', procesaTodo);