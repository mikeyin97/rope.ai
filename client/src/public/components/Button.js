import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.checkCorrect = this.checkCorrect.bind(this);
  }

  checkCorrect () {
    // clicked by, points value
    if (this.props.correct == true) {
      alert("HI");
    } else {
      alert("Bye");
    }
  }
  
  render() {
    return (
      <button onClick={this.checkCorrect}>
        {this.props.text}
      </button>
    )
  }
}

export default Button;