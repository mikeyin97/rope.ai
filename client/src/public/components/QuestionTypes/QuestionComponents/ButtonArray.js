import React, { Component } from 'react';
import Button from './Button.js';

class ButtonArray extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.markClicked = this.markClicked.bind(this);
  }
  
  markClicked() {
    this.setState({
      clicked: true
    })
  }

  render() {
    return (
      <div className="ButtonArray">
        {this.props.buttonValues.map((items) => {
          return <Button clicked={this.state.clicked} markClicked={this.markClicked} incrementQuestion={this.props.incrementQuestion} key={items.key} text={items.text} correct={items.correct}></Button>
        })}
      </div>
    )
  }
}

export default ButtonArray;