import React, { Component } from 'react';
import ButtonArray from './QuestionComponents/ButtonArray.js';
import QuestionText from './QuestionComponents/QuestionText.js';
import Image from './QuestionComponents/Image.js';

class ImageQuestion extends Component {
  // PROPS
  // text = text for the question
  // buttonValues = objects for the button (with key : int, text : str, correct : bool)
  constructor(props) {
    super(props);
    this.state = {
      answerHidden: true
    };
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        answerHidden: false
      })
    }, 1000);
  }
  
  render() {
    var answer; 
    
    if (!this.state.answerHidden){
      answer = <ButtonArray incrementQuestion={this.props.incrementQuestion} buttonValues={this.props.answerData.buttonValues}></ButtonArray>
    }
    return (
      <div className="TextQuestion">
        <QuestionText text={this.props.questionData.text}></QuestionText>
        <Image imgURL={this.props.questionData.imgURL}></Image>
        {answer}
      </div>
    )
  }
}

export default ImageQuestion;