import React from "react";
import "./VideoPlayerLayout.css";

function VideoPlayerLayout(props){
    return(
        <div className="VideoPlayer">
            {props.children}
        </div>
    );
}

export default VideoPlayerLayout;