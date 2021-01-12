import React, { Component } from 'react';
import ButtonArray from './QuestionComponents/ButtonArray.js';
import QuestionText from './QuestionComponents/QuestionText.js';

class TextQuestion extends Component {
  // PROPS
  // text = text for the question
  // buttonValues = objects for the button (with key : int, text : str, correct : bool)
  constructor(props) {
    super(props);
    this.state = {
      buttonHidden: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        buttonHidden: false
      })
    }, 1000);
  }
  
  render() {
    var buttons; 
    if (!this.state.buttonHidden){
      buttons = <ButtonArray incrementQuestion={this.props.incrementQuestion} buttonValues={this.props.buttonValues}></ButtonArray>
    }
    return (
      <div className="TextQuestion">
        <QuestionText text={this.props.text}></QuestionText>
        {buttons}
      </div>
    )
  }
}

export default TextQuestion;