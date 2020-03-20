import React, { useState } from "react";
import Home from "./component/home/home";
import Nav from "./component/nav/nav";
import Footer from "./component/footer/footer";
import Biography from "./component/biography/biography";
import Music from "./component/music/music";
import Discography from "./component/discography/discography";
import PhoneMenu from "./component/nav/phoneMenu";
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
