import React, { Component } from 'react';
import ButtonArray from './QuestionComponents/ButtonArray.js';
import QuestionText from './QuestionComponents/QuestionText.js';

class TextQuestion extends Component {
  // PROPS
  // text = text for the question
  // buttonValues = objects for the button (with key : int, text : str, correct : bool)
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <div className="TextQuestion">
        <QuestionText text={this.props.text}></QuestionText>
        <ButtonArray buttonValues={this.props.buttonValues}></ButtonArray>
      </div>
    )
  }
}

export default TextQuestion;