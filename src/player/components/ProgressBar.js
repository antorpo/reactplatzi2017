import React from "react";
import "./ProgressBar.css";

function ProgressBar(props) {
  const { value, duration, handleProgressChange } = props;

  return (
    <div className="ProgressBar">
      <input
        type="range"
        min={0}
        max={duration}
        value={value}
        onChange={handleProgressChange}
      />
    </div>
  );
}

export default ProgressBar;
