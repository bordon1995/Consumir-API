export class InterfaceUser{
  
  mostrarMensaje(tipo,mensaje){

    const verificacion=document.querySelector('.error');
    const html=document.createElement('div');
    
    if(!verificacion){
      if(tipo === 'error'){

      html.classList.add('bg-red-100','border-red-400','text-red-700','px-4','py-3','rounded','max-w-md','mx-auto','mt-6','text-center','error');

      html.innerHTML=`
      <strong class="font-bold">Error!</strong>
      <span class="block">${mensaje}</span>`;

      }else{

        html.classList.add('bg-green-100','border-green-400','text-green-700','px-4','py-3','rounded','max-w-md','mx-auto','mt-6','text-center');

        html.innerHTML=`
        <strong class="font-bold">Succes!</strong>
        <span class="block">${mensaje}</span>`;

      }
    }

    document.querySelector('.container').appendChild(html);

    setTimeout(()=>{
      html.remove();
    },3000)

  }

  mostrarDatos(datos){

    const html=document.createElement('p');
    html.classList.add('font-bold','text-6xl');
    html.innerHTML=`${datos.temperatura} &#8451;`;

    const p=document.createElement('p');
    p.classList.add('text-white');
    p.innerHTML=`<p>temp max:${datos.temperaturaMaxima}</p>
    <p>temp min:${datos.temperaturaMinima}</p>`;
    

    const div=document.createElement('div');
    div.classList.add('text-center','text-white');
    div.appendChild(html)
    div.appendChild(p);

    document.querySelector('#resultado').appendChild(div);

  }

  limpiarHtml(){
    while(document.querySelector('#resultado').firstChild){
      document.querySelector('#resultado').removeChild(document.querySelector('#resultado').firstChild)
    }
  }

}