import React from "react";
import { Switch, Route } from "react-router-dom";
import "./css/App.css";
import Main from "./pages";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  );
}

export default App;
