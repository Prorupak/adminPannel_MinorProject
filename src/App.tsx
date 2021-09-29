import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Dashboard from './Pages/Dashboard/Dashboard';
import SideMenu from './Components/SideMenu/SideMenu';
import SmallMenu from './Components/SmallMenu/SmallMenu';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route component={SmallMenu} path="/smallMenu" />
          <Route component={SideMenu} path="/SideMenu" />
          <Route component={Dashboard} path="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
