import React from "react";
import "./App.css";
import Home from "./component/home";
import Nav from "./component/nav";
import New from "./component/new";
import Footer from "./component/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Switch>
          <Route path="/news" component={New} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
