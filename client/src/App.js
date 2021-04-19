import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import AuthPage from './pages/AuthPage/Container';
import RegisterPage from './pages/Register/Container';

function App() {
  return (
    <BrowserRouter>
      <div>
          <Switch>
            <Route exact path="/">
              <AuthPage />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
          </Switch>
     </div>
    </BrowserRouter>

  );
}

export default App;
