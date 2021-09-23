import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Dashboard from './Pages/Dashboard/Dashboard';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route component={Dashboard} path="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
