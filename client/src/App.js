import React, { useEffect } from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import AuthPage from './pages/AuthPage/Container';
import RegisterPage from './pages/Register/Container';
import ProfilePage from './pages/Profile/Container';
import {setAuth, setUserId} from './reducers/auth'
import UsersPage from './pages/UsersPage/Container';
import Navigation from './pages/Navigation/Markup';
import FriendsPage from './pages/Friends/Container';


function App({userId, authIn, setAuth, setUserId}) {

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
          <Navigation authIn={authIn}/>
          <Switch>
            <Route exact path="/">
              <AuthPage 
                authIn={authIn}
                userId={userId}
                setAuth={setAuth}
                setUserId={setUserId}
              />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
            <Route exact path="/profile">
              <ProfilePage />
            </Route>
            <Route exact path="/users">
              <UsersPage />
            </Route>
            <Route exact path="/friends">
              <FriendsPage />
            </Route>
          </Switch>
     </div>
    </BrowserRouter>

  );
}

let props = (state) => ({
  authIn: state.auth.authIn,
  userId: state.auth.userId
})


export default connect(props, {setAuth, setUserId})(App);
