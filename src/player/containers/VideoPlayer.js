import React, { Component } from "react";
import VideoPlayerLayout from "../components/VideoPlayerLayout";
import Video from "../components/Video";
import Title from "../components/Title";
import PlayPause from "../components/PlayPause";
import Timer from "../components/Timer";
import Controls from "../components/VideoPlayerControls";
class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0
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
      currentTime: this.video.currentTime
    });
  };

  render() {
    const { autoplay } = this.props;

    return (
      <VideoPlayerLayout>
        <Title title="Z Melo" />
        <Controls>
          <PlayPause pause={this.state.pause} handleClick={this.togglePlay} />
          <Timer duration={this.state.duration} currentTime={this.state.currentTime} />
        </Controls>

        <Video
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
          autoPlay={autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;
