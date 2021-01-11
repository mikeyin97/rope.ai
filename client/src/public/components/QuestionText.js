import React, { Component } from 'react';

class QuestionText extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className = "QuestionText">
        <p>
          {this.props.text}
        </p>
      </div>   
    )
  }
}

export default QuestionText;