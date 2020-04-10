import React from "react";
import "./VideoPlayerLayout.css";

function VideoPlayerLayout(props){
    const {setRef} = props;

    return(
        <div className="VideoPlayer" ref={setRef}>
            {props.children}
        </div>
    );
}

export default VideoPlayerLayout;