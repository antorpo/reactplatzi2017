import React, { Component } from "react";
import "./Video.css";

class Video extends Component {
  componentWillReceiveProps(nextProps){
    /* Comparar los props anteriores con unos del futuro 
       y con eso saber si ejecutar una accion o no.
    */
    if(nextProps.pause !== this.props.pause){
      this.togglePlay();
    }
  }

  togglePlay(){
    if(this.props.pause){
      this.video.play();
    }else{
      this.video.pause();
    }
  }

  setRef = (element) => {
    // Capturamos el elemento html con ref.
    this.video = element;
  };

  render() {
    const { src, autoPlay } = this.props;

    return (
      <div className="Video">
        <video autoPlay={autoPlay} src={src} ref={this.setRef} />
      </div>
    );
  }
}

export default Video;
