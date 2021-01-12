import React, { Component } from 'react';
import TextQuestion from './QuestionTypes/TextQuestion.js';
import ImageQuestion from './QuestionTypes/ImageQuestion.js';
import YoutubeVideoQuestion from './QuestionTypes/YoutubeVideoQuestion.js';

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
    }, 1000);
  }

  finishQuiz() {

  }
  
  render() {
    var questions = this.props.questions;

    var question;
    if (questions[this.state.currQuestion].type === "text") {
      question =  <TextQuestion {...questions[this.state.currQuestion]} incrementQuestion={this.incrementQuestion}></TextQuestion>;
    } else if (questions[this.state.currQuestion].type === "image") {
      question =  <ImageQuestion {...questions[this.state.currQuestion]} incrementQuestion={this.incrementQuestion}></ImageQuestion>;
    } else if (questions[this.state.currQuestion].type === "youtubevideo") {
      question =  <YoutubeVideoQuestion {...questions[this.state.currQuestion]} incrementQuestion={this.incrementQuestion}></YoutubeVideoQuestion>;
    }

    return (
      <div className="Quiz">
        {question}
      </div>
    )
  }
}

export default Quiz;
