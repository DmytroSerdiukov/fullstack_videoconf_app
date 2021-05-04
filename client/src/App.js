import React, { useEffect } from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import AuthPage from './pages/AuthPage/Container';
import RegisterPage from './pages/Register/Container';
import ProfilePage from './pages/Profile/Container';
import {setAuth} from './reducers/auth'


function App({authIn, setAuth}) {

  useEffect( () => {
    readCookie()
  }, [])

  const readCookie = () => {
    const user = Cookies.get('user')
    if (user) {
      setAuth(true)
    }
  }

  return (
    <BrowserRouter>
      <div>
          <Switch>
            <Route exact path="/">
              <AuthPage authIn={authIn} setAuth={setAuth}/>
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
            <Route exact path="/profile">
              <ProfilePage />
            </Route>
          </Switch>
     </div>
    </BrowserRouter>

  );
}

let props = (state) => ({
  authIn: state.auth.authIn
})


export default connect(props, {setAuth})(App);
