import React from "react";
import "./Modal.css";

function Modal(props){
    return(
        <div className="Modal">
            {props.children}
            <button onClick={props.handleClick}>X</button>
        </div>
    );
}

export default Modal;