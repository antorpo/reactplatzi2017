import React, { Component } from "react";
import VideoPlayerLayout from "../components/VideoPlayerLayout";
import Video from "../components/Video";
import Title from "../components/Title";
import PlayPause from "../components/PlayPause";

class VideoPlayer extends Component {
  render() {
    return (
      <VideoPlayerLayout>
        <Title title="Z Melo"/>
        <PlayPause/>
        <Video
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
          autoPlay={true}
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;
