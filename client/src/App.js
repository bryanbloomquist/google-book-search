import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import JumboTron from "./components/Jumbotron";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <div>
      <Router>
        <div>
          <NavBar />
          <JumboTron />
          <Switch>
            <Route exact path = "/" component = { Search } />
            <Route exact path = "/saved" component = { Saved } />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;