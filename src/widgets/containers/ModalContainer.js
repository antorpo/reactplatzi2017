import React, {Component} from "react";
import {createPortal} from "react-dom";

/*
    Portales:
    Lo usamos cuando necesitamos crear una 
    estructura separada del DOM principal,
    por ejemplo el caso de los modales se 
    puede encapsular aca, ya que estos estan 
    practicamente por fuera del Layout (ocupan 
    toda la pantalla) y ponerlos llevaria una
    serie de estilos que se deben sobreponer.

    Recibe los mismos parametros que el render 
    createPortal(_que_, _donde_);
*/
class ModalContainer extends Component{
    render(){
        const container = document.getElementById("modal-container");
        return createPortal( this.props.children,container);
    }
}

export default ModalContainer;