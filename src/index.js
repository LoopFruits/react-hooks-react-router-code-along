import React from "react";
import ReactDOM from "react-dom";
import About from "./About";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";



function App() {
  return (
    <>
  <Switch>
  <Route path="/about">
    <About />
  </Route>
  <Route path="/login">
    <Login />
  </Route>
  <Route exact path="/">
    <Home />
  </Route>
  </Switch>

  </>
  );
}






ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById("root")
)

