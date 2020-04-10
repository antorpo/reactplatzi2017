import React from "react";
import "./Spinner.css";

function Spinner(props) {
  const { active } = props;

  if (!active) return null;

  return (
    <div className="Spinner">
      <span>Cargando...</span>
    </div>
  );
}

export default Spinner;
