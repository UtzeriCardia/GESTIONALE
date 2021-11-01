import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "./pages/Login";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login}>
        {/* TODO: REDIRECT se logged true  <Redirect to="/homepage" />*/} 
      </Route>
    </Switch>
  );
}

export default App;
