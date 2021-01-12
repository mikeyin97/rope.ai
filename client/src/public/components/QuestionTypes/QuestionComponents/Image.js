import React, { Component } from 'react';
import './stylesheets/Image.css';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className = "QuizImageDiv">
        <img className = "QuizImage" src={this.props.imgURL} alt="">
        </img>
      </div>   
    )
  }
}

export default Image;