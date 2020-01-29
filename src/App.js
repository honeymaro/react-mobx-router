import React, { Component } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from "react-hot-loader/root";
import { inject, observer } from "mobx-react";
import { Helmet } from "react-helmet";
import { Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import Main from "pages/Main";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

@inject("routing")
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>app-name</title>
        </Helmet>
        {/* <Header /> */}
        <ToastContainer position={toast.POSITION.TOP_CENTER} />
        <Switch>
          <Route path="/" exact component={Main} />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default process.env.NODE_ENV === "development" ? hot(App) : App;
