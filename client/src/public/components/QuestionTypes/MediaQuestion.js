import React, { Component } from 'react';
import ButtonArray from './QuestionComponents/ButtonArray.js';
import QuestionText from './QuestionComponents/QuestionText.js';
import MediaPlayer from './QuestionComponents/MediaPlayer.js';

class MediaQuestion extends Component {
  // PROPS
  // text = text for the question
  // buttonValues = objects for the button (with key : int, text : str, correct : bool)
  constructor(props) {
    super(props);
    this.state = {
      buttonHidden: true,
      mediaMounted: false
    };
    this.checkMediaMounted = this.checkMediaMounted.bind(this);
  }

  checkMediaMounted() {
    setTimeout(() => {
      this.setState({
        buttonHidden: false
      })
    }, 2000);
  }
  
  render() {
    var buttons; 
    if (!this.state.buttonHidden){
      buttons = <ButtonArray incrementQuestion={this.props.incrementQuestion} buttonValues={this.props.buttonValues}></ButtonArray>
    }
    return (
      <div className="TextQuestion">
        <QuestionText text={this.props.text}></QuestionText>
        <MediaPlayer checkMediaMounted={this.checkMediaMounted} videoId={this.props.videoId}></MediaPlayer>
        {buttons}
      </div>
    )
  }
}

export default MediaQuestion;