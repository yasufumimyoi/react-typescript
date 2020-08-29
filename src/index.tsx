import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const AppRouter: React.FC = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/contents" component={Contents} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
