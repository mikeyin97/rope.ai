import React, { Component } from 'react';
import './stylesheets/Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#000000",
      background: "#ffffff"
    };
    this.checkCorrect = this.checkCorrect.bind(this);
  }

  checkCorrect() {
    // clicked by, points value
    if (!this.props.clicked){
      if (this.props.correct === true) {
        this.setState({
          background: '#00ff00',
          color: "#ffffff"
        });
      } else {
        this.setState({
          background: '#ff0000',
          color: "#ffffff"
        });
      }
      this.props.incrementQuestion();
      this.props.markClicked();
    }
  }
  
  render() {
    return (
      <button style={{"backgroundColor": this.state.background, "color": this.state.color}} onClick={this.checkCorrect}>
        {this.props.text}
      </button>
    )
  }
}

export default Button;