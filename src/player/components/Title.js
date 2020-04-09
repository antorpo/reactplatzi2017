import React from "react";
import "./Title.css";

function Title(props){
    const {title} = props;
    return(
        <div className="Title">
            <h2>{title}</h2>
        </div>
    );
};

export default Title;