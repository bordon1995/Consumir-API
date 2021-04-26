import {InterfaceUser} from './InterfaceUser.js';
let UI=new InterfaceUser();

export class ConectarApi {
  constructor(ciudad,pais){
    this._ciudad=ciudad;
    this._pais=pais;
    this.obtenerResultado();
  }

  obtenerResultado(){

    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${this._ciudad},${this._pais}&appid=8d2a1bcc63d15ca1a4ea705f01dcdef7`;

    fetch(URL)
      .then(resultado => resultado.json())
      .then(dato => {

        UI.limpiarHtml();

        if(dato.cod === "404"){
          UI.mostrarMensaje('error','Ciudad Incorrecta')
          return;
        }

        this.obtenerDatos(dato);
      })
  }

  obtenerDatos(dato){
    const {main: {temp,temp_max,temp_min} } = dato;

    let objeto={
      temperatura:parseInt((temp - 273.15)),
      temperaturaMaxima:parseInt((temp_max - 273.15)),
      temperaturaMinima:parseInt((temp_min - 273.15))
    };

    UI.mostrarDatos(objeto);
  }
}