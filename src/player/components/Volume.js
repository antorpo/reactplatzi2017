import React from "react";
import VolumeIcon from "../../icons/components/Volume";
import "./Volume.css";

function Volume(props) {
  const { handleVolumeChange, handleVolumeClick} = props;
  return (
    <button className="Volume" onClick={handleVolumeClick}>
      <VolumeIcon size={25} color="white" />

      <div className="Volume-range">
        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          onChange={handleVolumeChange}
        />
      </div>
    </button>
  );
}

export default Volume;
