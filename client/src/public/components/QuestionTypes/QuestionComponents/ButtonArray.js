import React, { Component } from 'react';
import Button from './Button.js';

class ButtonArray extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <div className="ButtonArray">
        {this.props.buttonValues.map((items) => {
          return <Button key={items.key} text={items.text} correct={items.correct}></Button>
        })}
      </div>
    )
  }
}

export default ButtonArray;