import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./containers/Articles";
import Article from "./containers/Article";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/article/:id" component={Article} exact />
      </Switch>
    </div>
  );
}

export default App;