import React from "react";

/*
    Usamos la composicion para 
    mejorar la escabilidad de la
    solucion para no estar 
    obligados a colocar ciertos
    componentes.
*/
function Icon(props) {
  const { size, color } = props;
  return (
    <svg 
      fill={color} 
      height={size} 
      width={size} 
      viewBox="0 0 32 32"
    >
      {props.childen}
    </svg>
  );
}

export default Icon;
