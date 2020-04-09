import React, { Component } from "react";
import "./Video.css";

class Video extends Component {
  render() {
    const { src, autoPlay } = this.props;

    return (
      <div className="Video">
        <video autoPlay={autoPlay} src={src} />
      </div>
    );
  }
}

export default Video;
