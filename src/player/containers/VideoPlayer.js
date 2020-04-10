import React, { Component } from "react";
import VideoPlayerLayout from "../components/VideoPlayerLayout";
import Video from "../components/Video";
import Title from "../components/Title";
import PlayPause from "../components/PlayPause";

class VideoPlayer extends Component {
  state = {
    pause: true
  };

  togglePlay = () => {
    this.setState({
      pause: !this.state.pause
    });
  };

  componentDidMount(){
    this.setState({
      pause: (!this.props.autoplay)
    });
  }

  render() {
    const {autoplay} = this.props;

    return (
      <VideoPlayerLayout>
        <Title title="Z Melo"/>
        <PlayPause
          pause={this.state.pause}
          handleClick={this.togglePlay}
        />
        <Video
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
          autoPlay={autoplay}
          pause={this.state.pause}
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;
