import React, { Component } from 'react';
import TextQuestion from './QuestionTypes/TextQuestion.js';

class Quiz extends Component {
  // Props
  // Questions: objects with key : int, type : str, other props
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <div className="Quiz">
        {this.props.questions.map((items) => {
          if (items.type === "text") {
            return <TextQuestion {...items}></TextQuestion>
          }
          return 0
        })}
      </div>
    )
  }
}

export default Quiz;
