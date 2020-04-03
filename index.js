import React from "react";
import ReactDOM from "react-dom";
import Media from "./src/playlist/components/Media";

const container = document.getElementById("app");

//ReactDOM.render(_que_, _donde_);
ReactDOM.render(
  <Media
    title="¿Que es responsive Design?"
    author="Antopixel"
    image="../../../images/covers/responsive.jpg"
    type="video"
  />,
  container
);
