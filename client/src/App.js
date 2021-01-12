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
          },
          {
            key: 3,
            type: "image",
            text: "Who this",
            imgURL: "https://i.imgur.com/2v8z2Z7.jpg",
            buttonValues:  
              [{
                key: 1,
                text: "elaina",
                correct: true, 
                
              }, 
              {
                key: 2,
                text: "saya",
                correct: false, 
              }]
          },
          {
            key: 4,
            type: "youtubevideo",
            videoId: "dDR1DFtik0E",
            text: "Hello",
            buttonValues:  
              [{
                key: 1,
                text: "elaina",
                correct: true, 
                
              }, 
              {
                key: 2,
                text: "saya",
                correct: false, 
              }]
          }
        ]
      }></Quiz>
    </div>
  );
}

export default App;