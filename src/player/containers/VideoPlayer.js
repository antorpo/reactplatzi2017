import React, { Component } from "react";
import VideoPlayerLayout from "../components/VideoPlayerLayout";
import Video from "../components/Video";
import Title from "../components/Title";
import PlayPause from "../components/PlayPause";
import Timer from "../components/Timer";
import Controls from "../components/VideoPlayerControls";
import ProgressBar from "../components/ProgressBar";
import Spinner from "../components/Spinner";
import Volume from "../components/Volume";
import FullScreen from "../components/FullScreen";
class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
    volumePrev: 0,
    mute: false,
  };

  togglePlay = () => {
    this.setState({
      pause: !this.state.pause,
    });
  };

  componentDidMount() {
    this.setState({
      pause: !this.props.autoplay,
    });
  }

  handleLoadedMetadata = (event) => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration,
    });
  };

  handleTimeUpdate = () => {
    this.setState({
      currentTime: this.video.currentTime,
    });
  };

  handleProgressChange = (event) => {
    this.video.currentTime = event.target.value;
  };

  handleSeeking = () => {
    // Detectar cuando se este cargando:
    this.setState({
      loading: true,
    });
  };

  handleSeeked = () => {
    // Detectar cuando se halla cargado:
    this.setState({
      loading: false,
    });
  };

  handleVolumeChange = (event) => {
    this.video.volume = event.target.value;
  };

  handleVolumeClick = () => {
    this.video.muted = !this.video.muted;
  };

  handleFullScreen = () => {
    if(!document.webkitIsFullScreen){
      this.player.webkitRequestFullScreen();
    }else{
       document.webkitExitFullScreen();
    }
  };

  setRef = (element) => {
    this.player = element;
  };

  render() {
    const { autoplay } = this.props;

    return (
      <VideoPlayerLayout setRef={this.setRef}>
        <Title title={this.props.title} />
        <Controls>
          <PlayPause pause={this.state.pause} handleClick={this.togglePlay} />
          <Timer
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
          <ProgressBar
            duration={this.state.duration}
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            handleVolumeChange={this.handleVolumeChange}
            handleVolumeClick={this.handleVolumeClick}
          />
          <FullScreen handleFullScreen={this.handleFullScreen} />
        </Controls>
        <Spinner active={this.state.loading} />
        <Video
          src={this.props.src}
          autoPlay={autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;
