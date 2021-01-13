import React, { Component } from 'react';
import ButtonArray from './QuestionComponents/ButtonArray.js';
import QuestionText from './QuestionComponents/QuestionText.js';
import TextAnswer from './QuestionComponents/TextAnswer.js';

class TextQuestion extends Component {
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
    console.log(this.props.answe);
    if (!this.state.answerHidden){
      if (this.props.answerType === "buttons"){
        answer = <ButtonArray incrementQuestion={this.props.incrementQuestion} buttonValues={this.props.answerData.buttonValues}></ButtonArray>
      } else if (this.props.answerType === "text"){
        answer = <TextAnswer incrementQuestion={this.props.incrementQuestion} answer={this.props.answerData.answer}></TextAnswer>
      }
    }
    return (
      <div className="TextQuestion">
        <QuestionText text={this.props.questionData.text}></QuestionText>
        {answer}
      </div>
    )
  }
}

export default TextQuestion;