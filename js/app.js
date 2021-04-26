import {ConectarApi} from './classes/conectarAPI.js';
import {InterfaceUser} from './classes/InterfaceUser.js';
let UI=new InterfaceUser();

window.addEventListener('submit',obtenerDatos);

function obtenerDatos(e){
  e.preventDefault();
  const inputCiudad=document.querySelector('#ciudad').value,
        inputPais=document.querySelector('#pais').value;

  if(inputCiudad === '' || inputPais === ''){
    UI.mostrarMensaje('error','Todos los campos son obligatorios');
    return;
  };

  UI.mostrarMensaje('succes','Cargando...');

  new ConectarApi(inputCiudad,inputPais);
}