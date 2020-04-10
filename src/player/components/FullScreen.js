import React from "react";
import FullScreenIcon from "../../icons/components/FullScreen";
import "./FullScreen.js";

function FullScreen(props) {
  const { handleFullScreen } = props;
  return (
    <div className="FullScreen" onClick={handleFullScreen}>
      <FullScreenIcon size={25} color="white" />
    </div>
  );
}

export default FullScreen;
