import './App.css';
import { useState } from "react";
import { ListComponent } from './components/list';
function App() {
  /* Por que usamos 2 listas?
    "listatofilter" conserva los valores reales y estaticos desde un inicio por eso la necesitamos
    porque si usaramos solo la variable "lista" al filtrar nos quedamos solo con el valor filtrado
    aunque lo borraramos todo en el input el programa no se acordaria de los valores iniciales
  */

  //es necesario rellenar la lista al inicio porque sino en el primer renderizado no aparece 
  const [lista,setLista]=useState(["Jonathan","Victor","Julian","Manuel","Eduard","Fabricio"]);
  
  /*necesitamos esta lista con los valores estaticos originales 
  para que en el filtrado siempre se 
  tengan datos para filtrar*/
  const listatofilter=["Jonathan","Victor","Julian","Manuel","Eduard","Fabricio"];

  function filtrar(value){
      //retornamos la lista con los valores o valor filtrado
      let nombreBuscado=listatofilter.filter((item)=>{
            if(item.toLowerCase().includes(value.toLowerCase())){
              return item;
            }
      })
      // actualizamos la lista que ya de por si esta enviada como prop en ListComponent
      setLista(nombreBuscado);
  }

  //se activa este metodo cada vez que el usuario ingresa una letra en la interfaz
  function cambiar(e){ filtrar(e.target.value) }


  return (
    <div className="App">
        {/* introducimos el nombre que queremos buscar */}
        <input placeholder="introduce dato" onChange={cambiar} />
        {/* componente que solo lista nuestro nombres */}
        <ListComponent listita={lista} />
    </div>
  );
}

export default App;
