import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";



// what to import for routes //
import HomePage from './Components/HomePage';

//-------- Above Is Routes --------//

function App() {
  return (
    <div>
      <HashRouter>
        <Route exact path="/" component={HomePage} />
      </HashRouter>
    </div>
  );
}

export default App;
