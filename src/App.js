import React, { useState } from "react";
import Home from "./component/home";
import Nav from "./component/nav";
import Footer from "./component/footer";
import Biography from "./component/biography";
import Music from "./component/music";
import Discography from "./component/discography";
import PhoneMenu from "./component/phoneMenu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
function App() {
  let [state, changeValue] = useState(false);
  return (
    <Router>
      <div>
        <Nav fclose={() => changeValue(!state)} buttonTransform={state} />
        <PhoneMenu display={state} fclose={() => changeValue(!state)} />
        <Switch>
          <Route exact path="/BandMaidFP/" component={Home} />
          <Route exact path="/BandMaidFP/Biography" component={Biography} />
          <Route exact path="/BandMaidFP/Music" component={Music} />
          <Route exact path="/BandMaidFP/Discography" component={Discography} />
          <Redirect to="/BandMaidFP/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
