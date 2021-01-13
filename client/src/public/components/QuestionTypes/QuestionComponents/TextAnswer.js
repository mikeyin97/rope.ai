import React, { Component } from 'react';

class TextAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false, 
      text: ""
    };
    this.checkCorrect = this.checkCorrect.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    this.setState({text: e.target.value});
  }

  checkCorrect(e) {
    // clicked by, points value
    if (!this.state.submitted){
      console.log(this.state.text);
      this.setState({
        submitted: true
      })
      this.props.incrementQuestion();
    }
  }
  
  render() {
    var borderColor;
    if (!this.state.submitted) {
      borderColor = "black"
    } else {
      borderColor = "green"
    }
    return (
      <form action="#">
        <input style={{"border":"2px solid " + borderColor}} type="text" value={this.state.text} onChange={this.handleTextChange}/>
        <input type="submit" value="Submit" onClick={this.checkCorrect}/>
      </form> 
    )
  }
}

export default TextAnswer;