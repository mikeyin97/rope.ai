import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './public/stylesheets/App.css';
import Home from "./public/components/Home.js";
import Lobby from "./public/components/Lobby.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:roomId" component={Lobby} />
      </Switch>
    </Router>
  );
}

export default App;

// import React from 'react';
// import Quiz from './public/components/Quiz.js';

// import './public/stylesheets/App.css';

// const App = () => {
//   return (
//     <div id = "App">
      
//     </div>
//   );
// }

// export default App;