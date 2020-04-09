import React from "react";
import Play from "../../icons/components/Play";
import Pause from "../../icons/components/Pause";
import "./PlayPause.css";

function PlayPause(props){
    return(
        <div className="PlayPause">
            <button>
                <Play size={25} color="white"/>
            </button>
            <button>
                <Pause size={25} color="white"/>
            </button>
        </div>
    );
};

export default PlayPause;