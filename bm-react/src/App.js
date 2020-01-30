import React from "react";
import Home from "./component/home";
import Nav from "./component/nav";
import Footer from "./component/footer";
import Biography from "./component/biography";
import Music from "./component/music";
import Discography from "./component/dicography";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Biography" component={Biography} />
          <Route exact path="/Music" component={Music} />
          <Route exact path="/Discography" component={Discography} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
