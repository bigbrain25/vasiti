import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Appreciation from "./pages/Appreciation";
import Testimonial from "./component/card/testimonial";
import Footer from "./component/Footer";
import nav from "./component/nav/nav";
import Stories from "./pages/Stories";
import Home from "./pages/home";

const Routes = () => {
  return (
    <Router>
      <Switch>
              <Route exact path="/testimony" component={Testimonial} />
              <Route exact path="/" component={Home} />
    <Route path="/stories" component={Stories} />
    <Route path="/thank-you" component={Appreciation} />
              <Route path="/footer" component={Footer} />
              <Route path="/nav" component={nav} />

      </Switch>
    </Router>
  );
};

export default Routes;
