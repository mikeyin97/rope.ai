import React from 'react';
import Quiz from './public/components/Quiz.js';

import './public/stylesheets/App.css';

const App = () => {
  return (
    <div id = "App">
      <Quiz questions={
        [
          {
            key: 1,
            type: "text",
            text: "Click on Bye",
            buttonValues: 
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
          }, 
          {
            key: 2,
            type: "text",
            text: "Hello",
            buttonValues:  
              [{
                key: 1,
                text: "hi",
                correct: true, 
                
              }, 
              {
                key: 2,
                text: "bye",
                correct: false, 
              }]
          }
        ]
      }></Quiz>
    </div>
  );
}

export default App;