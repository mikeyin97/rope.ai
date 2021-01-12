import React, { Component } from 'react';
import YouTube from 'react-youtube';

class YoutubeVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className = "VideoDiv">
        <YouTube videoId={this.props.videoId}/>
      </div>   
    )
  }
}

export default YoutubeVideo;