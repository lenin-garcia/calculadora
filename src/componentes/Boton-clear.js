import React from "react";
import '../holjas_de_estilos/Boton-clear.css'


const BotonClear = ( props) =>{

return(
    <div className="boton-clear"
         onClick={props.manejarClear}   >
        {props.children}
    </div>
)
}

export default BotonClear;