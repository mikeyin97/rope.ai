import React from 'react';
import ButtonArray from './public/components/ButtonArray.js';
import QuestionText from './public/components/QuestionText.js';

import './public/stylesheets/App.css';

const App = () => {
  return (
    <div id = "App">
      <QuestionText text={"Click on Bye"}></QuestionText>
      <ButtonArray buttonValues={
        [{
          key: 1,
          text: "hi",
          correct: false, 
          
        }, 
        {
          key: 2,
          text: "bye",
          correct: true, 
        }]
      }></ButtonArray>
    
    </div>
  );
}

export default App;