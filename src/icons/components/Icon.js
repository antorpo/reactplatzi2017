import React from "react";

/*
    Usamos la composicion para 
    mejorar la escabilidad de la
    solucion para no estar 
    obligados a colocar ciertos
    componentes.
*/
function Icon(props) {
  const {height, width, color} = props;
  return (
    <svg
      viewBox="0 0 32 32"
      height={height}
      width={width}
      fill={color}
    >
      {props.childen}
    </svg>
  );
}

export default Icon;
