import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Feedbacks from "./components/Feedbacks";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NewFeedback from "./components/NewFeedback";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/feedbacks" component={Feedbacks} />
        <Route exact path="/feedbacks/new" component={NewFeedback} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
