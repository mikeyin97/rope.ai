import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class MediaVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.checkMediaMounted()
  }

  render() {
    return (
      <div className = "VideoDiv">
        {/* <YouTube videoId={this.props.videoId}/> */}
        {/* need to set options for each type*/}
        <ReactPlayer playing={true} controls={true} url={"https://www.youtube.com/watch?v=dDR1DFtik0E"} autoPlay></ReactPlayer>
        {/* <ReactPlayer playing={true} controls={true} url={"https://animethemes.moe/video/YuruCampS2-OP1.webm"} autoplay></ReactPlayer> */}
        {/* <ReactPlayer playing={true} controls={true} url={"https://soundcloud.com/user615742365/shomin-sample-opening-ichizu-recipe-by-idol-college"} autoplay></ReactPlayer> */}
      </div>   
    )
  }
}

export default MediaVideo;