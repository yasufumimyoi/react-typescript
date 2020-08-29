import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "./Contact";
import Email from "./Email";
import Login from "./Login";

const Header: React.FC = () => {
  return (
    <div>
      <h2>Website.com</h2>
      <Router>
        <Link to="/contact">Contact us</Link>
        <Link to="/email">Email</Link>
        <Link to="/login">Login</Link>
        <Switch>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/email" component={Email} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
};

export default Header;
