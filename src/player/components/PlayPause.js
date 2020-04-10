import React from "react";
import Play from "../../icons/components/Play";
import Pause from "../../icons/components/Pause";
import "./PlayPause.css";

function PlayPause(props) {
  const { handleClick, pause } = props;

  return (
    <div className="PlayPause">
      {pause ? (
        <button onClick={handleClick}>
          <h4 className="text-danger">></h4>
          <Play size={25} color="red" />
        </button>
      ) : (
        <button onClick={handleClick}>
          <h4 className="text-danger">//</h4>
          <Pause size={25} color="red" />
        </button>
      )}
    </div>
  );
}

export default PlayPause;
