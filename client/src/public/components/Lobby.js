import React from "react";

import Quiz from './Quiz.js';

const Lobby = () => {

  return (
    <Quiz questions={
      [
        {
          key: 1,
          questionType: "text",
          questionData: {
            text: "Click on Bye",
          },
          answerType: "text",
          answerData: {
            answers: ["Bye"]
          }
        }, 
        {
          key: 2,
          questionType: "text",
          questionData: {
            text: "Hello",
          },
          answerType: "buttons",
          answerData: {
            buttonValues: 
            [{
              key: 1,
              text: "noob",
              correct: false, 
              
            }, 
            {
              key: 2,
              text: "hello",
              correct: true, 
            }]
          }
        },
        {
          key: 3,
          questionType: "image",
          questionData: {
            text: "Who this",
            imgURL: "https://i.imgur.com/2v8z2Z7.jpg",
          },
          answerType: "buttons",
          answerData: {
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
        },
        {
          key: 4,
          questionType: "media",
          questionData: {
            text: "Song Name",
            videoId: "https://www.youtube.com/watch?v=dDR1DFtik0E",
          },
          answerType: "buttons",
          answerData: {
            buttonValues:  
            [{
              key: 1,
              text: "Deadman",
              correct: true, 
              
            }, 
            {
              key: 2,
              text: "Wonderland",
              correct: false, 
            }]
          } 
        }
      ]
    }></Quiz>

  );
};

export default Lobby;