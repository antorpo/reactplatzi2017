import React from "react";

/*
    Usamos la composicion para 
    mejorar la escabilidad de la
    solucion para no estar 
    obligados a colocar ciertos
    componentes.
*/
function Icon(props) {
  const {size, color} = props;
  return (
    <svg
      viewBox="0 0 32 32"
      height={size}
      width={size}
      fill={color}
    >
      {props.childen}
    </svg>
  );
}

export default Icon;
