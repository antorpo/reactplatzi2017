import React from "react";
import ReactDOM from "react-dom";
import Home from "../pages/containers/Home";
import data from "../api.json";


const container = document.getElementById("home-container");

//ReactDOM.render(_que_, _donde_);
ReactDOM.render(
  <Home data={data}/>,
  container
);
