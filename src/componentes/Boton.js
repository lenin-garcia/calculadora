import React from "react";
import '../holjas_de_estilos/Boton.css'

function Boton (props){
    
    const esOperador =(valor) =>{
        return isNaN(valor) && (valor !== '.') &&(valor !== '=')
    }

    return(
        <div
        className={`boton-children ${esOperador(props.children)? 'operador' : null }`.trimEnd() }
        onClick ={()=>props.manejarClic(props.children)}>
            {props.children}
        </div>
    );
}

export default Boton;