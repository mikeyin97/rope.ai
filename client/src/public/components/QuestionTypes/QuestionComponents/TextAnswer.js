import React, { Component } from 'react';

class TextAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false, 
      text: "",
      correct: false,
    };
    this.checkCorrect = this.checkCorrect.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    this.setState({text: e.target.value});
  }

  checkCorrect(e) {
    var answers = this.props.answers.map(v => v.toLowerCase());
    // clicked by, points value
    if (!this.state.submitted){
      this.setState({
        submitted: true
      });
      if (answers.includes(this.state.text.toLowerCase())) {
        this.setState({
          correct: true
        });
      } else {
        this.setState({
          correct: false
        });
      }
      this.props.incrementQuestion();
    }
  }
  
  render() {

    var borderColor;
    var backgroundColor;
    if (!this.state.submitted) {
      borderColor = "black"
    } else {
      if (this.state.correct){
        borderColor = "green"
        backgroundColor = "green"
      } else {
        borderColor = "red"
        backgroundColor = "red"
      }
    }

    return (
      <form action="#" onSubmit={this.checkCorrect}>
        <input style={{"border":"2px solid " + borderColor,"backgroundColor": backgroundColor}} type="text" value={this.state.text} onChange={this.handleTextChange}/>
        <input type="submit" value="Submit"/>
      </form> 
    )
  }
}

export default TextAnswer;