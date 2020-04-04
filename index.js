import React from "react";
import ReactDOM from "react-dom";
import Playlist from "./src/playlist/components/Playlist"
import data from "./src/api.json";


const container = document.getElementById("app");

//ReactDOM.render(_que_, _donde_);
ReactDOM.render(
  <Playlist data={data}/>,
  container
);
