import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className = "VideoDiv">
        <video src="https://animethemes.moe/video/SwordArtOnlineAlicization-ED3.webm" controls>
          Your browser does not support the video tag.
        </video>
      </div>   
    )
  }
}

export default Video;