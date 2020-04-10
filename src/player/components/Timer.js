import React from "react";
import "./Timer.css";

function formattedTime(secs) {
  const minutes = parseInt(secs / 60, 10);
  const seconds = parseInt(secs % 60, 10);

  return `${minutes}:${leftPad(seconds.toString())}`;
}

function leftPad(number){
    const pad = "00";
    return pad.substring(0,(pad.length-number.length)) + number;
}

function Timer(props) {
  const { currentTime, duration } = props;
  return (
    <div className="Timer">
      <p>
        <span>
          {formattedTime(currentTime)} / {formattedTime(duration)}
        </span>
      </p>
    </div>
  );
}

export default Timer;
