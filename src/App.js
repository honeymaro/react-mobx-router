import React, { useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from "react-hot-loader/root";
import { inject, observer } from "mobx-react";
import { Helmet } from "react-helmet";
import { Switch, Route, useLocation } from "react-router-dom";

import Main from "pages/Main";

import "./App.css";

const App = inject("routing")(
  observer(() => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>app-name</title>
        </Helmet>
        {/* <Header /> */}
        <Switch>
          <Route path="/" exact component={Main} />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  })
);

export default process.env.NODE_ENV === "development" ? hot(App) : App;
