import React, { Component } from 'react';
import TextQuestion from './QuestionTypes/TextQuestion.js';

class Quiz extends Component {
  // Props
  // Questions: objects with key : int, type : str, other props
  constructor(props) {
    super(props);
    this.state = {
      currQuestion: 0,
    };
    this.incrementQuestion = this.incrementQuestion.bind(this);
  }

  incrementQuestion() {
    var currQuestion = this.state.currQuestion;
    var questions = this.props.questions;
    setTimeout(() => {
      if (currQuestion < questions.length - 1) {
        this.setState({
          currQuestion: currQuestion + 1
        })
      }
    }, 5000);
  }
  
  render() {
    var questions = this.props.questions;

    var question;
    if (questions[this.state.currQuestion].type === "text") {
      question =  <TextQuestion {...questions[this.state.currQuestion]} incrementQuestion={this.incrementQuestion}></TextQuestion>;
    }

    return (
      <div className="Quiz">
        {question}
      </div>
    )
  }
}

export default Quiz;
